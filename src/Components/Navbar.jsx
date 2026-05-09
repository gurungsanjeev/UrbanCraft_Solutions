import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = ({ activeNav, onNav, scrolled }) => {
  const NAV_LINKS = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Team",
    "Contact",
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 text-zinc-200 backdrop-blur border-b border-yellow-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNav("Home")}
        >
          <div className="w-10 h-10 bg-yellow-700 flex items-center justify-center font-black text-black text-lg">
            UC
          </div>

          <div>
            <h2 className="uppercase tracking-[4px] text-sm font-bold">
              UrbanCraft
            </h2>
            <p className="text-[10px] tracking-[3px] text-yellow-600 uppercase">
              Solutions
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              onClick={() => onNav(item)}
              className={`uppercase tracking-[2px] text-xs transition ${
                activeNav === item
                  ? "text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href="https://wa.me/15551234567"
          className="hidden md:block  hover:bg-white hover:text-black transition px-6 py-3 text-white uppercase tracking-[2px] text-xs font-bold"
        >
          <h5 className="flex items-center gap-3">
            
            <IoLogoWhatsapp className="text-green-500  text-2xl" /> Chat with us
          </h5>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
