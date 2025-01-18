import { useContext } from "react";
import { ShopContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, badge = "", badgeColor = "" }) {
  const { currency } = useContext(ShopContext);
  const navigate = useNavigate();
  //since tailwing doesn't support dynamic class names, we use a conditional statement to add the class
  const Color =
    badgeColor === "red"
      ? "bg-red-500"
      : badgeColor === "green"
      ? "bg-green-500"
      : "";
  return (
    <div className="relative">
      <div
        className="overflow-hidden text-gray-600 cursor-pointer "
        onClick={() => {
          navigate(`/product/${product._id}`);
        }}
      >
        <img
          src={product.image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{product.name}</p>
      <p className="font-medium text-sm ps-1">
        {currency}
        {product.price}
      </p>
      <span
        className={`absolute top-2 left-2 inline-flex items-center rounded-md  ${Color} px-2 py-1 text-xs font-medium  text-white`}
      >
        {badge}
      </span>
    </div>
  );
}
