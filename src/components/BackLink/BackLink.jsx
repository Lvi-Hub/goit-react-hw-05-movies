import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './backBtn.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="17" />
      {children}
    </StyledLink>
  );
};
