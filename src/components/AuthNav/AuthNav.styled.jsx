import styled from '@emotion/styled';
import { NavLink as Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const NavLink = styled(Link)`
  font-size: 25px;
  font-weight: 900;
  text-decoration: none;
  color: #ffffff;

  &.active {
    color: #ffa73c;
  }
`;
