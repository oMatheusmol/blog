import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div class="header" style={{ display: 'flex', alignItems: 'center', width }}>
      <nav
        className="title-main"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, backdropFilter: 'blur(3px)' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <div className="title" style={{ display: 'flex' }}>
            <Link to="/">
              <div style={{ color: '#fff' }}>
                <div
                  style={{
                    color: 'white',
                    flex: 1,
                    width: '150px',
                    fontFamily: 'Macondo',
                    'text-transform': 'none',
                    fontSize: '20px',
                  }}
                  rel="noopener noreferrer"
                >
                  Matheus <span>Mol</span>
                </div>
              </div>
            </Link>
            <div style={{ flex: 1, fontFamily: 'Bebas Neue', fontSize: '20px', color: 'white' }}>DEVELOPER</div>
          </div>
          <div class="main-navigation" style={{ display: 'flex' }}>
            <div>
              <Link to="/">
                <div>Home, </div>
              </Link>
            </div>
            <div className="spacer-main-navigation" />
            <div>
              <Link to="/blog">
                <div>Blog, </div>
              </Link>
            </div>
            <div className="spacer-main-navigation" />
            <div>
              <Link to="/contato">
                <div>Contato</div>
              </Link>
              <div className="spacer-main-navigation" />
            </div>
          </div>
        </div>
        <progress max="100" value="0"></progress>
      </nav>
    </div>
  );
};

export default Header;
