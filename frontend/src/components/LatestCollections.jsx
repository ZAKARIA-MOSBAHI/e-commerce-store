import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ProductContext";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

function LatestCollections() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(10, 15));
  }, []);
  return (
    <>
      <SectionTitle title={"LATEST COLLECTIONS"} route={"/collections"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mb-5 md:mb-11">
        {latestProducts.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              badge="LATEST COLLECTIONS"
              badgeColor="green" // only red works
            />
          );
        })}
      </div>
    </>
  );
}

export default LatestCollections;
