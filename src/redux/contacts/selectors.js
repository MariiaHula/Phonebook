import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactList.contacts.items;
export const selectIsLoading = state => state.contactList.contacts.isLoading;
export const selectError = state => state.contactList.contacts.error;
export const selectCurrentID = state => state.contactList.contacts.deletedId;
export const selectFilter = state => state.filter.filter;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim()) ||
        contact.phone.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
