import React from "react";
import { useParams } from "react-router-dom";
import useCourses from "../../Apis/useCourses";
import CheckoutCourseDetails from "./CheckoutCourseDetails";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { id } = useParams();
  const { Courses } = useCourses();
  const course = Courses?.find((course) => course?._id === id);
  // console.log(course);
  return (
    <div>
      <div className="bg-slate-200 py-5 ">
        <h2 className="md:container sm:px-2 mx-auto text-3xl text-black font-bold font-mono">
          Checkout
        </h2>
      </div>
      <div className="md:container sm:px-2 mx-auto grid md:grid-cols-3 py-5 gap-5   ">
        <CheckoutForm course={course} />
        <CheckoutCourseDetails course={course} />
      </div>
    </div>
  );
};

export default Checkout;
