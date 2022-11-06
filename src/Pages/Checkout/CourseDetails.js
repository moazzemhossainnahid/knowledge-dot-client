import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const CourseDetails = () => {
  const showDate = new Date();
  const date = showDate.toDateString();
  const time = showDate.getHours() + ":" + showDate.getMinutes();
  const cousreTotalExpense = {
    consaltingFee: 100,
    bookingFee: 10,
    videoCallFee: 60,
  };
  const totalFee =
    cousreTotalExpense.consaltingFee +
    cousreTotalExpense.bookingFee +
    cousreTotalExpense.videoCallFee;
  return (
    <div className="border top-0 sticky bg-white rounded w-full h-auto ">
      <div className="border-b py-3 pl-5">
        <h2 className="text-xl text-opacity-70">Booking Summary</h2>
      </div>
      <div className="p-5">
        <div className="h-80">
          <div className="flex justify-start items-center gap-x-5">
            <div className="w-20">
              <img
                className="rounded"
                src="https://mentoring-react.dreamguystech.com/template-1/f91b1059aaad2d00d608a93abce78897.jpg"
                alt="mentor"
              />
            </div>
            <div>
              <p className="text-xl text-[#1890ff]">Darren Elder</p>
              <div className="flex  items-center gap-x-1">
                <BsStarFill className="text-[#febe42] text-xl" />
                <BsStarFill className="text-[#febe42] text-xl" />
                <BsStarFill className="text-[#febe42] text-xl" />
                <BsStarFill className="text-[#febe42] text-xl" />
                <BsStar className="text-xl" />
                <p className="text-black text-lg">35</p>
              </div>
              <p className="flex items-center">
                {" "}
                <span>
                  <ImLocation />
                </span>{" "}
                Dhaka , Bangladesh
              </p>
            </div>
          </div>
          <div className="my-5">
            <div>
              <table className="table-auto w-full text-lg">
                <tbody>
                  <tr className="py-1">
                    <td>Date</td>
                    <td className="text-right">{date}</td>
                  </tr>
                  <tr className="py-1">
                    <td>Time</td>
                    <td className="text-right">{time}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table- w-full text-lg">
                <tbody>
                  <tr className=" p-10">
                    <td>Consulting Fee</td>
                    <td className="text-right">
                      $ {cousreTotalExpense.consaltingFee}
                    </td>
                  </tr>
                  <tr className="py-1">
                    <td>Booking Fee</td>
                    <td className="text-right">
                      $ {cousreTotalExpense.bookingFee}
                    </td>
                  </tr>
                  <tr className="my-1 border-b ">
                    <td>Video Call </td>
                    <td className="text-right">
                      $ {cousreTotalExpense.videoCallFee}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between pl-5 mt-4">
                <h3 className="text-xl font-bold text-black">Total</h3>
                <span className="font-bold text-xl text-black text-opacity-90">
                  $ {totalFee}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
