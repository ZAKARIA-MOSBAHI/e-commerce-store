import { assets } from "../assets/frontend_assets/assets";
export default function FilterMenu() {
  const { dropdown_icon } = assets;
  return (
    <div className="min-w-60">
      <h1 className="my-2 text-xl flex items-center gap-2 cursor-pointer">
        FILTERS
        <img src={dropdown_icon} alt="" className=" h-3 w-2 sm:hidden" />
      </h1>
    </div>
  );
}
