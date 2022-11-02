import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UnderConstruction = () => {
    return (
        <div className='w-full h-screen mx-auto flex justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-2'>
                <div className="w-full md:w-3/6">
                    <h3 className="text-primary text-5xl font-bold">Coming Soon...</h3>
                    <h5 className="text-2xl py-3">We're currently working hard on this page. <br />
                        We will get back soon</h5>
                    <div className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className='p-3 rounded-full text-white bg-blue-500' />
                        <h3 className="text-xl font-bold font-serif">help@knowledgedot.com</h3>
                    </div>
                </div>

                <div className="w-full md:w-3/6">
                    <img src="https://svgshare.com/i/npQ.svg" alt="" className="object-cover" />
                </div>
            </div>

        </div>
    );
};

export default UnderConstruction;