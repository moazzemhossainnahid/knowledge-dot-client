import React from 'react';
import { SliderData } from '../../Data/SliderData';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const Banner = () => {
    return (
        <div>
            <Slider>
            {
                SliderData.map((data, idx) => {
                    return (
                        <div key={idx} className={`w-full h-96`}>
                            <img src={data?.img} alt="" className="h-full w-full" />
                            
                        </div>
                    )
                })
            }
            </Slider>
        </div>
    );
};

export default Banner;