import { products } from "../../../assets/client/assets";
import DropdownIcon from "../../../assets/client/icons/DropdownIcon";

export default function Pagination({ pageIndex, setPageIndex }) {
  const maxPages = Math.ceil(products.length / 12);
  console.log(maxPages);
  const togglePages = (to) => {
    if (pageIndex === 0 && to === "back") {
      return;
    } else if (pageIndex === maxPages && to === "next") {
      return;
    } else if (to === "next") {
      setPageIndex(pageIndex + 1);
    } else if (to === "back") {
      setPageIndex(pageIndex - 1);
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
          onClick={() => setPageIndex(index)}
          className={`p-2 cursor-pointer px-4 rounded-md text-center font-medium drop-shadow-[0_10px_40px_rgba(0,0,0,0.1)] ${
            pageIndex === index
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
