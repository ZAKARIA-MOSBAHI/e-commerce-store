import { useContext } from "react";
import { ShopContext } from "../context/ProductContext";
import { assets } from "../assets/frontend_assets/assets";

function Cart() {
  const { cart, deleteProduct, currency, shipping_fees } =
    useContext(ShopContext);
  const { bin_icon } = assets;
  return (
    <div>
      <div className="flex flex-col  md:flex-row justify-between ">
        <div className="flex flex-col w-full md:w-[60%]">
          <h1 className="text-2xl font-medium sm:py-8 py-4">CART</h1>
          {cart.items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-4 border border-black relative my-2"
              >
                <img src={item.image[0]} alt="" className="w-36 h-auto" />
                <div>
                  <h1 className="text-lg sm:text-xl font-medium my-2">
                    {item.name}
                  </h1>
                  <p className="price text-base sm:text-xl">
                    <span className="text-gray-400 font-light pr-1">
                      Price :
                    </span>
                    {currency}
                    {item.price}
                  </p>
                  <p className="price text-lg sm:text-xl">
                    <span className="text-gray-400 font-light pr-1">
                      Size :
                    </span>
                    {item.sizeChoosen}{" "}
                  </p>
                  <button
                    className=" flex px-2 sm:px-4 gap-2 sm:gap-4 py-2.5  text-sm sm:text-base border-black border-[1px] bg-white text-gray-500 my-4 items-center font-medium"
                    onClick={() => deleteProduct(item)}
                  >
                    <img
                      src={bin_icon}
                      className="sm:w-6 w-4 h-auto  cursor-pointer"
                      alt=""
                    />
                    DELETE PRODUCT
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-[35%]">
          <h1 className="text-2xl font-medium sm:py-8 py-4 ">ORDER SUMMARY</h1>
          <div className="flex flex-col p-8  border">
            <p className="flex justify-between text-sm  font-light sm:text-base">
              {cart.items.length} ITEMS
              <span>
                {currency}
                {cart.total}
              </span>
            </p>
            <p className="flex justify-between text-sm  font-light sm:text-base">
              SALES TAX
              <span>
                {currency}
                {0}
              </span>
            </p>
            <p className="flex justify-between text-sm  font-light sm:text-base">
              DELIVERY
              <span>
                {currency}
                {shipping_fees}
              </span>
            </p>

            <div className="flex  justify-between py-4 border-t  border-gray-400">
              <p className="text-lg font-medium">TOTAL :</p>
              <p className="text-lg ">
                {currency}
                {cart.total + shipping_fees}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
