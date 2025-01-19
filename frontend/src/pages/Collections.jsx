import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { ShopContext } from "../context/ProductContext";

const Collections = () => {
  const { products, setShowFilterMenu, selectedFilterOptions } =
    useContext(ShopContext);
  const { filter_icon } = assets;
  const [filteredProducts, setFilteredProducts] = useState([]);

  const sortProducts = (filters) => {
    console.log(filters);
    let productsCopy = products.slice();
    if (filters.category) {
      // filter method returns a new array but it doesn't affect the original array
      productsCopy = productsCopy.filter(
        (p) => p.category.toLowerCase() === filters.category
      );
    }
    if (filters.price) {
      if (filters.price === "low to high") {
        productsCopy = productsCopy.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (filters.price === "high to low") {
        productsCopy = productsCopy.sort((a, b) => {
          return b.price - a.price;
        });
      }
    }
    if (filters.weartype) {
      productsCopy = productsCopy.filter((p) => {
        const lowerCase = p.subCategory.toLowerCase();
        return lowerCase === filters.weartype;
      });
    }
    if (filters.size) {
      productsCopy = productsCopy.filter(
        (p) => p.sizes.includes(filters.size) === true
      );
    }
    setFilteredProducts(productsCopy);
  };
  useEffect(() => {
    setFilteredProducts(products);
  }, []);
  useEffect(() => {
    sortProducts(selectedFilterOptions);
  }, [selectedFilterOptions]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-y relative">
      {/* collection products */}
      <div className="flex-1">
        <div className="flex flex-row justify-between items-center  mb-4">
          <Title title={"COLLECTIONS"} />
          <button
            title="filter menu"
            type="button"
            className=" flex px-4  gap-2 sm:gap-4 py-2.5  text-sm sm:text-base  sm:border-black sm:border bg-white text-black my-4 items-center font-medium"
            onClick={() => setShowFilterMenu((prevState) => !prevState)}
          >
            <span className="hidden sm:inline">SORT & FILTER</span>
            <img src={filter_icon} className="w-6" alt="" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((p, i) => {
            return <ProductCard product={p} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
