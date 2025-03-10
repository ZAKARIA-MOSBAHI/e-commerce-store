import { useContext, useState } from "react";
import { ShopContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../assets/client/icons/HeartIcon";
import Badge from "./ui/Badge";

export default function ProductCard({
  product,
  withBadge,
  withHeart,
  badgeText = "",
  badgeColor = "",
}) {
  const { currency } = useContext(ShopContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden  relative hover:shadow-card   max-w-[350px] w-full cursor-pointer transition-all duration-300 ">
      <div className="overflow-hidden ">
        <img
          loading="lazy"
          src={product.image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out h-full  w-full object-cover"
        />
      </div>
      <div
        className="p-2 flex flex-col gap-2"
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <p className="text-desktop-sm text-gray-400">
          {product.category}'s Wear / {product.subCategory}
        </p>
        <p
          className=" text-desktop-p font-medium truncate"
          title={product.name}
        >
          {product.name}
        </p>
        <p className="font-medium text-desktop-p">
          {currency}
          {product.price}
        </p>
      </div>
      {withBadge && <Badge content={badgeText} color={badgeColor} />}
      {withHeart && (
        <HeartIcon
          className={"absolute top-3 right-3 "}
          onClick={() => setIsFavorite(!isFavorite)}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
}
