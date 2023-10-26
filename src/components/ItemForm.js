import React, { useState, useEffect } from 'react';

function ItemForm({ onItemSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemUnit, setItemUnit] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      unit: itemUnit,
      price: parseFloat(itemPrice),
    };
    onItemSubmit(newItem);
    setItemName('');
    setItemUnit('');
    setItemPrice('');
  };

  useEffect(() => {
    animateTitle();
  }, []);

  const animateTitle = () => {
    const title = document.getElementById('form-title');
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 400);
  };

  const formContainerStyle = {
    border: '1px solid #e0e0e0',
    padding: '20px',
    width: '50%',
    margin: '20px auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.2s',
    background: '#fff',
  };

  const formContainerHoverStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#0074d9',
    marginBottom: '20px',
    textTransform: 'uppercase',
    opacity: '0',
    transform: 'translateY(-20px)',
    transition: 'opacity 0.5s, transform 0.5s',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontSize: '1.4rem',
    color: '#333',
    fontFamily: 'Arial, sans-serif', 
  };

  const inputStyle = {
    width: 'calc(100% - 24px)',
    padding: '12px',
    fontSize: '1.2rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    transition: 'border 0.2s',
    fontFamily: 'Arial, sans-serif', 
  };

  const submitButtonStyle = {
    background: '#0074d9',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.4rem',
    transition: 'background 0.2s',
    fontFamily: 'Arial, sans-serif', 
    borderRadius: '6px',
  };

  const inputFocus = {
    border: '1px solid #0074d9',
  };

  const buttonHover = {
    background: '#005AA7',
  };

  return (
    <div style={{ ...formContainerStyle, ...(formContainerStyle.boxShadow && formContainerHoverStyle) }}>
      <h2 style={headerStyle} id="form-title">
        Enter Item Details
      </h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required style={{ ...inputStyle, ...(itemName && inputFocus) }} />
        </label>
        <label style={labelStyle}>
            Item Unit:
          <input type="number" 
          value={itemUnit} onChange={(e) => setItemUnit(e.target.value)} 
          required style={{ ...inputStyle, ...(itemUnit && inputFocus) }} />
        </label>
        <label style={labelStyle}>
          Item Price per Unit (₹):
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
            style={{ ...inputStyle, ...(itemPrice && inputFocus) }}
          />
        </label>
        <button type="submit" style={{ ...submitButtonStyle, ...buttonHover }}>
          Save
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
