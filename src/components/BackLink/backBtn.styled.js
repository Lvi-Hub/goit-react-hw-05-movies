import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 10px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #000;
  background-color: #e3dddd;
  border-radius: 3px;

  :hover {
    color: orangered;
  }
`;
