import React, { useState } from "react";
import "./women.css";


import kurti1 from "../login/assets/kurti1.jpg";
import kurti2 from "../login/assets/kurti2.jpg";
import kurti3 from "../login/assets/kurti3.jpg";
import kurti4 from "../login/assets/kurti4.jpg";
import kurti5 from "../login/assets/kurti5.jpg";
import kurti6 from "../login/assets/kurti6.jpg";
import kurti7 from "../login/assets/kurti7.jpg";    
import kurti8 from "../login/assets/kurti8.jpg";
import kurti9 from "../login/assets/kurti9.jpg";    
import kurti10 from "../login/assets/kurti10.jpg";
import kurti11 from "../login/assets/kurti11.jpg";
import kurti12 from "../login/assets/kurti12.jpg";  

import maxi1 from "../login/assets/maxi1.jpg"
import maxi2 from "../login/assets/maxi2.jpg"
import maxi3 from "../login/assets/maxi3.jpg"   
import maxi4 from "../login/assets/maxi4.jpg"
import maxi5 from "../login/assets/maxi5.jpg"
import maxi6 from "../login/assets/maxi6.jpg"       
import maxi7 from "../login/assets/maxi7.jpg"   
import maxi8 from "../login/assets/maxi8.jpg"
import maxi9 from "../login/assets/maxi9.jpg"   
import maxi10 from "../login/assets/maxi10.jpg"
import maxi11 from "../login/assets/maxi11.jpg"
import maxi12 from "../login/assets/maxi12.jpg" 

import s1 from "../login/assets/s1.jpg";
import s2 from "../login/assets/s2.jpg";    
import s3 from "../login/assets/s3.jpg";
import s4 from "../login/assets/s4.jpg";
import s5 from "../login/assets/s5.jpg";
import s6 from "../login/assets/s6.jpg";
import s7 from "../login/assets/s7.jpg";
import s8 from "../login/assets/s8.jpg";
import s9 from "../login/assets/s9.jpg";
import s10 from "../login/assets/s10.jpg";
import s11 from "../login/assets/s11.jpg";
import s12 from "../login/assets/s12.jpg";  

import l1 from "../login/assets/l1.jpg";
import l2 from "../login/assets/l2.jpg";
import l3 from "../login/assets/l3.jpg";
import l4 from "../login/assets/l4.jpg";
import l5 from "../login/assets/l5.jpg";
import l6 from "../login/assets/l6.jpg";      
import l7 from "../login/assets/l7.jpg";
import l8 from "../login/assets/l8.jpg";
import l9 from "../login/assets/l9.jpg";
import l10 from "../login/assets/l10.jpg";
import l11 from "../login/assets/l11.jpg";
import l12 from "../login/assets/l12.jpg";

import anarkali1 from "../login/assets/anarkali1.jpg";
import anarkali2 from "../login/assets/anarkali2.jpg";
import anarkali3 from "../login/assets/anarkali3.jpg";
import anarkali4 from "../login/assets/anarkali4.jpg";
import anarkali5 from "../login/assets/anarkali5.jpg";
import anarkali6 from "../login/assets/anarkali6.jpg";
import anarkali7 from "../login/assets/anarkali7.jpg";      
import anarkali8 from "../login/assets/anarkali8.jpg";  
import anarkali9 from "../login/assets/anarkali9.jpg";
import anarkali10 from "../login/assets/anarkali10.jpg";
import anarkali11 from "../login/assets/anarkali11.jpg";
import anarkali12 from "../login/assets/anarkali12.jpg";

import formal1 from "../login/assets/formal1.jpg";
import formal2 from "../login/assets/formal2.jpg";
import formal3 from "../login/assets/formal3.jpg";  
import formal4 from "../login/assets/formal4.jpg";
import formal5 from "../login/assets/formal5.jpg";
import formal6 from "../login/assets/formal6.jpg";      
import formal7 from "../login/assets/formal7.jpg";
import formal8 from "../login/assets/formal8.jpg";
import formal9 from "../login/assets/formal9.jpg";  
import formal10 from "../login/assets/formal10.jpg";
import formal11 from "../login/assets/formal11.jpg";
import formal12 from "../login/assets/formal12.jpg";

import wed1 from "../login/assets/wed1.jpg";
import wed2 from "../login/assets/wed2.jpg";
import wed3 from "../login/assets/wed3.jpg";
import wed4 from "../login/assets/wed4.jpg";
import wed5 from "../login/assets/wed5.jpg";
import wed7 from "../login/assets/wed7.jpg";
import wed8 from "../login/assets/wed8.jpg";
import wed9 from "../login/assets/wed9.jpg";
import wed10 from "../login/assets/wed10.jpg";
import wed11 from "../login/assets/wed11.jpg";
import wed12 from "../login/assets/wed12.jpg";
import crop1 from"../login/assets/crop1.jpg";
import crop2 from "../login/assets/crop2.jpg";
import crop3 from "../login/assets/crop3.jpg"
import crop4 from"../login/assets/crop4.jpg";
import crop5 from "../login/assets/crop5.jpg";
import crop6 from "../login/assets/crop6.jpg"
import crop7 from"../login/assets/crop7.jpg";
import crop8 from "../login/assets/crop8.jpg";
import crop9 from "../login/assets/crop9.jpg"
import crop10 from"../login/assets/crop10.jpg";
import crop11 from "../login/assets/crop11.jpg";
import crop12 from "../login/assets/crop12.jpg"

function Shop({ goHome, goDetails, goWishlist, goCart,category,setCategory }) {
  

  const dresses = {
    kurti: [
      { name: "Anarkali kurti", img: kurti1, prize: "₹999" },
      { name: "Straight cut kurti", img: kurti2, prize: "₹899" },
      { name: "A-line kurti", img: kurti3, prize: "₹799" },
      { name: "frock style kurti", img: kurti4, prize: "₹1099" },
      { name: "flared kurti", img: kurti5, prize: "₹999" },
      { name: "front-slit kurti", img: kurti6, prize: "₹1199" },
      { name: "anarkali kurti", img: kurti7, prize: "₹999" },
      { name: "a-line kurti", img: kurti8, prize: "₹899" },
      { name: "jacket style kurti", img: kurti9, prize: "₹1099" },
      { name: "c-cut kurti", img: kurti10, prize: "₹999" },
      { name: "empire waist kurti", img: kurti11, prize: "₹899" },
      { name: "flared kurti", img: kurti12, prize: "₹999" }
    ],
maxi:[
{name:"a-line maxi", img:maxi1,prize:"₹1299"},
{name:"a-line Maxi", img:maxi2,prize:"₹1199"},
{name:"tiered maxi", img:maxi3,prize:"₹1099"},
{name:"fit-and-flare maxi", img:maxi4,prize:"₹1399"},
{name:"sheath maxi", img:maxi5,prize:"₹1299"},
{name:"boho-style maxi", img:maxi6,prize:"₹1199"},
{name:"solid blue cotton a-line midi length maxi", img:maxi7,prize:"₹1099"},
{name:"solid grey midi maxi", img:maxi8,prize:"₹999"},
{name:"ditsy floral maxi", img:maxi9,prize:"₹899"},
{name:"white floral long tiered maxi", img:maxi10,prize:"₹1099"},
{name:"floral print a-line ", img:maxi11,prize:"₹999"},
{name:"puff sleeve riffles gown", img:maxi12,prize:"₹1199"}
],

saree:[
{name:"chikankari saree", img:s1,prize:"₹1999"},
{name:"embroided ethnic saree", img:s2,prize:"₹1899"},
{name:"hand embroidered ethnic saree", img:s3,prize:"₹1799"},
{name:"chakori saree", img:s4,prize:"₹1699"},
{name:"angrakah-style saree", img:s5,prize:"₹1599"},
{name:"dusty rose saree", img:s6,prize:"₹1499"},
{name:"radient red floor length saree", img:s7,prize:"₹1399"},
{name:"pink and gold weave set", img:s8,prize:"₹1299"},
{name:"lilac embroided set", img:s9,prize:"₹1199"},
{name:"cream tissue saree", img:s10,prize:"₹1099"},
{name:"chikankari", img:s11,prize:"₹999"},
{name:"floral print saree", img:s12,prize:"₹899"}
],

lehenga:[
{name:"traditional bridal lehenga", img:l1,prize:"₹1999"},
{name:"multi-panelled lehenga", img:l2,prize:"₹1899"},
{name:"monochromatic blush lehenga", img:l3,prize:"₹1799"},
{name:"contemporary silver lehenga", img:l4,prize:"₹1699"},
{name:"contrast set lehenga", img:l5,prize:"₹1599"},
{name:"embroidary gray lehenga", img:l6,prize:"₹1499"},
{name:"shehnai bridal lehenga", img:l7,prize:"₹1399"},
{name:"shehnai bridal lehenga", img:l8,prize:"₹1299"},
{name:"shehnai bridal lehenga", img:l9,prize:"₹1199"},
{name:"shehnai bridal lehenga", img:l10,prize:"₹1099"},
{name:"shehnai bridal lehenga", img:l11,prize:"₹999"},
{name:"shehnai bridal lehenga", img:l12,prize:"₹899"}
],
anarkali : [
{name:"long ethnic anarkali", img:anarkali1,prize:"₹1999"},
{name:"embroided ethnic anarkali", img:anarkali2,prize:"₹1899"},
{name:"hand embroidered ethnic anarkali", img:anarkali3,prize:"₹1799"},
{name:"chakori kurta", img:anarkali4,prize:"₹1699"},
{name:"angrakah-style anarkali", img:anarkali5,prize:"₹1599"},
{name:"dusty rose anarkali", img:anarkali6,prize:"₹1499"},
{name:"radient red floor length anarkali", img:anarkali7,prize:"₹1399"},
{name:"pink and gold weave set", img:anarkali8,prize:"₹1299"},
{name:"lilac embroided set", img:anarkali9,prize:"₹1199"},
{name:"cream tissue anarkali", img:anarkali10,prize:"₹1099"},
{name:"chikankari", img:anarkali11,prize:"₹999"},
{name:"floral print anarkali", img:anarkali12,prize:"₹899"}
],
formal : [
{name:"power suit", img:formal1,prize:"₹1999"},
{name:"blazer dress", img:formal2,prize:"₹1899"},
{name:"business casual", img:formal3,prize:"₹1799"},
{name:"business formal", img:formal4,prize:"₹1699"},
{name:"business suit", img:formal5,prize:"₹1599"},
{name:"business classic suit", img:formal6,prize:"₹1499"},
{name:"pantsuit", img:formal7,prize:"₹1399"},
{name:"blazer", img:formal8,prize:"₹1299"},
{name:"business casual", img:formal9,prize:"₹1199"},
{name:"business formal", img:formal10,prize:"₹1099"},
{name:"business suit", img:formal11,prize:"₹999"},
{name:"business classic suit", img:formal12,prize:"₹899"}
],
wedding : [
{name:"ball gown", img:wed1,prize:"₹1999"},
{name:"a-line gown", img:wed2,prize:"₹1899"},
{name:"fit-and-flare gown", img:wed3,prize:"₹1799"},
{name:"sheath gown", img:wed4,prize:"₹1699"},
{name:"boho-style gown", img:wed5,prize:"₹1599"},
{name:" a-line midi length gown", img:wed7,prize:"₹1499"},
{name:"solid midi gown", img:wed8,prize:"₹1399"},
{name:"a princess style", img:wed9,prize:"₹1299"},
{name:"floor length gown", img:wed10,prize:"₹1199"},
{name:"a-line classic gown ", img:wed11,prize:"₹1099"},
{name:"ballgown", img:wed12,prize:"₹899"}
],
crop: [
{name:"Crop Top 1", img:crop1},
{name:"Crop Top 2", img:crop2}, 
{name:"Crop Top 3", img:crop3},
{name:"Crop Top 4", img:crop4},
{name:"Crop Top 5", img:crop5},
{name:"Crop Top 6", img:crop6},
{name:"Crop Top 7", img:crop7},
{name:"Crop Top 8", img:crop8},
{name:"Crop Top 9", img:crop9},
{name:"Crop Top 10", img:crop10},
{name:"Crop Top 11", img:crop11},
{name:"Crop Top 12", img:crop12}
]
    
  };
  const [products, setProducts] = useState(dresses[category||"kurti"]);
 



  

  return (
    <div>

      <div className="navbar">
        <h2>Women Shop</h2>

        <div className="nav-right">
          <button className="home-btn" onClick={goHome}>
            Back to Home
          </button>

          <span onClick={goWishlist} style={{ cursor: "pointer" }}>
            Wishlist
          </span>

          <span onClick={goCart} style={{ cursor: "pointer" }}>
            Cart
          </span>
        </div>
      </div>

      <h3 style={{ margin: "20px" }}>Category</h3>

      <div className="category">
        <button onClick={() => {
  setProducts(dresses.kurti);
  setCategory("kurti");
}}>
  Kurti collections
</button>
<button onClick={() => {
  setProducts(dresses.maxi);
  setCategory("maxi");
}}>
  maxi collections
</button>
<button onClick={() => {
  setProducts(dresses.anarkali);
  setCategory("anarkali");
}}>
  anarkali collections
</button>
<button onClick={() => {
  setProducts(dresses.saree);
  setCategory("saree");
}}>
  saree collections
</button>
<button onClick={() => {
  setProducts(dresses.saree);
  setCategory("saree");
}}>
  saree collections
</button>
<button onClick={() => {
  setProducts(dresses.lehenga);
  setCategory("lehenga");
}}>
lehenga collections
</button>
<button onClick={() => {
  setProducts(dresses.formal);
  setCategory("formal");
}}>
  formal collections
</button>
<button onClick={() => {
  setProducts(dresses.wedding);
  setCategory("wedding");
}}>
  wedding gowns 
</button>
<button onClick={() => {
  setProducts(dresses.crop);
  setCategory("crop");
}}>
  crop tops 
</button>
       
      </div>

      <div className="women-products">
        {products.map((item, i) => (
          <div key={i} className="women-card">

            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>

            <button
              className="view-btn"
              onClick={() => goDetails(item, category,products)}
            >
              View Details
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Shop;