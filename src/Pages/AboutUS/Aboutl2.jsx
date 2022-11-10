import React from "react";

const Aboutl2 = () => {
  return (
    <div className="lg:container py-10">
      <div className="flex justify-center">
        <h1 className="text-4xl font-[Monaco] max-w-lg px-2 text-center font-bold text-black text-opacity-90">
          The leading global marketplace for learning and instruction
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 px-10">
        <div className="lg:flex">
          <div className="w-44 h-44 border-2 border-black bg-transparent cursor-pointer group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden   w-full h-full">
                <img
                  src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/student-friends-studying-together-UNCHR5E-768x513.jpg"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden rounded-lg w-full h-full bg-gray-100 overflow-hidden">
                <img
                  src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/creative-business-people-working-on-business-WGCU95A-768x512.jpg"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div>
            <h1>Personalized learning</h1>
            <p>
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutl2;
