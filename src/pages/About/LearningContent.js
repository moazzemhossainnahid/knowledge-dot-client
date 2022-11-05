import React from 'react'
import learn from '../../images/learn.jpg'
import learn2 from '../../images/learn2.jpg'
import first from '../../images/first-1.png'

const LearningContent = () => {
    return (
        <div className='w-full my-16'>
            <div className='max-w-[1240px] m-auto'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold'>The leading global marketplace <br />
                        for learning and instruction</h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 my-14 md:mx-4 sm:mx-4 gap-y-14 '>
                        <div className='flex items-center justify-around sm:flex-col md:flex-row gap-4 lg:gap-0'>
                            <div className='' >
                                <img className='w-[486px] md:w-[500px] h-[150px] rounded-md ' src={learn2} alt="" />
                            </div>

                            <div className='flex flex-col mx-7'>
                                <h2 className='my-2 text-xl font-bold text-start'>Personalized learning</h2>
                                <p className='text-start my-2 mt-4'>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-around sm:flex-col md:flex-row gap-4 lg:gap-0'>
                            <div>
                                <img className='w-[486px] md:w-[500px] h-[150px] rounded-md ' src={learn} alt="" />
                            </div>
                            <div className='flex flex-col mx-7'>
                                <h2 className='my-2 text-xl font-bold text-start'>Personalized learning</h2>
                                <p className='text-start my-2'>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-around sm:flex-col md:flex-row gap-4 lg:gap-0'>
                            <div>
                                <img className='w-[486px] md:w-[500px] h-[150px] rounded-md ' src={learn} alt="" />
                            </div>
                            <div className='flex flex-col mx-7'>
                                <h2 className='my-2 text-xl font-bold text-start'>Personalized learning</h2>
                                <p className='text-start'>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-around sm:flex-col md:flex-row gap-4 lg:gap-0'>
                            <div className=''>
                                <img className='w-[486px] md:w-[500px] h-[150px] rounded-md ' src={learn} alt="" />
                            </div>
                            <div className='flex flex-col mx-7'>
                                <h2 className='my-2 text-xl font-bold text-start'>Put your learning into practice</h2>
                                <p className='text-start'>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider w-full  md:w-5/6 m-auto opacity-30'>
            </div>
        </div>

    )
}

export default LearningContent;