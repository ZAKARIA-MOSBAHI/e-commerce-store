import { useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
function Accordion({ children, title, openAccordion, toggleAccordion }) {
  const { dropdown_icon } = assets;

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between w-full p-4 font-medium  text-black border-b bg-gray-50/50 border-gray-200 gap-3"
        onClick={() => toggleAccordion(title)}
      >
        <span className=" text-lg font-medium uppercase">{title}</span>
        <img
          src={dropdown_icon}
          className={`${
            openAccordion[title] ? "rotate-180" : ""
          } transition-all duration-700 w-4 h-auto`}
          alt=""
        />
      </button>

      {openAccordion && children}
    </div>
  );
}

export default Accordion;
