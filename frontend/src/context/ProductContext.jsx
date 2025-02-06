import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  // options for filter menu
  const filterOptions = {
    category: ["men", "women", "kids"],
    price: ["low to high", "high to low"],
    weartype: ["topwear", "bottomwear", "winterwear"],
    size: ["S", "M", "L", "XL", "XXL"],
  };
  // filters selected by the user
  const [selectedFilterOptions, setSelectedFilterOptions] = useState({
    category: null,
    price: null,
    weartype: null,
    size: null,
  });
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
        return cartItem.ref !== p.ref;
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
    showFilterMenu,
    setShowFilterMenu,
    selectedFilterOptions,
    setSelectedFilterOptions,
    filterOptions,
    LoggedIn,
    setLoggedIn,
  };
  useEffect(() => {
    if (showSearch === false) {
      setSearchResults([]);
    }
  }, [showSearch]);

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
