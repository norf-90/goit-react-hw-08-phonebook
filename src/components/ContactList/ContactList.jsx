import { useSelector } from 'react-redux';
import React from 'react';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/filter/filterSelectors';

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);
  return (
    <List>
      {items.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} phone={number} />
      ))}
    </List>
  );
};

export default ContactList;
