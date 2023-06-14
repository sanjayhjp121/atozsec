import React from "react";
import "animate.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logocopy.png";

const SlideBar = (props) => {
  const slideBarRef = React.useRef(null);
  const onCloseSideBar = () => {

  };

  return (
    <div
      ref={slideBarRef}
      style={{ animationDuration: "0.2s" }}
      className={`${
        !props.openDocsMenu && "hidden"
      } flex flex-col justify-between sidebar fixed md:static z-10 md:z-0 bg-white animate__animated animate__slideInLeft md:animate-none md:block w-[350px] shadow-lg md:shadow-none md:border-r h-full border-[#dbdbdb] overflow-y-scroll py-10 px-8`}
    >
      <ul className={`flex flex-col gap-6 mt-4`}>
        <li
          onClick={props.toggleDocsMenu}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/WebApp"
          >
            Web Application Security Testing
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/MobApp"
          >
            Mobile Application Security Testing
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/Penetration"
          >
            Penetration testing Service
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/SourceCode"
          >
            Source Code Audit Service
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/vulnerability"
          >
            Vulnerability
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/AnnualWebsite"
          >
            Annual Website Security Management Service
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li
          onClick={props.toggleDocsMenu}
          className="md:hidden text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SlideBar;
