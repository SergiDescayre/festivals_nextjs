"use-client";

import ListFestivals from "./ListFestivals";

const Header = () => {
  return (
    <>
      <header className="paralax ">
        <div className="bg-zinc-950 min-h-[400px] bg-opacity-50">
          <div className=" flex flex-col ">
            <div className="h-[350px] flex items-center justify-center">
              <span className="leading-[50px] ps-6 text-4xl text-primary my-9 md:text-5xl">¡¡Siente el ritmo, vive la experiencia!!</span>
            </div>
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
