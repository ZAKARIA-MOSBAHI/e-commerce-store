import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ProductContext";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

function BestSellers() {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const filteredArr = products.filter(
      (product) => product.bestseller === true
    );
    setBestSellers(filteredArr.slice(0, 5));
  }, []);
  return (
    <>
      <SectionTitle title={"BEST SELLERS"} route={"/bestsellers"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mb-5 md:mb-11">
        {bestSellers.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              badge="BEST SELLERS"
              badgeColor="red"
            />
          );
        })}
      </div>
    </>
  );
}

export default BestSellers;
