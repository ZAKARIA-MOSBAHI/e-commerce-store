import { useState } from "react";

function SortSelectMenu({ setProductSort }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const filterOptions = ["Relevant", "Low to high", "High to low"];

  return (
    <div className="w-32">
      <div className="relative mt-2">
        <button
          type="button"
          className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm /6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate">SORT BY</span>
          </span>
          <svg
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <ul
          className={`transition ease-in duration-100 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-xs ${
            showMenu ? "opacity-100" : "opacity-0"
          }`}
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {filterOptions.map((opt, ind) => {
            return (
              <li
                onClick={() => {
                  setSelectedOption(opt);
                  setProductSort(opt);
                }}
                key={ind}
                className="relative transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:outline-none cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                id="listbox-option-0"
                role="option"
              >
                <div className="flex items-center">
                  <span
                    className={` ${
                      selectedOption === opt ? "font-semibold" : ""
                    }ml-3 block  font-normal`}
                  >
                    {opt}
                  </span>
                </div>

                <span
                  className={`${
                    selectedOption === opt ? "" : "hidden"
                  } absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600`}
                >
                  <svg
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            );
          })}

          {/* <!-- More items... --> */}
        </ul>
      </div>
    </div>
  );
}

export default SortSelectMenu;
