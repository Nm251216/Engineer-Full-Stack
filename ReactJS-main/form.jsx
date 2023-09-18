import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful!\n\nYour order was: ${order}\n\nPlease show your confirmation number for pickup.`);
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    background: "#f9f9f9",
    color: "#333",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label htmlFor="name" style={labelStyle}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" style={labelStyle}>Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="address" style={labelStyle}>Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="order" style={labelStyle}>Order:</label>
        <input
          type="text"
          id="order"
          name="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          style={inputStyle}
          required
        />
      </div>
      <button type="submit" style={buttonStyle}>Submit Order</button>
    </form>
  );
}

export default FoodOrderForm;
