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
      <ul>
        {contacts.length ? (
          contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.phone}</p>
              <button onClick={() => openEditModal(contact)}>Edit</button>

              {loading && currentId === contact.id ? (
                <button>Deleting...</button>
              ) : (
                <button
                  onClick={() => dispatch(deleteContactThunk(contact.id))}
                >
                  Delete
                </button>
              )}
            </li>
          ))
        ) : (
          <p>Unfortunately, there are no matches</p>
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
