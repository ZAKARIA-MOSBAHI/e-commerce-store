import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ProductContext";
function Navbar() {
  const {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
  } = assets;
  const [isOpen, setIsOpen] = useState(false);
  const { setShowSearch, cart } = useContext(ShopContext);
  return (
    <div
      className={`${
        isOpen ? "" : "sticky"
      }  top-0 w-full bg-white z-50  border-b  flex items-center justify-between font-medium py-5`}
    >
      <img src={logo} className="w-36 cursor-pointer" alt="" />
      <ul className="hidden sm:flex gap-5 text-gray-700 text-sm">
        <NavLink to="/" className={"flex flex-col items-center gap-1 "}>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 transition-all duration-200" />
        </NavLink>
        <NavLink
          to="/collections"
          className={"flex flex-col items-center gap-1 "}
        >
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0  transition-all duration-200" />
        </NavLink>
        <NavLink to="/about" className={"flex flex-col items-center gap-1 "}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 transition-all duration-200" />
        </NavLink>
        <NavLink to="/contact" className={"flex flex-col items-center gap-1 "}>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 transition-all duration-200" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={search_icon}
          className="w-5 cursor-pointer"
          alt=""
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <img src={profile_icon} className="w-5 cursor-pointer" alt="" />
          <div className="group-hover:block hidden dropdown-menu absolute right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="" className="w-5 cursor-pointer" />
          <p
            className={`${
              cart.items.length === 0 ? "hidden" : ""
            } absolute right-[-5px] bottom-[-5px] rounded-full w-4 text-center leading-4 bg-red-500  text-white aspect-square  text-[8px]`}
          >
            {cart.items.length}
          </p>
        </Link>
        <img
          src={menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
      {/* side bar for smaller screens  */}
      <div
        className={`absolute h-full top-0 right-0 z-10 bottom-0 overflow-hidden transition-all duration-500 bg-white ${
          isOpen ? "w-full" : "w-0"
        }`}
      >
        <div
          className="flex flex-col  text-gray-600"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <div className="flex items-center gap-4 p-3 border">
            <img
              src={dropdown_icon}
              className="h-4 rotate-90 cursor-pointer"
              alt=""
            />
            <p className="cursor-pointer">Back</p>
          </div>
          <NavLink
            className={"p-3 border hover:ps-[rem] transition-all duration-200"}
            onClick={() => {
              setIsOpen(false);
            }}
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            className={"p-3 border hover:ps-[rem] transition-all duration-200"}
            onClick={() => {
              setIsOpen(false);
            }}
            to={"/collections"}
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            className={"p-3 border hover:ps-[rem] transition-all duration-200"}
            onClick={() => {
              setIsOpen(false);
            }}
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            className={"p-3 border hover:ps-[rem] transition-all duration-200"}
            onClick={() => {
              setIsOpen(false);
            }}
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
