import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import FilterMenu from "./components/FilterMenu";
import { useContext } from "react";
import { ShopContext } from "./context/ProductContext";

function App() {
  const { showFilterMenu, setShowFilterMenu } = useContext(ShopContext);
  return (
    <div
      className={` px-2  sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative overflow-hidden`}
    >
      <FilterMenu
        showFilterMenu={showFilterMenu}
        setShowFilterMenu={setShowFilterMenu}
      />
      <SearchBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/place-orders" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<div> 404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
