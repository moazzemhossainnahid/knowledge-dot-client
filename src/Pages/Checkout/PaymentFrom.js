import React from "react";
import { Link } from "react-router-dom";

const PaymentFrom = () => {
  return (
    <div className="pt-3">
      <h2 className="mb-2  text-2xl block text-black ">Payment Method</h2>
      <div className="flex items-center justify-start  h-10">
        <input
          type="radio"
          name="radio-4"
          className="radio radio-accent radio-sm"
          checked
        />
        <h4 className="font-bold text-xl text-black text-opacity-90 ml-3">
          {" "}
          Credit Card
        </h4>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-7 gap-x-8 py-5 ">
        <div>
          <label className="relative">
            <input
              type="text"
              className="h-[50px] w-full px-3 text-2xl  border-black border rounded-sm border-opacity-30 outline-none focus:border-opacity-50  placeholder-gray-300  transition duration-200"
            />
            <span
              className=" bg-white text-black text-opacity-70
                      absolute left-2 top-[-1.8rem] px-1 rounded-lg "
            >
              Name on Card
            </span>
          </label>
        </div>
        <div>
          <label className="relative">
            <input
              type="number"
              placeholder="1234 5678 9876 5432"
              className="h-[50px] w-full px-3 text-sm  border-black border rounded-sm border-opacity-30 outline-none focus:border-opacity-50   placeholder-opacity-50
              placeholder-black
               transition duration-200"
            />
            <span
              className=" bg-white text-black text-opacity-70
                      absolute left-2 top-[-1.8rem] px-1 rounded-lg "
            >
              Card Number
            </span>
          </label>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-y-7 gap-x-8 py-5 ">
        <div>
          <label className="relative">
            <input
              type="month"
              placeholder="MM"
              className="h-[50px] w-full px-3 text-xl  border-black border rounded-sm border-opacity-30 outline-none focus:border-opacity-50  placeholder-gray-700   transition duration-200"
            />
            <span
              className=" bg-white text-black text-opacity-70
                      absolute left-2 top-[-1.8rem] px-1 rounded-lg "
            >
              Expiry Month
            </span>
          </label>
        </div>
        <div>
          <label className="relative">
            <input
              type="number"
              placeholder="YY"
              className="h-[50px] text-xl  w-full px-3   border-black border rounded-sm border-opacity-30 outline-none focus:border-opacity-50  placeholder-gray-700  transition duration-200"
            />
            <span
              className=" bg-white text-black text-opacity-70
                      absolute left-2 top-[-1.8rem] px-1 rounded-lg "
            >
              Expiry Year
            </span>
          </label>
        </div>
        <div>
          <label className="relative">
            <input
              type="text"
              className="h-[50px] w-full px-3 text-2xl  border-black border rounded-sm border-opacity-30 outline-none focus:border-opacity-50  placehol  duration-200"
            />
            <span
              className=" bg-white text-black text-opacity-70
                      absolute left-2 top-[-1.8rem] px-1 rounded-lg "
            >
              CVV
            </span>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-start  h-10">
        <input
          type="radio"
          name="radio-4"
          className="radio radio-accent radio-sm"
        />
        <h4 className="font-bold text-xl  text-black text-opacity-90 ml-3">
          {" "}
          Paypel Pay
        </h4>
      </div>
      <div className="flex gap-2 items-center mt-3 pl-1">
        <input type="checkbox" className=" checkbox-xs " />
        <h3>
          I have read and accepted{" "}
          <Link to="#">
            <span className="text-[#009DA6] cursor-pointer">
              Terms & Conditions
            </span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default PaymentFrom;
