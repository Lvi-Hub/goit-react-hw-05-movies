import { Headerx, Link } from './Header.styled';

const Header = () => {
  return (
    <Headerx>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link>
      </nav>
    </Headerx>
  );
};

export default Header;
