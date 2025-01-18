import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import SortSelectMenu from "../components/SortSelectMenu";
import ProductCard from "../components/ProductCard";
import { ShopContext } from "../context/ProductContext";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const { dropdown_icon } = assets;
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
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-y">
      {/* filter menu start */}
      <div className="min-w-60">
        <h1
          className="my-2 text-xl flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          FILTERS
          <img
            src={dropdown_icon}
            alt=""
            className={`h-3 w-2 ${
              showFilters ? "rotate-90" : ""
            } transition-all duration-500`}
          />
        </h1>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } `}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                name="category"
                value={"Men"}
                id="Men"
                className="w-3 "
                onChange={handleCategoryChange}
              />
              <label htmlFor={"Men"}>MEN</label>
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                name="category"
                value={"Women"}
                id="Women"
                className="w-3 "
                onChange={handleCategoryChange}
              />
              <label htmlFor={"Women"}>WOMEN</label>
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                name="category"
                value={"Kids"}
                id="kids"
                className="w-3 "
                onChange={handleCategoryChange}
              />
              <label htmlFor={"kids"}>KIDS</label>
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? "" : "hidden"
          } `}
        >
          <p className="mb-3 text-sm font-medium">WEARTYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                name="category"
                value={"Topwear"}
                id="top"
                className="w-3 "
                onChange={handleSubCategoryChange}
              />
              <label htmlFor={"top"}>TOPWEAR</label>
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                name="category"
                value={"Bottomwear"}
                id="bottom"
                className="w-3 "
                onChange={handleSubCategoryChange}
              />
              <label htmlFor={"bottom"}>BOTTOMWEAR</label>
            </p>
            <p className="flex gap-2 ">
              <input
                type="checkbox"
                name="category"
                value={"Winterwear"}
                id="shoes"
                className="w-3 "
                onChange={handleSubCategoryChange}
              />
              <label htmlFor={"shoes"}>WINTERWEAR</label>
            </p>
          </div>
        </div>
      </div>
      {/* collection products */}
      <div className="flex-1">
        <div className="flex flex-col  md:flex-row justify-between items-center text-base sm:text-2xl mb-4">
          <Title title={"COLLECTIONS"} />
          <SortSelectMenu
            productSort={productSort}
            sort={sort}
            setProductSort={setProductSort}
          />
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
