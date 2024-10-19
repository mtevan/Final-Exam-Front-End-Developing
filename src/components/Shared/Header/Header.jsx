
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* You can add more links here */}
      </nav>
    </header>
  );
};

export default Header;
