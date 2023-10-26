import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Outlet, Routes, Route as RouteV6 } from 'react-router-dom'; // Importing RouteV6 for React Router v6
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';

function App() {
  const [items, setItems] = useState([]);

  const handleItemSubmit = (item) => {
    setItems([...items, item]);
  };

  return (
    <>
      <Navbar />
      <Router>
        <div style={appContainerStyle}>
          <nav style={navStyle}>
            <ul style={navListStyle}>
              <li style={navListItemStyle}>
                <Link to="/" style={navLinkStyle}>Enter Item Details</Link>
              </li>
              <li style={navListItemStyle}>
                <Link to="items" style={navLinkStyle}>Item List and Invoice</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <RouteV6 path="/" element={<ItemForm onItemSubmit={handleItemSubmit} />} />
            <RouteV6 path="items" element={<ItemList items={items} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

const appContainerStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f0f0f0',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', 
};

const navStyle = {
  background: '#FF6B6B',
  padding: '10px',
  
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
};

const navListItemStyle = {
  margin: '0 30px', 
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '1.2rem', 
};

export default App;
