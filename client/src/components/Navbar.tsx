import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Contact,

  Home,
  Info,
  Layers,
  Menu,
  X,
} from "lucide-react";
import logo from "../../../client/public/assets/PNG.png";

type NavItem = {
  value: string;
  icon: React.ReactNode;
  to: string;
};

const navLinks: NavItem[] = [
  // {
  //   value: "Donate",
  //   icon: <HeartHandshakeIcon size={18} className="text-red-700" />,
  //   to: "donation",
  // },
  {
    value: "Home",
    icon: <Home size={18} className="text-[#0073A4]" />,
    to: "/",
  },
  {
    value: "About",
    icon: <Info size={18} className="text-[#0073A4]" />,
    to: "about",
  },
  {
    value: "Programs",
    icon: <Layers size={18} className="text-[#0073A4]" />,
    to: "programs",
  },
  {
    value: "Events",
    icon: <Layers size={18} className="text-[#0073A4]" />,
    to: "events",
  },
  {
    value: "Contacts",
    icon: <Contact size={18} className="text-[#0073A4]" />,
    to: "contacts",
  },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-48 h-10" />
          {/* <p className="font-semibold leading-tight text-sm sm:text-base">
            Tanzania Youth <br /> Health and Development <br /> Organization
          </p> */}
        </div>

        {/* Desktop Subtitle */}
        <p className="hidden md:block text-[7px]  ">
          We are a Non-Profit Youth Health Organization
        </p>

        {/* Desktop Nav */}
        <nav className="hidden md:block items-center space-x-6">
          <ul className="flex items-center gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition
    ${
      link.value === "Donate"
        ? isActive
          ? "bg-red-700 text-white"
          : "text-red-700 hover:bg-red-100"
        : isActive
        ? "bg-[#0073A4] text-white"
        : "hover:bg-gray-200 text-gray-800"
    }`
                  }
                >
                  {link.icon}
                  {link.value}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <p className="text-[7px] md:hidden ">
          We are a Non-Profit Youth Health Organization
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition
    ${
      link.value === "Donate"
        ? isActive
          ? "bg-red-700 text-white"
          : "text-red-700 hover:bg-red-100"
        : isActive
        ? "bg-[#0073A4] text-white"
        : "hover:bg-gray-200 text-gray-800"
    }`
                  }
                >
                  {link.icon}
                  {link.value}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
