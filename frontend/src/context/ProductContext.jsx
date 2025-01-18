import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const addToCart = (value) => {
    if (value.sizeChoosen) {
      setCart((prevCart) => ({
        ...prevCart,
        items: [...cart.items, value],
        total: cart.total + value.price,
      }));
    } else {
      return;
    }
  };
  const deleteProduct = (p) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: cart.items.filter((cartItem) => {
        return cartItem._id !== p._id || cartItem.sizeChoosen !== p.sizeChoosen;
      }),
      total: cart.total - p.price,
    }));
  };

  const search = (e) => {
    const value = e.target.value.toLowerCase().split(" ");
    const ProductsCopy = products.slice();
    const searchedProducts = ProductsCopy.filter((p) => {
      const productNameWords = p.name.toLowerCase().split(" ");
      // Check if any word from user input matches a word in the product name
      return value.some((val) => productNameWords.includes(val));
    });

    setSearchResults(searchedProducts);
  };
  const value = {
    currency: "$",
    shipping_fees: 15,
    products,
    showSearch,
    setShowSearch,
    search,
    searchResults,
    addToCart,
    cart,
    setCart,
    deleteProduct,
  };
  useEffect(() => {
    if (showSearch === false) {
      setSearchResults([]);
    }
  }, [showSearch]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
