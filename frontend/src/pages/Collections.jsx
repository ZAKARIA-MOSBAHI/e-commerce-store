import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { ShopContext } from "../context/ProductContext";

const Collections = () => {
  const { products, setShowFilterMenu } = useContext(ShopContext);
  const { filter_icon } = assets;
  const [showFilters, setShowFilters] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [productSort, setProductSort] = useState(null);

  const sort = () => {
    let filteredProductsCopy = filteredProducts.slice();
    switch (productSort) {
      case "Relevant":
        console.log("first");
        break;
      case "High to low":
        filteredProductsCopy.sort((a, b) => b.price - a.price);
        break;
      case "Low to high":
        filteredProductsCopy.sort((a, b) => a.price - b.price);
        break;
      default:
        return;
    }
    setFilteredProducts(filteredProductsCopy);
  };

  const handleCategoryChange = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };
  const handleSubCategoryChange = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };
  const applyCategory = () => {
    let filteredProductsCopy = products.slice();
    if (category.length > 0) {
      filteredProductsCopy = filteredProductsCopy.filter((product) =>
        category.includes(product.category)
      );
    }
    if (subCategory.length > 0) {
      filteredProductsCopy = filteredProductsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    setFilteredProducts(filteredProductsCopy);
  };
  useEffect(() => {
    setFilteredProducts(products);
  }, []);
  useEffect(() => {
    applyCategory();
  }, [category, subCategory]);
  useEffect(() => {
    sort();
  }, [productSort]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-y relative">
      {/* collection products */}
      <div className="flex-1">
        <div className="flex flex-col  md:flex-row justify-between items-center text-base sm:text-2xl mb-4">
          <Title title={"COLLECTIONS"} />
          <button
            type="button"
            className=" flex px-2 sm:px-4 gap-2 sm:gap-4 py-2.5  text-sm sm:text-base border-black border-[1px] bg-white text-black my-4 items-center font-medium"
            onClick={() => setShowFilterMenu((prevState) => !prevState)}
          >
            SORT & FILTER
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
