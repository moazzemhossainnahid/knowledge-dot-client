import React from "react";
import { NavLink } from "react-router-dom";

const CheckoutForm = () => {
  return (
    <div className="border  px-5 col-span-2  shadow-sm">
      <h2 className="py-5 text-3xl text-black text-opacity-75">
        Personal Information
      </h2>
      <form>
        <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-stretch  gap-5  ">
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Input"
                className="h-[50px]  w-full  px-6 text-2xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-33px] px-1 transition duration-200 input-text">
                First Name
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Input"
                className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                First Name
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Input"
                className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                First Name
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Input"
                className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              />
              <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                First Name
              </span>
            </label>
          </div>
        </div>
        <div>
          <h3 className="py-4">
            Existing Customer?{" "}
            <NavLink to="/" className="text-blue-500">
              Click here to login
            </NavLink>{" "}
          </h3>
        </div>
        <div>
          <hr />
          <div className="mt-5">
            <input type="radio" name="paymentOption" id="" />
            <span className="text-2xl text-black font-bold text-opacity-95 ml-4">
              Credit Card
            </span>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-items-stretch   gap-5 py-5">
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Input"
                  className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                />
                <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                  First Name
                </span>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Input"
                  className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                />
                <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                  First Name
                </span>
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 justify-items-stretch   gap-5 py-5">
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Input"
                  className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                />
                <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                  First Name
                </span>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Input"
                  className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                />
                <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                  First Name
                </span>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Input"
                  className="h-[50px]  w-full   px-6 text-4xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                />
                <span className=" text-lg bg-white te text-opacity-80 absolute left-5 top-[-37px] px-1 transition duration-200 input-text">
                  First Name
                </span>
              </label>
            </div>
          </div>
          <div className="mt-5">
            <input type="radio" name="paymentOption" id="" />
            <span className="text-2xl text-black font-bold text-opacity-95 ml-4">
              Paypal
            </span>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <span className="ml-2">
              I have read and accepted <a href="#">Terms & Conditions</a>
            </span>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
