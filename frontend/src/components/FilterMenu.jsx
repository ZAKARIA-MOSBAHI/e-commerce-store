import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

function FilterMenu({ showFilterMenu, setProductSort, setShowFilterMenu }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const filterOptions = ["Relevant", "Low to high", "High to low"];
  const { cross_icon } = assets;

  return (
    <>
      <div
        className={` ${
          showFilterMenu ? "visible" : "invisible"
        } absolute z-[100] top-0 right-0 before:content[' '] before:bg-black/50 before:backdrop:blur-2xl before:absolute before:top-0 before:left-0 before:w-full before:h-full   w-full h-full flex justify-end transition-all duration-500 `}
        onClick={() => {
          console.log("first");
        }}
      >
        <div
          className={` ${
            showFilterMenu ? "right-0 " : "right-[-50%]"
          }  fixed top-0 overflow-y-scroll transition-all duration-500  w-full h-full sm:w-1/2 lg:w-1/3 bg-white`}
        >
          <div className="flex  fixed top-0  w-full  sm:w-1/2 lg:w-1/3 justify-between items-center p-4 sm:py-6 border-b bg-white border-gray-200">
            <h2 className="text-lg font-bold">SORT & FILTER MENU</h2>
            <img
              src={cross_icon}
              className="w-6 cursor-pointer"
              onClick={() => {
                setShowFilterMenu(false);
              }}
              alt=""
            />
          </div>
          <div className="mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            delectus id tenetur quis assumenda veniam!
          </div>
          <div>
            Atque tempore nulla ipsa dolorum repellat dolores nemo, repudiandae
            placeat, aperiam earum eligendi perspiciatis aut.
          </div>
          <div>
            Impedit illo ut, beatae magni, saepe dolor porro maiores ducimus nam
            qui eum velit omnis!
          </div>
          <div>
            Quisquam maiores, unde culpa iste officiis cumque pariatur sapiente,
            animi assumenda quasi doloribus sed ab.
          </div>
          <div>
            Officia asperiores rem temporibus dicta, explicabo quam voluptatem
            nemo, corporis, autem harum animi aliquam laborum?
          </div>
          <div>
            Perspiciatis odit molestias omnis eaque iusto cupiditate, sunt
            excepturi exercitationem mollitia minima saepe obcaecati neque.
          </div>
          <div>
            Unde, labore similique. Fugit saepe natus hic adipisci aperiam
            voluptatum aliquam reiciendis a minima delectus?
          </div>
          <div>
            Quidem, unde dolore velit veritatis iste enim quod non architecto,
            repudiandae odit corporis itaque autem.
          </div>
          <div>
            Odio placeat ratione similique, perferendis quibusdam cumque, eaque
            aspernatur iure voluptate quod molestiae alias magnam.
          </div>
          <div>
            Voluptatum perspiciatis vero sed asperiores non quos repudiandae
            odio laudantium eos fugit! Nam, natus quam.
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterMenu;
