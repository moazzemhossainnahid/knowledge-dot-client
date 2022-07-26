import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar";
export default function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full relative top-0 left-0 z-50 ">
      <nav className="md:flex items-center justify-between bg-base-400 py-4 md:px-10 px-7 z-40  ">
        <div
          className="font-bold  cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <div className="logo text-4xl">
            <Link to="/#">LMS</Link>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }
          z-50
          `}
        >
          <li className=" md:ml-8  md:my-0 my-7">
            <Link className="  hover:text-cyan-500 duration-500" to="/">
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                HOME
              </span>
            </Link>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <Link className=" hover:text-cyan-500 duration-500" to="/about">
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                ABOUT US
              </span>
            </Link>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <Link className=" hover:text-cyan-500 duration-500" to="/courses">
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                Courses
              </span>
            </Link>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <Link className=" hover:text-cyan-500 duration-500" to="/blog">
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                BLOG
              </span>
            </Link>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <Link className=" hover:text-cyan-500 duration-500" to="/contact">
              <span className="hover:text-amber hover:bg-nav-pink p-1   rounded">
                CONTACT US
              </span>
            </Link>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <Link className=" hover:text-cyan-500 duration-500" to="/instructors">
              <span className="hover:text-amber hover:bg-nav-pink p-1   rounded">
                INSTRUCTORS
              </span>
            </Link>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <Link className=" hover:text-cyan-500 duration-500" to="/login">
              <span className="hover:text-amber hover:bg-nav-pink p-1   rounded">
                LOGIN
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
