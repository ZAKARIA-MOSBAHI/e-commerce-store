import { assets } from "../assets/frontend_assets/assets";
function Footer() {
  const { logo } = assets;
  return (
    <div className="border-y border-t-black">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum
            nisi, aliquam reiciendis fugit harum.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 ">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+2126123456</li>
            <li>Company@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-gray-600 text-center py-4">
          2025 Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
