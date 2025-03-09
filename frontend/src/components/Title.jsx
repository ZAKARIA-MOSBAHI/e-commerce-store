function Title({ title }) {
  return (
    <div className="flex items-center gap-4  pt-8 pb-4 justify-center text-center mb-3">
      <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
      <h1 className="prata-regular text-mobile-h3 md:text-desktop-h3 font-medium">
        {title}
      </h1>
      <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
    </div>
  );
}

export default Title;
