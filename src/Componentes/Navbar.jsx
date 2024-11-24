import React from "react";
import images from "../assets/images/images";
import { useState, useRef } from "react";

function Navbar() {
  const [OpenMenu, setOpenMenu] = useState(false);

  const ToggleButton = () => {
    setOpenMenu(!OpenMenu);
  };

  return (
    <nav className="z-10 relative w-full flex p-8 flex-col items-center justify-between">
      <ul className="w-full flex items-center justify-between">
        <li className="">
          <img src={images.logo} alt="logo" />
        </li>
        <li>
          <img
            src={OpenMenu ? images.iconClose : images.iconHamburger}
            alt="hamburger"
            onClick={ToggleButton}
          />
        </li>
      </ul>
      <ul
        className={`${
          OpenMenu ? "flex" : "hidden"
        } bg-white p-8  text-center flex-col justify-start shadow-2xl my-5 rounded-lg  w-full items-center`}
      >
        <ul className="grid gap-4 w-full justify-items-center">
          <li className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2">
              Product <img src={images.iconArrowDark} alt="" />
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2">
              Company <img src={images.iconArrowDark} alt="" />
            </a>
          </li>
          <li className="flex items-center justify-center flex-wrap gap-2 w-full">
            <button
              type="button"
              onClick={(e) => {
                Array.from(e.target.parentElement.children)
                  .find((child) => child.tagName.toLowerCase() === "ul")
                  .classList.toggle("hidden");
                Array.from(e.target.parentElement.children)
                  .find((child) => child.tagName.toLowerCase() === "img")
                  .classList.toggle("rotate-180");
              }}
              className="flex items-center gap-2"
            >
              Connect
            </button>
            <img src={images.iconArrowDark} alt="" />
            <ul className="p-4 flex-col rounded-2xl text-grayish-blue items-center w-full bg-gray-text ">
              <li className="py-2">
                <a href="#">Contact</a>
              </li>
              <li className="py-2">
                <a href="#">Newsletter</a>
              </li>
              <li className="py-2">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="gap-4 flex flex-col items-center w-full">
          <li className="border-t border-gray-300 my-4 w-full"></li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <button className=" bg-gradient-to-r from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] text-sure-text rounded-full py-2 px-4">
              <a href="#">Sign Up</a>
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
