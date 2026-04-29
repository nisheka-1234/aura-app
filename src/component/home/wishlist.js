import React from "react";
import "./wishlist.css";
import { FaArrowLeft } from "react-icons/fa";


function Wishlist({ wishlist = [], goHome, goDetails,goBack }) {
  return (
    <div className="wishlist-container">

      
      <div className="navbar">
        <h2>Wishlist ❤️</h2>
        <button className="home-btn" onClick={goHome}>
          Back to Home
        </button>
      </div>
      <button className="back-arrow" onClick={goBack}>
  <FaArrowLeft />
</button>

      <h3>Your Wishlist</h3>

      {wishlist.length === 0 ? (
        <p className="empty">No items in wishlist 💔</p>
      ) : (
        <div className="wishlist-list">
          {wishlist.map((item, i) => (
            <div key={i} className="wishlist-card">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p className="price">{item.prize}</p>

              
              <button
                className="view-btn"
                onClick={() => goDetails(item)}
              >
                View Details
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Wishlist;