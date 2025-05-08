import React, { useState } from 'react';
import './cart.css';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 79.99 },
    { id: 2, name: 'Smart Watch', price: 129.5 },
    { id: 3, name: '4K Action Camera', price: 249.0 },
  ];

  const [paymentMethod, setPaymentMethod] = useState('');

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleProceed = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
    } else {
      alert(`Proceeding to pay ₹${totalAmount} via ${paymentMethod}`);
      // Logic to proceed with the payment can go here
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalAmount}</h3>

      <div className="payment-methods">
        <h4>Select Payment Method:</h4>
        <label>
          <input
            type="radio"
            name="payment"
            value="Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

      <button className="pay-btn" onClick={handleProceed}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default CartPage;
