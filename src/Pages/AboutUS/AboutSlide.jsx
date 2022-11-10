import React from "react";

const AboutSlide = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/testimonials-background-1.jpg)",
          height: "480px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="carousel w-full">
          <div
            id="item1"
            class="carousel-item w-full flex flex-col justify-center  "
          >
            <div className=" dark:text-slate-200 text-white">
              <div className="h-auto w-72 m-auto pb-5 ">
                <img
                  src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/creative-team-meet-at-a-table-in-an-office-one-PWP9HT6.jpg"
                  alt="t"
                  className="rounded-lg "
                />
              </div>
              <div>
                <p className="text-lg  my-4 text-center max-w-xl  mx-auto">
                  People who build their own home tend to be very courageous.
                  These people are curious about life. They're thinking about
                  what it means to live in a house, rather than just buying a
                  commodity.
                </p>
                <h1 className="text-center text-accent text-2xl font-bold">
                  Jessica Smith -Graphic design
                </h1>
              </div>
            </div>
          </div>
          <div
            id="item2"
            class="carousel-item w-full flex flex-col justify-center  "
          >
            <div className=" dark:text-slate-200 text-white">
              <div className="h-auto w-72 m-auto pb-5 ">
                <img
                  src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/exercising-outdoors-7VSUZMN.jpg"
                  alt="t"
                  className="rounded-lg "
                />
              </div>
              <div>
                <p className="text-lg  my-4 text-center max-w-xl  mx-auto">
                  Statement buttons cover-up tweaks patch pockets perennial
                  lapel collar flap chest pockets topline stitching cropped
                  jacket. Effortless comfortable full leather lining.
                </p>
                <h1 className="text-center text-accent text-2xl font-bold">
                  Brie Larsson - Software Engineer
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2 mt-[446px]">
          <a href="#item1" class="btn btn-circle bg-white h-[50]"></a>
          <a href="#item2" class="btn btn-circle bg-white"></a>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
