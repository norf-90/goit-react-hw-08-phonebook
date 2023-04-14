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
} from './LoginForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const SignupSchema = Yup.object().shape({
  userMail: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { userMail, password } = values;
    dispatch(
      logIn({
        email: userMail,
        password,
      })
    );
    resetForm();
  };

  const initialValues = { userName: '', userMail: '', password: '' };
  return (
    <>
      <Title>Log In</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            <InputTitle>User email</InputTitle>
            <Wrapper>
              <Field
                type="mail"
                name="userMail"
                required
                placeholder="brendanEich@gmail.com"
              />
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

export default LoginForm;
