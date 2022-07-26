import React from 'react';

const Map = () => {
    return (
        <div style={{
            backgroundImage: "url(https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/repeat.png)"
        }} className=' bg-cover bg-no-repeat text-center py-10'>
            <div>
                <h5 className=' text-lg uppercase font-bold text-[#015ABD]'>MAPS & DIRECTIONS</h5>

                <div className='w-[50px] h-[2px] bg-[#015ABD] relative my-4 mx-auto'>
                    <div className='radiant bg-[#FFFFFF]'></div>
                </div>

                <h2 className=' text-4xl font-semibold my-4'>Find Our Location In Town</h2>
                <p className=' w-[420px] mx-auto'>Search for our exact location and office address through this exclusive map listing provided below.</p>
            </div>
        </div>
    );
};

export default Map;