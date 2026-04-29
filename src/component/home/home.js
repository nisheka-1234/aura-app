import React from "react";
import "./home.css";
import banner from "../login/assets/banner.jpg";
import { useState, useCallback } from "react";
import women from "../login/assets/women.jpg";
import men from "../login/assets/men.jpg";
import girls from "../login/assets/girls.jpg";
import boys from "../login/assets/boys.jpg";

const images = [
  { name: "Women Wear", img: women },
  { name: "Men Wear", img: men },
  { name: "Kids wear for Girls", img: girls },
  { name: "Kids wear for  Boys", img: boys }
];
function Home({onShop,goWishlist,goCart,onLogout}){
const [index,setIndex] = useState(0);
const next = useCallback(()=>{
setIndex((prev)=>(prev+1)%images.length);
},[]);
const prev = useCallback(()=>{
setIndex((prev)=>(prev-1+images.length)%images.length);
},[]);
return(
<div>
<div className="top-nav">
<div className="left-nav">
<span onClick={onLogout}>Logout</span>
</div>
<div className="right-nav">
<span onClick={goWishlist} style={{cursor:"pointer"}}>
  Wishlist
</span>

<span onClick={goCart} style={{cursor:"pointer"}}>
  Cart
</span>

</div>
</div>
<div className="shop-section">
<h1>Aura Wear</h1>
<div className="search-box">
<input type="text" placeholder="Search products"/>
<button>🔍</button>
</div>
</div>
<div className="banner">
<img src={banner} alt="banner"/>
<div className="banner-text">
<h2>Carry your world in style</h2>
<p>style your life with our exclusive collection</p>
</div>
</div>
<div className="categories">
<div className="carousel">
<button onClick={prev} className="arrow">◀</button>
{images.map((item,i)=>{
  let position = (i-index+images.length)%images.length;
  let className="card";
  if(position===0) className="card active";
  else if(position===1||position===images.length-1) className="card side";
  let pageName = "";
  if(item.name === "Women Wear") pageName = "shop";  
  else if(item.name === "Men Wear") pageName = "men"; 
  else if(item.name === "Kids wear for Girls") pageName = "girls"; 
  else if(item.name === "Kids wear for  Boys") pageName = "boys"; 

return(
 <div key={i} className={className}>
      <img src={item.img} alt={item.name}/>
      <h3>{item.name}</h3>
      <button className="page-btn" onClick={() => { onShop(pageName); }}>Shop</button>
    </div>
  );
})}
<button onClick={next} className="arrow">▶</button>
</div>
</div>
</div>
);
}
export default Home;