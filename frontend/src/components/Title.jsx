import { Link } from "react-router-dom";

function Title({ title, route }) {
  return (
    <div className="flex items-center gap-4  pt-8 pb-4 justify-center text-center text-2xl md:text-3xl mb-3">
      <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
      <h1 className="">
        <Link to={`${route}`} className="prata-regular font-medium ">
          {title}
        </Link>
      </h1>
      <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
    </div>
  );
}

export default Title;
