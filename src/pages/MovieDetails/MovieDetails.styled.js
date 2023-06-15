import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 20px 30px;
  padding-bottom: 20px;
  gap: 30px;
  border-bottom: 1px solid black;
`;
export const Info = styled.div`
  padding-bottom: 20px;
`;
export const Img = styled.img`
  width: 270px;
  height: 360px;
`;

export const AddInfo = styled.div`
  padding-bottom: 20px;
`;

export const ItemLink = styled(Link)`
  padding-bottom: 20px;
`;

export const Message = styled.div`
  padding-top: 20px;
`;
