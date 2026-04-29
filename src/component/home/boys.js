import React from "react";
import "./home.css"; 
import ks1 from "../login/assets/ks1.jpg";
import ks2 from "../login/assets/ks2.jpg";
import ks3 from "../login/assets/ks3.jpg";
import ks4 from "../login/assets/ks4.jpg";
import ks5 from "../login/assets/ks5.jpg";
import ks6 from "../login/assets/ks6.jpg";
import ks7 from "../login/assets/ks7.jpg";
import ks8 from "../login/assets/ks8.jpg";
import ks9 from "../login/assets/ks9.jpg";
import ks10 from "../login/assets/ks10.jpg";
import ks11 from "../login/assets/ks11.jpg";
import ks12 from "../login/assets/ks12.jpg";

function Boys({ goHome, goDetails,goWishlist, goCart }) {
  const boysProducts = [
    { name: "Red Shirt", img: ks1, prize: "₹599" },
    { name: "Blue T-shirt", img: ks2, prize: "₹499" },
    { name: "Green Shirt", img: ks3, prize: "₹399" },
    { name: "Yellow Shirt", img: ks4, prize: "₹699" },
    { name: "Black T-shirt", img: ks5, prize: "₹299" },
    { name: "White Shirt", img: ks6, prize: "₹799" },
    { name: "Grey T-shirt", img: ks7, prize: "₹349" },
    { name: "Orange Shirt", img: ks8, prize: "₹649" },
    { name: "Purple T-shirt", img: ks9, prize: "₹549" },
    { name: "Pink Shirt", img: ks10, prize: "₹449" },
    { name: "Brown T-shirt", img: ks11, prize: "₹399" },
    { name: "Cyan Shirt", img: ks12, prize: "₹599" }
  ];

  return (
    <div>
  
      <div className="navbar">
        <h2>Boys Shop</h2>
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

      <h3 style={{ margin: "20px" }}>Kids Boys Collection</h3>

      <div className="women-products">
        {boysProducts.map((item, i) => (
          <div key={i} className="women-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          
            <button className="view-btn" onClick={() => goDetails(item,boysProducts)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boys;