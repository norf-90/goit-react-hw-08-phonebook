import { useDispatch, useSelector } from 'react-redux';

import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  Label,
  InputTitle,
  Field,
  SubmitBtn,
  Wrapper,
  Title,
  LoginIcon,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(3, 'Must be more 3 digits'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;
    const isNameAlreadyExist =
      items.length > 0 && Boolean(items.find(item => item.name === name));
    console.log(isNameAlreadyExist);
    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    resetForm();
    dispatch(addContact({ name, number: phone }));
  };

  const initialValues = { phone: '', name: '' };
  return (
    <>
      <Title>Add contact</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            <InputTitle>Name</InputTitle>
            <Wrapper>
              <Field
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Brendan Eich"
                required
              />
              <ErrorMessage name="name" />
            </Wrapper>
          </Label>

          <Label>
            <InputTitle>Number</InputTitle>
            <Wrapper>
              <Field
                type="tel"
                name="phone"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="063-111-22-33"
              />
              <ErrorMessage name="phone" />
            </Wrapper>
          </Label>
          <SubmitBtn type="submit">
            <LoginIcon size="40px" />
          </SubmitBtn>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
