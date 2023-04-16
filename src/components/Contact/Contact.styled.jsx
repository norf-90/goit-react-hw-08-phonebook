import styled from '@emotion/styled';
import { MdDeleteForever } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

export const ListItem = styled.li`
  position: relative;
  font-size: 20px;
  margin-bottom: 5px;
  display: flex;
  gap: 30px;
  align-items: center;
  max-width: 700px;
  margin: 0 auto 25px;
  border: none;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    display: block;
    width: 0;
    height: 4px;
    background: #ffffff;
    transition: width 200ms linear;
  }
  :hover::after {
    width: 100%;
  }
`;

export const ContactName = styled.span`
  color: #a5ffa5;
  width: 40%;
`;

export const ContactNumber = styled.span`
  color: #ff9524;
  width: 50%;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #ffffff;
  transition: color 200ms linear, border-color 200ms linear;

  color: #ffffff;
  li:hover & {
    color: #ff6969;
    border-color: #ff6969;
  }
`;

export const DeleteIcon = styled(MdDeleteForever)`
  color: inherit;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  transition: color 200ms linear, border-color 200ms linear;

  color: #ffffff;
  li:hover & {
    color: #48ff7f;
    border-color: #48ff7f;
  }
`;

export const CallIcon = styled(FiPhoneCall)`
  color: inherit;
`;
