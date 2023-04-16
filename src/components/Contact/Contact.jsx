import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
  DeleteIcon,
  Link,
  CallIcon,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

const Contact = props => {
  const { id, name, phone } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <Link href={`tel:${phone}`}>
        <CallIcon />
      </Link>
      <DeleteButton type="button" onClick={handleDelete}>
        <DeleteIcon size="40px" />
      </DeleteButton>
    </ListItem>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
