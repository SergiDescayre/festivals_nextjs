"use client";

import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-dark100 p-4 w-full ">
      <div className="container mx-auto flex justify-between  items-center max-w-[1440px] lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0 lg:w-auto hidden md:block">
          <Image
            width={130}
            height={50}
            src="/assets/logo_ligth.png"
            alt="Logo"
          />
        </div>

        {/* Icono de hamburguesa (solo visible en dispositivos móviles) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2 ">
            <Image width={30} height={50} src={"/assets/menu.svg"} alt="menu" />
          </button>
        </div>

        {/* Menús (centrados en dispositivos grandes, ocultos en dispositivos pequeños) */}
        <div className="hidden md:flex  justify-end text-secondary">
          <Link href="/" className=" px-4 py-2">
            Inicio
          </Link>
        </div>
      </div>

      {/* Menús desplegables (solo visibles en dispositivos móviles) */}
      <div className={`md:hidden ${menuOpen ? "" : "hidden"} `}>
        <div className="absolute left-0 z-10 bg-dark100 w-full h-screen text-secondary">
          <div className="flex flex-col items-center h-[100%] gap-12 mt-[150px]">
            <Link
              href="/"
              onClick={toggleMenu}
              className=" px-4 py-2 text-2xl "
            >
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
