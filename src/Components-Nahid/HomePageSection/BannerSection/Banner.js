import React from 'react';
import { BannnerCardData, SliderData } from '../../Data/SliderData';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const Banner = () => {
    return (
        <div className=''>
            <div className="z-0">
            <Slider autoplay='true' duration="5000" previousButton="" nextButton="">
                {
                    SliderData.map((data, idx) => {
                        return (
                            <div key={idx} className={` w-full h-full`}>
                                <img src={data?.img} alt="" className="h-full w-full relative" />
                                <div className="absolute top-16 left-7">
                                    <h3 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-6xl font-bold py-2 text-white">{data?.title}</h3>
                                    <p data-aos="fade-up" data-aos-duration="1700" className="text-white font-semibold py-2 text-xl">{data?.desc}</p>
                                    <button data-aos="fade-up" data-aos-duration="2000" className="px-5 py-2 rounded bg-rose-700 text-white font-semibold">Explore More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className=" w-5/6 mx-auto relative -mt-10 z-50 p-2 grid grid-cols-1 lg:grid-cols-3 gap-5 bg-base-100 rounded-md shadow-lg">
                {
                    BannnerCardData.map((data, idx) => {
                        return (
                            <div className="flex w-full mx-auto justify-center items-center gap-3">
                                <div className="w-1/6">
                                    <img className='w-10 h-10' src={data?.icon} alt="" />
                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-2xl font-bold text-left">{data?.title}</h3>
                                    <p className="font-semibold text-md">{data?.desc}</p>                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>

        </div>
    );
};

export default Banner;