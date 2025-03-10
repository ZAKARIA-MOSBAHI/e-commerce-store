import { useNavigate } from "react-router-dom";
import { products } from "../../../assets/client/assets";
import DropdownIcon from "../../../assets/client/icons/DropdownIcon";

export default function Pagination({ pageIndex, maxPages }) {
  const pageNumber = parseInt(pageIndex);
  const navigate = useNavigate();
  const togglePages = (to) => {
    if (pageNumber === 1 && to === "back") {
      return;
    } else if (pageNumber === maxPages && to === "next") {
      return;
    } else if (to === "next") {
      navigate(`/collections/${pageNumber + 1}`);
    } else if (to === "back") {
      navigate(`/collections/${pageNumber - 1}`);
    }
  };

  // we have 52 item
  return (
    <div className="my-10 flex gap-4 items-center justify-center ">
      <button onClick={() => togglePages("back")}>
        <DropdownIcon className={"w-6 h-6 cursor-pointer rotate-90"} />
      </button>
      {Array.from({ length: maxPages }).map((i, index) => (
        <button
          key={index}
          onClick={() => navigate(`/collections/${index + 1}`)}
          className={`p-2 cursor-pointer px-4 rounded-md text-center font-medium drop-shadow-[0_10px_40px_rgba(0,0,0,0.1)] ${
            pageNumber === index + 1
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-500"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={() => togglePages("next")}>
        <DropdownIcon className={"w-6 h-6 cursor-pointer -rotate-90"} />
      </button>
    </div>
  );
}
