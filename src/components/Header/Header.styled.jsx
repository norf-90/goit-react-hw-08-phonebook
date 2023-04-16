import styled from '@emotion/styled';
import { Link as Reference } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 40px;
`;

export const Link = styled(Reference)`
  font-size: 25px;
  font-weight: 900;
  text-decoration: none;
  color: #ffffff;
`;

export const Image = styled.img`
  width: 150px;
`;
