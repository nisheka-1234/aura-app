import { useState } from "react";
import Wel from "./component/login/welcome";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Signup from "./component/login/signup";
import Shop from "./component/home/women";
import Men from "./component/home/men";
import Girls from "./component/home/girls";
import Boys from "./component/home/boys";
import ProductDetails from "./component/home/productdetails";
import Cart from "./component/home/cart";
import Wishlist from "./component/home/wishlist";
import Checkout from "./component/home/Checkout";
import ResetPassword from "./component/login/reset";

function App() {
  const [page, setPage] = useState("welcome");
  const [history, setHistory] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [relatedList, setRelatedList] = useState([]);
  const [shopCategory, setShopCategory] = useState("kurti");
  const [checkoutItem, setCheckoutItem] = useState(null);
  window.goToReset=()=>navigate("reset")

  
  const navigate = (nextPage) => {
    setHistory((prev) => [...prev, page]);
    setPage(nextPage);
  };

  
  const goBack = () => {
    if (history.length === 0) {
      setPage("home");
      return;
    }

    const lastPage = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setPage(lastPage);
  };

  
  const handleGoDetails = (item, list) => {
    setSelectedProduct(item);

    const filtered = list?.filter(
      (p) => p.name !== item.name || p.prize !== item.prize
    );

    setRelatedList(filtered.length ? filtered : list);

    navigate("details");
  };
const removeFromCart = (index) => {
  setCart((prev) => prev.filter((_, i) => i !== index));
};
const handleLogout = () => {
  setPage("login");
  setHistory([]); 
};
  
  if (page === "welcome") {
    return <Wel onStart={() => navigate("signup")} />;
  }

  
  if (page === "signup") {
    return (
      <Signup
        onSignup={() => navigate("home")}
        goLogin={() => navigate("login")}
      />
    );
  }

  
  if (page === "login") {
    return <Login onLogin={() => navigate("home")} 
    goReset={()=>navigate("reset")}/>;

  }

if (page === "reset") {
  return (
    <ResetPassword onReset={() => navigate("login")} />
  );
}
  
  if (page === "home") {
    return (
      <Home
        onShop={(p) => navigate(p)}
        goWishlist={() => navigate("wishlist")}
        goCart={() => navigate("cart")}
        onLogout={handleLogout}
      />
    );
  }

  
  if (page === "shop") {
    return (
      <Shop
        goHome={() => navigate("home")}
        goCart={() => navigate("cart")}
        goWishlist={() => navigate("wishlist")}
        category={shopCategory}
        setCategory={setShopCategory}
        goDetails={(item, cat, list) => {
          setSelectedProduct({ ...item, category: cat });
          setShopCategory(cat);

          const filtered = list.filter((p) => p.name !== item.name);
          setRelatedList(filtered.length ? filtered : list);

          navigate("details");
        }}
      />
    );
  }

  
  if (page === "men") {
    return (
      <Men
        goHome={() => navigate("home")}
        goCart={() => navigate("cart")}
        goWishlist={() => navigate("wishlist")}
        goDetails={(item, list) => handleGoDetails(item, list)}
      />
    );
  }


  if (page === "girls") {
    return (
      <Girls
        goHome={() => navigate("home")}
        goCart={() => navigate("cart")}
        goWishlist={() => navigate("wishlist")}
        goDetails={(item, list) => handleGoDetails(item, list)}
      />
    );
  }


  if (page === "boys") {
    return (
      <Boys
        goHome={() => navigate("home")}
        goCart={() => navigate("cart")}
        goWishlist={() => navigate("wishlist")}
        goDetails={(item, list) => handleGoDetails(item, list)}
      />
    );
  }

  
  if (page === "details" && selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        relatedList={relatedList}
        goBack={goBack}
        addToCart={(item) => setCart((prev) => [...prev, item])}
        addToWishlist={(item) => setWishlist((prev) => [...prev, item])}
        goCart={() => navigate("cart")}
        goWishlist={() => navigate("wishlist")}
        goDetails={(item, list) => handleGoDetails(item, list)}
        cart={cart}
        wishlist={wishlist}
      />
    );
  }


  
  if (page === "cart") {
    return (
      <Cart
        cart={cart}
        goHome={() => navigate("home")}
        goBack={goBack}
        goDetails={(item) => handleGoDetails(item, cart)}
        removeFromCart={removeFromCart}
        goBuyNow={(item) => {
  setCheckoutItem(item);
  navigate("checkout");
}}
      />
    );
  }
  
if (page === "checkout" && checkoutItem)
  return (
    <Checkout
      item={checkoutItem}
      goBack={goBack}
      goHome={() => navigate("home")}
    />
  );

  
  if (page === "wishlist") {
    return (
      <Wishlist
        wishlist={wishlist}
        goHome={() => navigate("home")}
        goBack={goBack}
        goDetails={(item) => handleGoDetails(item, wishlist)}
      />
    );
  }

  return <div>Page not found</div>;
  

}

export default App;