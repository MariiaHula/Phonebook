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
              className="mb-4 p-4 bg-white rounded-md  relative"
            >
              <p className="text-xl font-semibold text-blue-500">
                {contact.name}
              </p>
              <p className="text-blue-700">{contact.number}</p>
              <div className="flex mt-2 absolute bottom-3 right-3">
                <button
                  onClick={() => openEditModal(contact)}
                  className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                >
                  <LiaPenSolid size={30} />
                </button>

                {loading && currentId === contact.id ? (
                  <button className="px-4 py-2 bg-red-500 text-white rounded-full cursor-not-allowed">
                    Deleting...
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(deleteContactThunk(contact.id))}
                    className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <FiMinus size={30} />
                  </button>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-600">Unfortunately, there are no matches</p>
        )}
      </ul>
      {isOpen ? (
        <Modal>
          <EditForm closeModal={closeModal} contact={editingContact} />
        </Modal>
      ) : null}
    </>
  );
};

export default ContactList;
