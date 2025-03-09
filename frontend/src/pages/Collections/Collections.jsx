import { useContext, useEffect, useState } from "react";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import { ShopContext } from "../../context/ProductContext";
import FilterIcon from "../../assets/client/icons/FilterIcon";
import Pagination from "./components/Pagination";

const Collections = () => {
  const { products, setShowFilterMenu, selectedFilterOptions } =
    useContext(ShopContext);
  const [pageIndex, setPageIndex] = useState(0);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const sortProducts = (filters) => {
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
    sortProducts(selectedFilterOptions);
  }, [selectedFilterOptions]);
  useEffect(() => {
    const productPage = products.slice(pageIndex * 12, (pageIndex + 1) * 12);
    setFilteredProducts(productPage);
  }, [pageIndex]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10  relative max-w-[1152px] w-full mx-auto xl:px-0 px-4">
      <div className="flex-1">
        <div className="flex flex-row justify-between items-center  mb-4">
          <Title title={"COLLECTIONS"} />
          <button
            title="filter menu"
            type="button"
            className="cursor-pointer flex px-4  gap-2 sm:gap-4 py-2.5  text-sm sm:text-base  sm:border-black sm:border bg-white text-black my-4 items-center font-medium"
            onClick={() => setShowFilterMenu((prevState) => !prevState)}
          >
            <span className="hidden sm:inline">SORT & FILTER</span>
            <FilterIcon />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-4 gap-4 gap-y-8">
          {filteredProducts.map((p, i) => {
            return <ProductCard product={p} key={i} withHeart />;
          })}
        </div>
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </div>
    </div>
  );
};

export default Collections;
