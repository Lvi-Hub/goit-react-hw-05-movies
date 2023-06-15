import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './backBtn.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="17" />
      {children}
    </StyledLink>
  );
};
export default BackLink;
