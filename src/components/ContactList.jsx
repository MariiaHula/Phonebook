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
      <ul className="mt-4">
        {contacts.length ? (
          contacts.map(contact => (
            <li
              key={contact.id}
              className="mb-4 p-4 bg-white rounded-md shadow-md relative"
            >
              <div className="flex flex-col sm:flex-row md:px-2 lg:px-4">
                <p className="text-2xl font-semibold text-sky-500 sm:w-[200px]  lg:w-[400px]">
                  {contact.name}
                </p>
                <p className="text-sky-800 text-xl sm:w-[200px] md:text-2xl">
                  {contact.number}
                </p>
              </div>
              <div className="flex mt-2 absolute bottom-3 right-3 md:px-2 lg:px-4">
                <button
                  onClick={() => openEditModal(contact)}
                  className=" mr-3 w-[60px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-yellow-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-yellow-600 focus:bg-yellow-600 flex items-center justify-center md:mr-6 lg:mr-10"
                >
                  <LiaPenSolid size={30} />
                </button>

                {loading && currentId === contact.id ? (
                  <button className="  w-[60px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-red-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-red-600 focus:bg-red-600 flex items-center justify-center">
                    Deleting...
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(deleteContactThunk(contact.id))}
                    className="w-[60px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-red-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-red-600 focus:bg-red-600 flex items-center justify-center"
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
