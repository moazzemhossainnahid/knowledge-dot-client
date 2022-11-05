import React from 'react'
import learning from '../../images/learning.jpg'

const AboutHero = () => {
    return (
        <div className='w-full'>
           <div className='w-full bg-gray-500 absolute'>
              <img className='mix-blend-overlay h-[500px] object-cover
              ' src={learning} alt="/" />
            </div>
          <div className='grid grid-col-2 sm:justify-center max-w-[1240px] my-auto relative'>
            <div className=' flex flex-col items-start w-full md:flex lg:w-8/12 mx-4 py-36'>
              <p className='text-base uppercase font-semibold text-white'>about us</p>
              <h1 className='py-3 text-3xl md:text-5xl font-bold text-white'>Improving  Lives Through Learning</h1>
            </div>
          </div>
        </div>
      );
    };

export default AboutHero;