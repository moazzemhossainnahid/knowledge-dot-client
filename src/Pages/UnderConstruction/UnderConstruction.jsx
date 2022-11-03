import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTimer } from 'react-timer-hook';

const UnderConstruction = () => {
    function MyTimer({ expiryTimestamp }) {
        const {
          seconds,
          minutes,
          hours,
          days,
        } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
      
      
        return (
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '50px'}} className="flex flex-col justify-center">
              <p className="flex gap-3 justify-center"><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></p>
              <p style={{fontSize: '20px'}} className="flex gap-4 justify-center"><span>days</span>:<span>hours</span>:<span>minutes</span>:<span>seconds</span></p>
            </div>
          </div>
        );
      }
      
    const time = new Date();
    time.setSeconds(time.getSeconds() + 650000); // 10 minutes timer
    return (
        <div className='w-full h-screen text-center mx-auto flex justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-2'>
                <div className="w-full md:w-3/6">
                    <h3 style={{fontSize: '50px'}} className="text-primary text-7xl font-bold">Coming Soon...</h3>
                    <h5 className="text-2xl py-3">We're currently working hard on this page. <br />
                        We will get back soon</h5>
                    <div className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className='p-3 rounded-full text-white bg-blue-500' />
                        <h3 className="text-xl font-bold font-serif">help@knowledgedot.com</h3>
                    </div>
                    <div className="mt-5">
                        <MyTimer expiryTimestamp={time} />
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