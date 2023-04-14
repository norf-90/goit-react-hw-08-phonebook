import styled from '@emotion/styled';
import { FaUserTie } from 'react-icons/fa';
import { RiLogoutBoxRFill } from 'react-icons/ri';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserIcon = styled(FaUserTie)`
  color: #ffffff;

  size: 50px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Text = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const LogoutIcon = styled(RiLogoutBoxRFill)`
  display: block;
  color: #ffffff;
  box-shadow: 2px solid blue;
  transition: color 200ms linear;

  :hover,
  :focus {
    color: #ffa73c;
  }
`;
