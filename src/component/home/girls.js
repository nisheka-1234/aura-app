import React from "react";
import "./home.css"; 

import g1 from "../login/assets/g1.jpg";
import g2 from "../login/assets/g2.jpg";
import g3 from "../login/assets/g3.jpg";
import g4 from "../login/assets/g4.jpg";
import g5 from "../login/assets/g5.jpg";
import g6 from "../login/assets/g6.jpg";
import g7 from "../login/assets/g7.jpg";
import g8 from "../login/assets/g8.jpg";
import g9 from "../login/assets/g9.jpg";
import g10 from "../login/assets/g10.jpg";
import g11 from "../login/assets/g11.jpg";
import g12 from "../login/assets/g12.jpg";
import g13 from "../login/assets/g13.jpg";
import g14 from "../login/assets/g14.jpg";
import g15 from "../login/assets/g15.jpg";      
import g16 from "../login/assets/g16.jpg";
import g17 from "../login/assets/g17.jpg";
import g18 from "../login/assets/g18.jpg";  
import g19 from "../login/assets/g19.jpg";

function Girls({ goHome, goDetails ,goWishlist, goCart}) {

  const girlsProducts = [
    { name: "Pink Frock", img: g1, prize: "₹599" },
    { name: "Floral Dress", img: g2, prize: "₹699" },
    { name: "Party Wear Dress", img: g3, prize: "₹799" },
    { name: "Casual Frock", img: g4, prize: "₹499" },
    { name: "Princess Dress", img: g5, prize: "₹999" },
    { name: "Summer Dress", img: g6, prize: "₹399" },
    { name: "Denim Dress", img: g7, prize: "₹649" },
    { name: "Printed Frock", img: g8, prize: "₹549" },
    { name: "Sleeveless Dress", img: g9, prize: "₹459" },
    { name: "Ethnic Dress", img: g10, prize: "₹899" },
    { name: "Skirt & Top", img: g11, prize: "₹599" },
    { name: "Cute Frock", img: g12, prize: "₹499" },
    { name: "Ruffled Dress", img: g13, prize: "₹699" },
    { name: "Tutu Dress", img: g14, prize: "₹799" },
    { name: "Embroidered Dress", img: g15, prize: "₹899" }, 
    { name: "Casual Dress", img: g16, prize: "₹399" },
    { name: "Flared Dress", img: g17, prize: "₹549" },
    { name: "Party Frock", img: g18, prize: "₹999" },
    { name: "Summer Frock", img: g19, prize: "₹459" },
  ];

  return (
    <div>
      <div className="navbar">
        <h2>Girls Shop</h2>
        <div className="nav-right">
          <button className="home-btn" onClick={goHome}>
            Back to Home
          </button>
          <span onClick={goWishlist} style={{cursor:"pointer"}}>
  Wishlist
</span>

<span onClick={goCart} style={{cursor:"pointer"}}>
  Cart
</span>
      </div>
          
        </div>
    

      <h3 style={{ margin: "20px" }}>Kids Girls Collection</h3>
      <div className="women-products">
        {girlsProducts.map((item, i) => (
          <div key={i} className="women-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>

            <button
              className="view-btn"
              onClick={() => goDetails(item,girlsProducts)}
            >
              View Details
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Girls;