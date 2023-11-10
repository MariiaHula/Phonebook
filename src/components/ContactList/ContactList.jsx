import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useModal } from 'hooks/useModal';

import Modal from 'components/Modal/Modal';

import {
  selectCurrentID,
  selectFilteredContact,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { deleteContactThunk } from 'redux/contacts/operations';

import {
  PeopleList,
  Item,
  Button,
  TextNote,
  TextName,
  TextNumber,
} from './ContactList.styled';
import { EditForm } from 'EditForm/EditForm';

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
      <PeopleList>
        {contacts.length ? (
          contacts.map(contact => (
            <Item key={contact.id}>
              <TextName>{contact.name}</TextName>
              <TextNumber>{contact.phone}</TextNumber>
              <Button onClick={() => openEditModal(contact)}>Edit</Button>

              {loading && currentId === contact.id ? (
                <Button>Deleting...</Button>
              ) : (
                <Button
                  onClick={() => dispatch(deleteContactThunk(contact.id))}
                >
                  Delete
                </Button>
              )}
            </Item>
          ))
        ) : (
          <TextNote>Unfortunately, there are no matches</TextNote>
        )}
      </PeopleList>
      {isOpen ? (
        <Modal>
          <EditForm closeModal={closeModal} contact={editingContact} />
        </Modal>
      ) : null}
    </>
  );
};

export default ContactList;
