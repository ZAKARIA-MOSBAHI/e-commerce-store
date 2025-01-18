import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function SimilarProducts({ pCategory, pId }) {
  const [similarProducts, setSimilarProducts] = useState([]);
  const { products } = useContext(ShopContext);
  const fetchSimilarProducts = async () => {
    const ProductsCopy = products.slice();
    setSimilarProducts(
      ProductsCopy.filter(
        (p) => p.category === pCategory && p._id !== pId
      ).slice(0, 5)
    );
  };
  useEffect(() => {
    fetchSimilarProducts();
  }, [pCategory, pId]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mb-5  md:mb-11">
      {similarProducts &&
        similarProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
    </div>
  );
}

export default SimilarProducts;
