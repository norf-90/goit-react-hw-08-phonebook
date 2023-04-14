import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  Label,
  InputTitle,
  Field,
  SubmitBtn,
  Wrapper,
  LoginIcon,
  Title,
} from './RegistrationForm.styled';
import * as Yup from 'yup';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  userMail: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { userName, userMail, password } = values;
    dispatch(
      register({
        name: userName,
        email: userMail,
        password,
      })
    );
    resetForm();
  };

  const initialValues = { userName: '', userMail: '', password: '' };
  return (
    <>
      <Title>Registration</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            <InputTitle>User Name</InputTitle>
            <Wrapper>
              <Field
                type="text"
                name="userName"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Brendan Eich"
                required
              />
              <ErrorMessage name="userName" />
            </Wrapper>
          </Label>

          <Label>
            <InputTitle>User email</InputTitle>
            <Wrapper>
              <Field type="mail" name="userMail" required placeholder=" " />
              <ErrorMessage name="userMail" />
            </Wrapper>
          </Label>

          <Label>
            <InputTitle>Password</InputTitle>
            <Wrapper>
              <Field type="password" name="password" required />
              <ErrorMessage name="password" />
            </Wrapper>
          </Label>
          <SubmitBtn type="submit">
            <LoginIcon size={'40px'} />
          </SubmitBtn>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
