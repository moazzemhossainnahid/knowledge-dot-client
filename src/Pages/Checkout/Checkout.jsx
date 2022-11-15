import React from "react";
import CheckoutCourseDetails from "./CheckoutCourseDetails";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  return (
    <div>
      <div className="bg-slate-200 py-5 ">
        <h2 className="md:container sm:px-2 mx-auto text-3xl text-black font-bold font-mono">
          Checkout
        </h2>
      </div>
      <div className="md:container sm:px-2 mx-auto grid md:grid-cols-3 py-5 gap-5  ">
        <CheckoutForm />
        <CheckoutCourseDetails />
      </div>
    </div>
  );
};

export default Checkout;
