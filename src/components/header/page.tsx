import React from "react";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 right-0 justify-between items-center container max-xl py-5 bg-slate-600">
      <div className="logo">
        <Link href="/">
          <h1 className="flex items-center text-[28px] font-black font-bold text-white">
            Where in the world?
          </h1>
        </Link>
      </div>
      <nav className="flex lg:flex-row md:flex-row  gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/contries">Contries</Link>
        
        <ThemeSwitch  />
      </nav>
    </header>
  );
};

export default Header;
