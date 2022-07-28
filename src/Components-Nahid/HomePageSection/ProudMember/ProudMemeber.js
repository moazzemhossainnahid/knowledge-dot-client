import React from 'react';
import { ProudMemberData } from '../../Data/ProudMemberData';

const ProudMemeber = () => {
    return (
        <div className=''>
            <h3 className="text-2xl md:text-3xl py-5 pt-10 text-center font-bold">We proud of this Numbers</h3>
            <div className='w-[70px] mx-auto h-[3px] bg-[#1584f3] mb-10 relative '>
                <div className='radiant bg-[#FFFFFF]'></div>
            </div>
            <div className="w-full h-96 grid grid-cols-2 lg:grid-cols-4 mx-auto">
                {
                    ProudMemberData.map((data, idx) => {
                        return(
                            <div key={idx} className="text-white text-center h-full w-full">
                                <div style={{backgroundImage: `url(${data?.img})`, width: '100%'}} className={`w-full p-5 h-full bg-cover`}>
                                <h3 className="text-2xl py-3">{data?.title}</h3>
                                <p className="py-3">{data?.desc}</p>
                                <button className="px-7 py-3 my-3 bg-transparent border rounded">Learn More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProudMemeber;