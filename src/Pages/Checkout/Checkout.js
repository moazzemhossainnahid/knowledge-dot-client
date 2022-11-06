import React from "react";
import { Link } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import PaymentFrom from "./PaymentFrom";

const Checkout = () => {
  const payment = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="bg-slate-200 py-7 ">
        <h1 className="container mx-auto text-4xl font-bold"> Checkout</h1>
      </div>
      <div className=" mx-auto bg-gray-100 p-5">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
          <div className="col-span-2 bg-white rounded-sm">
            <form className="p-6" onSubmit={payment}>
              <div className="pb-4">
                <div>
                  <h2 className="mb-2  text-xl">Personal Information</h2>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-7 gap-x-8 py-7 ">
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
                          First Name
                        </span>
                      </label>
                    </div>
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
                          Last Name
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="relative">
                        <input
                          type="email"
                          className="h-[50px] w-full px-3 text-2xl  border-black border rounded-sm border-opacity-30 outline-none focus:border-opacity-50  placeholder-gray-300  transition duration-200"
                        />
                        <span
                          className=" bg-white text-black text-opacity-70
                      absolute left-2 top-[-1.8rem] px-1 rounded-lg "
                        >
                          Email
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="relative">
                        <input
                          type="number"
                          className="h-[50px] w-full px-3 text-2xl  border-black border rounded-sm border-opacity-30 outline-none focus:border-opacity-50  placeholder-gray-300  transition duration-200"
                        />
                        <span
                          className=" bg-white text-black text-opacity-70
                      absolute left-2 top-[-1.8rem] px-1 rounded-lg "
                        >
                          Phone
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <h4 className=" mt-[-10px]">
                  Existing Customer ?
                  <Link
                    to="#"
                    className="ml-1 font-semibold cursor-pointer text-[#009DA6]"
                  >
                    Click here to login
                  </Link>
                </h4>
              </div>
              <div className="divider"></div>
              <div>
                <PaymentFrom />
              </div>
              <div>
                <input
                  className="btn mt-6 text-xl px-8 text-white bg-[#009DA6] border-[#009DA6] hover:bg-[#007bff] hover:border-[#007bff] uppercase"
                  type="submit"
                  value="Confirm Pay"
                />
              </div>
            </form>
          </div>
          <div className="col-span-1 relative bg-gray-100 rounded-sm">
            <CourseDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
