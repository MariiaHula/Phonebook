import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useModal } from 'hooks/useModal';

import Modal from 'components/Modal';

import {
  selectCurrentID,
  selectFilteredContact,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { deleteContactThunk } from 'redux/contacts/operations';

import { EditForm } from 'components/EditForm';
import { LiaPenSolid } from 'react-icons/lia';
import { FiMinus } from 'react-icons/fi';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContact);
  const currentId = useSelector(selectCurrentID);
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const { isOpen, openModal, closeModal } = useModal();
  const [editingContact, setEditingContact] = useState(null);

  const openEditModal = contact => {
    setEditingContact(contact);
    openModal();
  };

  return (
    <>
      <ul className="mt-4 pb-[200px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mr-2 md:mr-4">
        {contacts.length ? (
          contacts.map(contact => (
            <li
              key={contact.id}
              className="p-4 bg-white rounded-md shadow-md min-w-[280px] flex flex-col justify-between"
            >
              <div>
                <p className="text-2xl font-semibold text-sky-500 mb-2 break-all">
                  {contact.name}
                </p>
                <p className="text-sky-800 text-xl">{contact.number}</p>
              </div>
              <div className="flex mt-4 justify-end">
                <button
                  onClick={() => openEditModal(contact)}
                  className="contact-list-button mr-3 w-[60px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-yellow-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-yellow-600 focus:bg-yellow-600 flex items-center justify-center"
                >
                  <LiaPenSolid size={30} />
                </button>
                {loading && currentId === contact.id ? (
                  <button className="contact-list-button w-[80px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-red-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-red-600 focus:bg-red-600 flex items-center justify-center">
                    Deleting
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(deleteContactThunk(contact.id))}
                    className="contact-list-button w-[60px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-red-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-red-600 focus:bg-red-600 flex items-center justify-center"
                  >
                    <FiMinus size={30} />
                  </button>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-700 text-3xl text-center">
            Unfortunately, there are no matches
          </p>
        )}
      </ul>
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <EditForm closeModal={closeModal} contact={editingContact} />
        </Modal>
      ) : null}
    </>
  );
};

export default ContactList;
