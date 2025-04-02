import Navigation from './Navigation';
import Loader from './Loader'; // 👈 Import your Loader
import '../styles/Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        {/* Mini Loader next to your name */}
        <div className="loader-mini-wrap">
          <Loader />
        </div>
        <div className="title-text">
          <h1 className="main-title">Abel Gutiérrez</h1>
          <p className="subtitle">Full-Stack Developer</p>
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
