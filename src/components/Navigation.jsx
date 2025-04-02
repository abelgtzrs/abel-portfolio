import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" className="nav-link">About Me</Link>
        </li>
        <li className={location.pathname === '/portfolio' ? 'active' : ''}>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className={location.pathname === '/resume' ? 'active' : ''}>
          <Link to="/resume" className="nav-link">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
