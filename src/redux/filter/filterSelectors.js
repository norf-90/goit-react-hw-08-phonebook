import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contactsSelectors';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterName) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
