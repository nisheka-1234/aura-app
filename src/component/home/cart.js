import React from "react";
import "./cart.css";
import { FaArrowLeft } from "react-icons/fa";

function Cart({ cart = [], goHome, goDetails, goBack, removeFromCart,goBuyNow }) {

  

  return (
    <div className="cart-container">

      <div className="navbar">
        <h2>Cart 🛒</h2>
        <button className="home-btn" onClick={goHome}>
          Back to Home
        </button>
      </div>

      <button className="back-arrow" onClick={goBack}>
        <FaArrowLeft />
      </button>

      <h3>Your Cart</h3>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty 😢</p>
      ) : (
        <div className="cart-list">
          {cart.map((item, i) => (
            <div key={i} className="cart-card">

              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p className="price">{item.prize}</p>
              {item.size && <p>Size: {item.size}</p>}

            
              <div className="cart-row">
                <button
                  className="viewcart-btn"
                  onClick={() => goDetails(item)}
                >
                  View Details
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(i)}
                >
                  Remove
                </button>
              </div>

          
              <button
                className="buy-btn"
                onClick={() => goBuyNow(item)}
              >
                Buy Now ➡
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;