import { useContext } from "react";
import { ShopContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import SelectMenu from "./components/SelectMenu";
import QuantityCounter from "./components/QuantityCounter";

function Cart() {
  const { cart, deleteProduct, currency, shipping_fees } =
    useContext(ShopContext);
  console.log(cart);
  return (
    <div>
      <div className="flex flex-col  md:flex-row justify-between ">
        <div className="flex flex-col w-full md:w-[60%] py-8">
          <h1 className="text-2xl font-medium">CART</h1>
          <div className="h-[1.5px] bg-gray-200 sm:my-6 my-4"></div>
          {cart.items.map((item, index) => {
            return (
              <>
                <div key={index} className="flex gap-4 relative my-2">
                  <img
                    src={item.image[0]}
                    alt=""
                    className="w-36 rounded-lg h-auto object-cover"
                  />
                  <div className="w-full flex-col flex gap-4 ">
                    <div className="flex justify-between items-center text-lg sm:text-xl">
                      <h1 className=" text-gray-600 my-2">{item.name}</h1>
                      <p className="font-medium">
                        {currency}
                        {item.price}
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <div className="flex gap-4 items-center">
                        <span className="text-gray-500">Quantity </span>
                        <QuantityCounter
                          quantity={item.quantity}
                          product={item}
                        />
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="text-gray-500">Size </span>
                        <SelectMenu product={item} />
                      </div>
                    </div>
                    <button
                      className=" w-fit bg-gray-100 px-2 sm:px-4 gap-2 sm:gap-4 py-2.5  text-sm sm:text-base border-gray-800 rounded-md border-[1px]   text-gray-900  items-center hover:font-medium cursor-pointer hover:bg-gray-900 hover:text-white transition-colors duration-300"
                      onClick={() => deleteProduct(item)}
                    >
                      DELETE PRODUCT
                    </button>
                  </div>
                </div>
                <div className="h-[1.5px] bg-gray-200 sm:my-6 my-4"></div>
              </>
            );
          })}
        </div>
        <div className="w-full md:w-[35%]">
          <h1 className="text-2xl font-medium sm:py-8 py-4 ">ORDER SUMMARY</h1>
          <div className="flex flex-col p-8  border my-2">
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
          <Link to={"/place-order"}>
            <button className="px-8 py-2.5 bg-black w-full text-white my-4">
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
