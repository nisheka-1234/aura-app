import React, { useState } from "react";
import "./ProductDetails.css";
import { FaHeart } from "react-icons/fa";

function ProductDetails({
  product,
  goBack,
  addToCart,
  addToWishlist,
  goWishlist,
  goCart,
  relatedList,
  goDetails,
  cart,
  wishlist
}) {

  const [size, setSize] = useState("");
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showWishPopup, setShowWishPopup] = useState(false);

  const sizes = ["S","M","L","XL","XXL","XXXL"];

  const isInCart = cart?.some(
    (item) =>
      item.name === product?.name &&
      item.prize === product?.prize &&
      item.size === size
  );

  const isInWishlist = wishlist?.some(
    (item) =>
      item.name === product?.name &&
      item.prize === product?.prize
  );

  const handleCart = () => {
    if (!size || isInCart) return;

    addToCart({ ...product, size }); 

    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 2000);
  };

  const handleWishlist = () => {
    if (isInWishlist) return;

    addToWishlist(product);

    setShowWishPopup(true);
    setTimeout(() => setShowWishPopup(false), 2000);
  };

  return (
    <div className="details-container">

      <div className="navbar">
        <button className="back-btn" onClick={goBack}>Back</button>
        <h2>Product Details</h2>

        <div className="nav-right">
          <span onClick={goWishlist} style={{cursor:"pointer"}}>Wishlist</span>
          <span onClick={goCart} style={{cursor:"pointer"}}>Cart</span>
        </div>
      </div>

      <div className="product-card">
        <img src={product?.img} alt={product?.name} />
        <h2>{product?.name}</h2>
        <h3 className="price">{product?.prize}</h3>

        <h3>Available Sizes</h3>

        <div className="sizes">
          {sizes.map((s, i) => (
            <button
              key={i}
              className={size === s ? "size active" : "size"}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="actions">

          <div className="wishlist" onClick={handleWishlist}>
            <FaHeart className={isInWishlist ? "heart liked" : "heart"} />
            <span>{isInWishlist ? "Added" : "Wishlist"}</span>
          </div>

          <button
            className={`cart-btn ${isInCart ? "added" : size ? "active" : ""}`}
            onClick={handleCart}
            disabled={!size || isInCart}
          >
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </button>

        </div>
      </div>


      <h3 className="related-title">Related Products</h3>

      <div className="related-products">
        {(relatedList || [])
          .filter((item) => item.name !== product?.name)
          .slice(0, 6)
          .map((item, i) => (
            <div key={i} className="related-card">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p className="price">{item.prize}</p>

              <button
                className="view-btn"
                onClick={() => goDetails(item, relatedList)}
              >
                View Details
              </button>
            </div>
          ))}
      </div>

      {showCartPopup && (
        <div className="popup cart-popup">🛒 Added to Cart!</div>
      )}

      {showWishPopup && (
        <div className="popup wish-popup">❤️ Added to Wishlist!</div>
      )}

    </div>
  );
}

export default ProductDetails;