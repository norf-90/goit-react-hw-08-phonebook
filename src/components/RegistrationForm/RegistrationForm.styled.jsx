import styled from '@emotion/styled';
import { Form as FormikForm, Field as Input } from 'formik';
import { RiUserAddFill } from 'react-icons/ri';

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  color: #ffffff;
`;

export const Form = styled(FormikForm)`
  padding: 40px;
  margin: 0 auto;
  width: 600px;

  border: 2px solid #ffffff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  height: 70px;
  gap: 24px;
  color: #ff8282;
  font-size: 18px;
`;

export const InputTitle = styled.span`
  font-size: 20px;
  color: #ffffff;
  width: 150px;
`;

export const Field = styled(Input)`
  margin: 0 0 5px 0;
  padding: 0 10px 4px;
  border: none;
  border-bottom: 4px solid #ffffff;
  outline: none;
  background: transparent;
  font-size: 20px;
  font-weight: 900;
  color: #ffffff;
  transition: border-color 250ms linear;
  ::placeholder {
    color: #b8b8b8;
  }

  :focus {
    border-color: #ffa73c;
  }
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 15px;
  color: #ffffff;
  transition: color 200ms linear, border-color 200ms linear;
  :hover,
  :focus {
    color: #ffa73c;
    border-color: #ffa73c;
  }
`;

export const LoginIcon = styled(RiUserAddFill)`
  color: inherit;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
