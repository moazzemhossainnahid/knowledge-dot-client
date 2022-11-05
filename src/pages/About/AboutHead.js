import React from 'react'
import learn from '../../images/learning_img.jpg'
const AboutHead = () => {
    return (
        <div className='max-w-full mx-auto'>
            <div className='max-h-[600px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[700px] bg-black/5 flex flex-col justify-center'>
                    <div className=' flex flex-col items-start w-full md:flex lg:mx-28 lg:w-4/12 mx-4 py-36'>
                        <p className='text-base uppercase font-semibold text-white'>about us</p>
                        <h1 className='py-3 text-3xl  md:text-5xl semi-bold text-white '>Improving  Lives Through Learning</h1>
                    </div>
                </div>
                <img className='w-full max-h-[600px] object-cover' src={learn} alt="/" />
            </div>
        </div>
    )
}

export default AboutHead