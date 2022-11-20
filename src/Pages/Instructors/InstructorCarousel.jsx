import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";

const InstructorCarousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/testimonials-background-1.jpg)",
          height: "380px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SliderWrapper>
          <Slider {...settings}>
            <div class=" w-full flex flex-col justify-center ">
              <div className="p-10 rounden dark:text-slate-200 text-white">
                <div className="h-40 w-40 m-auto">
                  <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t6.png?" />
                </div>
                <div className="mb-10">
                  <h1 className="text-center text-xl font-bold">Anniy Page </h1>
                  <h2 className="text-center">Student</h2>
                  <p className="text-sm  my-4 text-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore edolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col justify-center ">
              <div className="p-10 rounden dark:text-slate-200 text-white">
                <div className="h-40 w-40 m-auto">
                  <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t5-150x150.png?" />
                </div>
                <div className="mb-10">
                  <h1 className="text-center text-xl font-bold">John Evan</h1>
                  <h2 className="text-center">Student</h2>
                  <p className="text-sm  my-4 text-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore edolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col justify-center ">
              <div className="p-10 rounden dark:text-slate-200 text-white">
                <div className="h-40 w-40 m-auto">
                  <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t4-150x150.png?" />
                </div>
                <div className="mb-10">
                  <h1 className="text-center text-xl font-bold">
                    Barbara Mori
                  </h1>
                  <h2 className="text-center">Student</h2>
                  <p className="text-sm  my-4 text-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore edolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </SliderWrapper>
      </div>
    </div>
  );
};

export default InstructorCarousel;
