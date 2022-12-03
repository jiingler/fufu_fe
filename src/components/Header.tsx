import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [y, setY] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    setY(window.scrollY);
  };

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      if (window.location.pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [y]);

  useEffect(() => {}, [location]);

  return (
    <header className={`nav ${y <= 10 && location.pathname === '/' ? 'transparent' : ''}`}>
      <nav className={`py-2 w-100 ${y <= 10 ? 'py-md-5 ' : 'py-md-4'}`}>
        <div className="wrap w-100 d-flex align-items-center">
          <div className="w-100 d-flex justify-content-center position-relative px-3">
            <div className="position-absolute logo">
              <Link to="/">
                <h1>福福堂</h1>
              </Link>
            </div>
            <div className="d-flex">
              <Menu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
