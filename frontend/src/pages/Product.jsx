import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ProductContext";
import { assets } from "../assets/frontend_assets/assets";
import SimilarProducts from "../components/SimilarProducts";

export default function Product() {
  const [product, setProduct] = useState({});
  const [mainImg, setMainImg] = useState("");
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const { star_dull_icon, star_icon } = assets;
  const [sizeChoosen, setSizeChoosen] = useState(null);

  const [err, setErr] = useState("");
  const fetchProductData = async () => {
    products.map((p) => {
      if (p._id === productId) {
        setProduct(p);
        setMainImg(p.image[0]);
        return;
      }
    });
  };
  useEffect(() => {
    setSizeChoosen(null);
    fetchProductData();
  }, [productId]);

  return (
    <div className="border-t border-black pt-10 transition-opacity duration-500 opacity-100 ">
      {/* PRODUCT DATA */}
      <div className="flex gap-12 flex-col sm:flex-row mb-4">
        {/* PRODUCT IMAGES */}
        <div className="flex-1 flex flex-col-reverse gap-3 justify-center lg:flex-row">
          <div className="flex lg:flex-col overflow-x-auto gap-2">
            {product.image && product.image.length > 0
              ? product.image.map((img, ind) => {
                  return img === mainImg ? null : (
                    <img
                      key={ind}
                      src={img}
                      onClick={() => {
                        setMainImg(img);
                      }}
                      alt=""
                      className="w-[24%] lg:w-full sm:mb-3 flex-shrink-0 cursor-pointer h-auto"
                    />
                  );
                })
              : null}
          </div>
          {mainImg && (
            <img src={mainImg} alt="" className="w-full lg:w-4/5 h-auto" />
          )}
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{product.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={star_icon} alt="" className="w-3 sm:w-5" />
            <img src={star_icon} alt="" className="w-3 sm:w-5" />
            <img src={star_icon} alt="" className="w-3 sm:w-5" />
            <img src={star_icon} alt="" className="w-3 sm:w-5" />
            <img src={star_dull_icon} alt="" className="w-3 sm:w-5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {product.price}
          </p>
          <p className="mt-5 text-gray-500 font-medium md:w-4/5">
            {product.description}
          </p>
          <div className="flex flex-col gap-4 my-2 sm:my-6">
            <p className="text-lg sm:text-xl">SIZES</p>
            <div className="flex gap-2">
              {product.sizes &&
                product.sizes.map((s, i) => {
                  return (
                    <div
                      key={i}
                      className={`${
                        sizeChoosen === s ? "border border-black" : ""
                      } flex items-center justify-center text-lg w-10 h-10  bg-gray-100 cursor-pointer hover:bg-gray-300 transition-all duration-500 `}
                      onClick={() => {
                        setSizeChoosen(s);
                      }}
                    >
                      {s}
                    </div>
                  );
                })}
            </div>
            {err && <span className="text-red-500 text-sm">{err}</span>}
          </div>
          <button
            className="px-8 py-2.5 bg-black text-white my-4"
            onClick={() =>
              sizeChoosen
                ? addToCart({ ...product, sizeChoosen: sizeChoosen })
                : setErr("Please select a size")
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>
      {/* similar products */}
      <div>
        <p className="text-2xl font-medium sm:py-8 py-4 border-t border-black  ">
          SIMILAR PRODUCTS
        </p>
        <SimilarProducts pCategory={product.category} pId={product._id} />
      </div>
    </div>
  );
}
