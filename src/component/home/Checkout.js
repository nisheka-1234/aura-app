import React, { useState} from "react";
import "./checkout.css";

function Checkout({ item, goBack, goHome }) {
  const [address, setAddress] = useState("");
  const [paid, setPaid] = useState(false);
  const [showLine, setShowLine] = useState(false);

  const handlePayment = () => {
    if (!address.trim()) {
      alert("Enter address");
      return;
    }
    setPaid(true); 

    
    setTimeout(() => {
      setPaid(false);
      setShowLine(true); 
    }, 1500);
  };

  return (
    <div className="checkout-container">
  
      <div className="checkout-navbar">
        <button onClick={goBack} className="back-btn">⬅ Back</button>
        <button onClick={goHome} className="home-btn">🏠 Home</button>
      </div>

      <h2>Checkout</h2>

      <div className="checkout-card">
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.prize}</p>
      </div>

      <textarea
        placeholder="Enter delivery address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="address-box"
      />

      <button className="pay-btn" onClick={handlePayment}>Pay Now</button>

      
      {paid && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>✅ Payment Successful</h2>
            <p className="status-text">Payment Received</p>
          </div>
        </div>
      )}

      
      {showLine && (
        <div className="anime-line-container">
          <span className="line-label">Not Paid</span>
          <div className="anime-line">
            <div className="line-fill"></div>
          </div>
          <span className="line-label">Payment Received</span>
        </div>
      )}
    </div>
  );
}

export default Checkout;