import React from 'react';
import { SliderData } from '../../Data/SliderData';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const Banner = () => {
    return (
        <div className=''>
            <Slider autoplay='true' duration="5000" previousButton="" nextButton="">
                {
                    SliderData.map((data, idx) => {
                        return (
                            <div key={idx} className={` w-full h-full`}>
                                <img src={data?.img} alt="" className="h-full w-full relative" />
                                <div className="absolute bottom-10 left-5">
                                    <h3 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-6xl font-bold py-2 text-white">{data?.title}</h3>
                                    <p data-aos="fade-up" data-aos-duration="1700" className="text-white font-semibold py-2 text-xl">{data?.desc}</p>
                                    <button data-aos="fade-up" data-aos-duration="2000" className="px-5 py-2 rounded bg-rose-700 text-white font-semibold">Explore More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default Banner;