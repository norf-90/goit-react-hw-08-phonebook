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
  text-decoration: none;
  font-size: 30px;
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
    0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
`;

export const Image = styled.img`
  width: 150px;
`;
