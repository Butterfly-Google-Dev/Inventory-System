import React from 'react';
import market from '../market.webp'

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#F5DEB3', 
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '8px ', 
  };

  const imageStyle = {
    maxWidth: '120px',
    margin: '0 auto',
    display: 'block',
    zIndex: 1,
  };    

  return (
    <div style={navbarStyle} className="navbar">

      <img
        src={market}
        alt="Logo"
        style={imageStyle}
      />
    </div>
  );
}

export default Navbar;
