import React, { useState } from "react";
import shirt1 from "../login/assets/shirt1.jpg"
import shirt2 from "../login/assets/shirt2.jpg";
import shirt3 from "../login/assets/shirt3.jpg";
import shirt4 from "../login/assets/shirt4.jpg";
import shirt5 from "../login/assets/shirt5.jpg";
import shirt6 from "../login/assets/shirt6.jpg";
import Shirt7 from "../login/assets/shirt7.jpg";
import shirt8 from "../login/assets/shirt8.jpg";
import shirt9 from "../login/assets/shirt9.jpg";
import shirt10 from "../login/assets/shirt10.jpg";
import shirt11 from "../login/assets/shirt11.jpg";
import shirt12 from "../login/assets/shirt12.jpg";
import t1 from "../login/assets/t1.jpg";
import t2 from "../login/assets/t2.jpg";
import t3 from "../login/assets/t2.jpg";
import fm1 from "../login/assets/fm1.jpg";
import fm2 from "../login/assets/fm2.jpg";
import fm3 from "../login/assets/fm3.jpg";
import fm4 from "../login/assets/fm4.jpg";
import fm5 from "../login/assets/fm5.jpg";
import fm6 from "../login/assets/fm6.jpg";
import fm7 from "../login/assets/fm7.jpg";
import fm8 from "../login/assets/fm8.jpg";      
import fm9 from "../login/assets/fm9.jpg";
import fm10 from "../login/assets/fm10.jpg";
import fm11 from "../login/assets/fm11.jpg";
import fm12 from "../login/assets/fm12.jpg";
import tm1 from "../login/assets/tm1.jpg";
import tm2 from "../login/assets/tm2.jpg";
import tm3 from "../login/assets/tm3.jpg";
import tm4 from "../login/assets/tm4.jpg";
import tm5 from "../login/assets/tm5.jpg";
import h1 from "../login/assets/h1.jpg";
import h2 from "../login/assets/h2.jpg";
import h3 from "../login/assets/h3.jpg";
import h4 from "../login/assets/h4.jpg";
import h5 from "../login/assets/h5.jpg";  
import h6 from "../login/assets/h6.jpg";
import h7 from "../login/assets/h7.jpg";
import h8 from "../login/assets/h8.jpg";
import h9 from "../login/assets/h9.jpg";
import h10 from "../login/assets/h10.jpg";
import h11 from "../login/assets/h11.jpg";
import h12 from "../login/assets/h12.jpg";

function Men({ goHome, goDetails, goWishlist, goCart }) {

  

  const dresses = {

    western: [
      { name: "Denim Jacket", img: h1, prize:"₹1499" },
      { name: "Casual Western Outfit", img: h2, prize:"₹1299" },
      { name: "Leather Jacket", img: h3, prize:"₹1999" },
      { name: "Graphic Hoodie", img: h4, prize:"₹899" },
      { name: "Bomber Jacket", img: h5, prize:"₹1799" },
      { name: "Flannel Shirt", img: h6, prize:"₹999" },
      { name: "Denim Shirt", img: h7, prize:"₹1099" },
      { name: "Casual Blazer", img: h8, prize:"₹1499" },
      { name: "Graphic T-shirt", img: h9, prize:"₹699" },
      { name: "Cargo Pants", img: h10, prize:"₹1299" },
      { name: "Chino Pants", img: h11, prize:"₹1199" },
      { name: "Slim Fit Jeans", img: h12, prize:"₹1399" },
    ],

    shirts: [
      { name: "Checked Shirt", img: shirt1, prize:"₹999" },
      { name: "Plain Shirt", img: shirt2, prize:"₹899" },
      { name: "Denim Shirt", img: shirt3, prize:"₹1099" },
      { name: "Flannel Shirt", img: shirt4, prize:"₹999" },
      { name: "Linen Shirt", img: shirt5, prize:"₹1199" },
      { name: "Oxford Shirt", img: shirt6, prize:"₹1299" },
      { name: "Striped Shirt", img: Shirt7, prize:"₹899" },
      { name: "Casual Shirt", img: shirt8, prize:"₹799" },
      { name: "Formal Shirt", img: shirt9, prize:"₹1499" },
      { name: "Denim Shirt", img: shirt10, prize:"₹1099" },
      { name: "Plaid Shirt", img: shirt11, prize:"₹999" },
      { name: "Chambray Shirt", img: shirt12, prize:"₹1199" },

    ],

    tshirt: [
      { name: "Printed T-shirt", img: t1, prize:"₹699" },
      { name: "Casual T-shirt", img: t2, prize:"₹599" },
      { name: "Graphic T-shirt", img: t3, prize:"₹799" },
    ],

    formal: [
      { name: "Formal Suit", img: fm1, prize:"₹1999" },
      { name: "Blazer Set", img: fm2, prize:"₹1799" },
      { name: "Dress Shirt", img: fm3, prize:"₹1499" },
      { name: "Formal Trousers", img: fm4, prize:"₹1299" },
      { name: "Waistcoat", img: fm5, prize:"₹1099" },
      { name: "Formal Blazer", img: fm6, prize:"₹1799" },
      { name: "Dress Pants", img: fm7, prize:"₹1299" },
      { name: "Formal Shirt", img: fm8, prize:"₹1499" },
      { name: "Tuxedo Suit", img: fm9, prize:"₹2499" },
      { name: "Formal Vest", img: fm10, prize:"₹1099" },
      { name: "Dress Shoes", img: fm11, prize:"₹1999" },
      { name: "Formal Tie", img: fm12, prize:"₹499" },
    ],

    traditional: [
      { name: "Kurta Set", img: tm1, prize:"₹1199" },
      { name: "Sherwani", img: tm2, prize:"₹1999" },
      { name: "Dhoti Kurta", img: tm3, prize:"₹1499" },
      { name: "Nehru Jacket", img: tm4, prize:"₹1299" },
      { name: "Pathani Suit", img: tm5, prize:"₹1799" },
    ]
  };
  const [products, setProducts] = useState(dresses.western);

  return (
    <div>
      <div className="navbar">
        <h2>Men Shop</h2>
        <div className="nav-right">
          <button onClick={goHome}>Back to Home</button>

          <span onClick={goWishlist} style={{cursor:"pointer"}}>Wishlist</span>
          <span onClick={goCart} style={{cursor:"pointer"}}>Cart</span>
        </div>
      </div>

      <h3 style={{ margin: "20px" }}>Category</h3>

      <div className="category">
        <button onClick={() => setProducts(dresses.western)}>Western</button>
        <button onClick={() => setProducts(dresses.shirts)}>Shirts</button>
        <button onClick={() => setProducts(dresses.tshirt)}>T-Shirts</button>
        <button onClick={() => setProducts(dresses.formal)}>Formal</button>
        <button onClick={() => setProducts(dresses.traditional)}>Traditional</button>
      </div>

      <div className="women-products">
        {products.map((item, i) => (
          <div key={i} className="women-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>

            <button
              className="view-btn"
              onClick={() => goDetails(item, products)} // ✅ FIX
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Men;