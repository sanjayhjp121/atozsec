import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logocopy.png";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();

  const onCloseSideBar = () => {
    if (!props.openDocsMenu) {
      props.toggleDocsMenu();
    } else {
      document
        .querySelector(".sidebar")
        ?.classList?.remove("animate__slideInLeft");
      document.querySelector(".sidebar").classList.add("animate__slideOutLeft");

      setTimeout(() => {
        props.toggleDocsMenu();
      }, 200);
    }
  };

  return (
    <nav className="nav fixed top-0 w-full px-8 md:px-16 bg-white z-20 shadow-md flex justify-between py-2">
      <div className="flex">
        {(!location.pathname.includes("about") && !location.pathname.includes("contact")) && (
          <button className={`text-3xl md:hidden`} onClick={onCloseSideBar}>
            <RxHamburgerMenu />
          </button>
        )}
        <Link className="flex items-center gap-2" to={"/"}>
          <img
            style={{ borderRadius: "50%", marginLeft: "1rem" }}
            src={Logo}
            className="w-12"
          />

          <h1 className="font font-bold text-lg">A TO Z Security</h1>
        </Link>
      </div>
      <ul className="hidden md:flex items-center justify-end  gap-4 md:gap-8 text-md">
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
