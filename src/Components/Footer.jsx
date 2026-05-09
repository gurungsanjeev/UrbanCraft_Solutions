import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-800 text-white">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-14">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-700 flex items-center justify-center text-black font-black text-xl">
              UC
            </div>

            <div>
              <h2 className="text-xl font-black tracking-wide uppercase">
                Urbancraft
              </h2>
              <p className="text-xs tracking-[4px] uppercase text-yellow-700">
             Solutions.
              </p>
            </div>
          </div>

          <p className="text-zinc-400 leading-7 text-sm mb-6">
            Nepal’s trusted construction company delivering premium
            residential, commercial, and infrastructure projects with
            engineering excellence since 1997.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-yellow-700 hover:text-black hover:border-yellow-700 transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-6 tracking-wide">
            Services
          </h3>

          <ul className="space-y-4 text-zinc-400 text-sm">
            {[
              "Commercial Construction",
              "Residential Projects",
              "Industrial Facilities",
              "Infrastructure & Civil",
              "Renovation & Retrofit",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-yellow-700 transition cursor-pointer"
              >
                <FaArrowRight size={10} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-6 tracking-wide">
            Company
          </h3>

          <ul className="space-y-4 text-zinc-400 text-sm">
            {[
              "About Us",
              "Projects",
              "Leadership Team",
              "Careers",
              "Contact",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-yellow-700 transition cursor-pointer"
              >
                <FaArrowRight size={10} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-6 tracking-wide">
            Contact
          </h3>

          <div className="space-y-5 text-sm">
            <div>
              <p className="text-zinc-500 uppercase text-xs tracking-[3px] mb-2">
                Office
              </p>
              <p className="text-zinc-300 leading-6">
                 Kathmandu, Nepal
              </p>
            </div>

            <div>
              <p className="text-zinc-500 uppercase text-xs tracking-[3px] mb-2">
                Phone
              </p>
              <p className="text-zinc-300">+977 9702519450</p>
            </div>

            <div>
              <p className="text-zinc-500 uppercase text-xs tracking-[3px] mb-2">
                Email
              </p>
              <p className="text-zinc-300">urbancraftconstructs@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            © 2026 Urbancraft Solutions . All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;