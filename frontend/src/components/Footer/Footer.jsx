import { assets } from "../../assets/client/assets";
import FacebookIcon from "../../assets/client/icons/FacebookIcon";
import InstagramIcon from "../../assets/client/icons/InstagramIcon";
import LinkedinIcon from "../../assets/client/icons/LinkedinIcon";
import TwitterIcon from "../../assets/client/icons/TwitterIcon";
import IconsRow from "./components/IconsRow";
function Footer() {
  const { logo } = assets;
  return (
    <div className="border-t border-t-black">
      <div className="flex flex-col md:grid grid-cols-[1fr_1fr_1fr] gap-20 w-full px-4 my-20 max-w-[1152px] mx-auto">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <img src={logo} alt="" className="w-32 mx-auto md:mx-0" />
          <p className="w-full text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum
            nisi, aliquam reiciendis fugit harum.
          </p>
          <IconsRow />
        </div>
        <div className="flex flex-col gap-4  text-center md:text-left">
          <p className="text-xl font-medium  ">CONTACT US</p>
          <ul className="flex flex-col gap-4 text-gray-600">
            <li>Company@gmail.com</li>
            <li> 123 Street, New York</li>
            <li>+212 612 123 456</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xl font-medium">SUBSCRIBE</p>
          <p>Enter your email to get notified about our latest news.</p>
          <input
            type="text"
            className="py-4 w-full border border-black placeholder:text-gray-500  px-4"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <hr />
        <p className="text-gray-600 text-center py-4 md:py-8">
          2025 Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
