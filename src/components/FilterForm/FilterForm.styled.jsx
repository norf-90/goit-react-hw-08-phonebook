import styled from '@emotion/styled';
import { Field as Input } from 'formik';

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 500px;
  margin: 20px auto 0;
  height: 50px;
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
