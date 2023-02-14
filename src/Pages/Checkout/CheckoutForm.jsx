import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ course }) => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  
  const handleChecked = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };



  const BookSuccess = (event) => {
    event.preventDefault();
    navigate(`/booking/${course?._id}`);
    console.log();
  };
  return (
    <div className="border  px-5 col-span-2  shadow-sm py-5">
      <h2 className="py-5 text-3xl text-black text-opacity-75">
        Personal Information
      </h2>
      <form onSubmit={BookSuccess}>
        <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-stretch  gap-5  ">
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Input"
                className="h-[50px]  w-full  px-6 text-2xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="firstName"
              />
              <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                First Name
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="text"
                placeholder="Input"
                className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="lastName"
              />
              <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                Last Name
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="email"
                placeholder="Input"
                className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="email"
              />
              <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                Email
              </span>
            </label>
          </div>
          <div>
            <label className="relative cursor-pointer">
              <input
                type="number"
                placeholder="Input"
                className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="phoneNumber"
              />
              <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                Phone
              </span>
            </label>
          </div>

        </div>
        <div className="pt-5">
            <label className="relative w-full cursor-pointer">
              <input
                type="text"
                placeholder="Input"
                className="h-[70px] w-full px-6 text-md border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                name="address"
              />
              <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                Address
              </span>
            </label>
          </div>
        {/* <div>
          <h3 className="py-4">
            Existing Customer?{" "}
            <NavLink to="/" className="text-[#009DA6] font-semibold font-sans">
              Click here to login
            </NavLink>{" "}
          </h3>
        </div> */}
        <div>
          <hr />
          {/* <div className="mt-5">
            <input
              type="radio"
              name="paymentOption"
              id=""
              className="radio radio-sm border-2 radio-success  "
              checked
            />
            <span className="text-2xl text-black font-bold text-opacity-95 ml-4">
              Credit Card
            </span>
          </div> */}
          {/* <div className="grid md:grid-cols-2 grid-cols-1 justify-items-stretch   gap-5 py-5">
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Input"
                  className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                  name="cardName"
                />
                <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                  Name on Card
                </span>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="1234 5678 9874 5612"
                  className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-400 transition duration-200"
                  naem="cardNumber"
                />
                <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                  Card Number
                </span>
              </label>
            </div>
          </div> */}
          {/* <div className="grid md:grid-cols-3 grid-cols-1 justify-items-stretch   gap-5 py-5">
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="MM"
                  className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-400 placeholder-opacity-80 transition duration-200"
                  naem="expiryMonth"
                />
                <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                  Expiry Month
                </span>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="YY"
                  className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-400 placeholder-opacity-90 transition duration-200"
                  naem="expiryYear"
                />
                <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                  Expiry Year
                </span>
              </label>
            </div>
            <div>
              <label className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Input"
                  className="h-[50px]  w-full   px-6 text-xl   border rounded-sm outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                  naem="cvvNumber"
                />
                <span className=" text-sm bg-white te text-opacity-80 absolute left-2 px-2 top-[-30px]  transition duration-200 input-text">
                  CVV
                </span>
              </label>
            </div>
          </div> */}
          {/* <div className="mt-5">
            <input
              type="radio"
              name="paymentOption"
              id=""
              className="radio radio-sm  border-2 radio-success "
            />
            <span className="text-2xl text-black font-bold text-opacity-95 ml-4">
              Paypal
            </span>
          </div> */}
          <div className="py-4">
            <input
              type="checkbox"
              onChange={handleChecked}
              name=""
              id=""
              className="checkbox checkbox-sm border-2 checkbox-success"
            />
            <span className="ml-2">
              I have read and accepted{" "}
              <a href="#!" className="text-[#009DA6] font-semibold font-sans">
                Terms & Conditions
              </a>
            </span>
          </div>
          <div>
            <input
              type="submit"
              disabled={!isChecked}
              className="btn text-white bg-[#009DA6] hover:bg-[#007bff]"
              value="Confirm and Pay"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
