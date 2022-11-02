import React from 'react';
import { SingleCSidebarData } from './Data.Nahid';

const TopVideoSec = () => {
    return (
        <div>
            <div className="">
                <h3 className="text-3xl md:text-5xl font-semibold text-left">Aromatherapy- Using Essential Oils</h3>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 w-full h-full p-5">
                <div className="w-full lg:w-4/6">
                    <img className='rounded-xl' src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/exercising-outdoors-7VSUZMN.jpg" alt="" />
                </div>
                <div className=" w-full lg:w-2/6 text-left p-5">
                    <div className="">
                        <h3 className="text-3xl md:text-4xl font-bold">$99.00</h3>
                        <button className="border-orange-600 text-md border-2 px-7 py-2 rounded font-semibold bg-orange-600 text-white hover:bg-white hover:text-orange-600 my-5 duration-300">Enroll This Course</button>
                    </div>
                    <div className="py-5">
                        <h3 className="text-xl font-semibold">This course include</h3>
                        <div className="text-left grid grid-cols-2 lg:grid-cols-1">
                            {
                                SingleCSidebarData.map((data, idx) => {
                                    return (
                                        <div className="flex justify-start items-center py-3">
                                            <span className="">{data?.icon}</span>
                                            <p className="text-md font-semibold">{data?.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopVideoSec;