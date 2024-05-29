"use-client";

import ListFestivals from "./ListFestivals";

const Header = () => {
  return (
    <>
      <header className="paralax ">
        <div className="bg-zinc-950 min-h-[500px] bg-opacity-50">
          <div className=" flex flex-col md:py-[60px]">
            <span className="leading-[50px] text-4xl text-primary m-9 text-center md:text-5xl">
              ¡¡Feel the rhythm, live the experience!!
            </span>
          </div>
        </div>
      </header>
      <div className="relative">
        <div className="-z-0 clip absolute -top-[100px] min-w-full  md:h-28 bg-dark50"></div>
        <ListFestivals />
      </div>
    </>
  );
};

export default Header;
