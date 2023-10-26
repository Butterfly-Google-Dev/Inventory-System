import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function ItemList({ items }) {
  const calculateItemTotal = (item) => {
    return item.unit * item.price;
  };

  const calculateOverallTotal = () => {
    return items.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const printInvoice = () => {
  
    const doc = new jsPDF();


    doc.text('Invoice Summary', 10, 10);

    const tableData = [];
    const headers = ['Item Name', 'Quantity', 'Price per Unit', 'Item Total'];


    const data = items.map((item) => [
      item.name,
      item.unit,
      `${item.price.toFixed(2)} /-`,
      `${calculateItemTotal(item).toFixed(2)} /-`,
    ]);

    tableData.push(headers, ...data);

    doc.autoTable({
      head: [headers],
      body: data,
    });


    const totalPrice = `Overall Total Price: Rs ${calculateOverallTotal().toFixed(2)} /-`;
    doc.text(totalPrice, 10, doc.autoTable.previous.finalY + 10);

 
    doc.save('invoice_summary.pdf');
  };

  const listContainerStyle = {
    border: '1px solid #e0e0e0',
    padding: '20px',
    width: '80%',
    margin: '20px auto',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: 'white',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '60px',
    marginTop: '40px',
  };

  const tableHeader = {
    background: '#0074d9',
    color: 'white',
    padding: '15px',
    textAlign: 'left',
  };

  const rowStyle = {
    borderBottom: '1px solid #e0e0e0',
  };

  const cellStyle = {
    padding: '15px',
    border: '1px solid #e0e0e0',
    textAlign: 'left',
  };

  const totalPriceStyle = {
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#0074d9',
  };

  const printButtonStyle = {
    background: '#0074d9',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '1.8rem',
    color: '#0074d9',
    marginBottom: '20px',
  };

  return (
    <div style={listContainerStyle}>
      <h2 style={headerStyle}>Invoice Summary</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeader}>Item Name</th>
            <th style={tableHeader}>Quantity</th>
            <th style={tableHeader}>Price per Unit (₹)</th>
            <th style={tableHeader}>Item Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={rowStyle}>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>{item.unit}</td>
              <td style={cellStyle}>₹{item.price.toFixed(2)}</td>
              <td style={cellStyle}>₹{calculateItemTotal(item).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={totalPriceStyle}>Overall Total Price: ₹{calculateOverallTotal().toFixed(2)}</h3>
      <button onClick={printInvoice} style={printButtonStyle}>
        Print Invoice
      </button>
    </div>
  );
}

export default ItemList;
