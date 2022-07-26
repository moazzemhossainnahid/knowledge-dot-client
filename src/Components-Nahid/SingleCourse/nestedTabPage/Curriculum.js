import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLock } from '@fortawesome/free-solid-svg-icons';

const Curriculum = () => {
    return (
        <div className='text-left'>
            <div className="">
                <h3 className="text-2xl lg:text-3xl font-bold py-7">Section 1</h3>
                <div className="flex items-center justify-between bg-slate-100 py-3 px-3">
                    <div className="flex items-center justify-center gap-3">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="">Quiz 1</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="bg-[#015abd] text-white px-5 py-2">15 Questions</button>
                        <button className="bg-[#cccccc] px-5 py-2">10 Min</button>
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                </div>
            </div>
            <div className="">
                <h3 className="text-2xl lg:text-3xl font-bold py-7">Section 2</h3>
                <div className="flex items-center justify-between bg-slate-100 py-3 px-3">
                    <div className="flex items-center justify-center gap-3">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="">Quiz 2</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="bg-[#015abd] text-white px-5 py-2">14 Questions</button>
                        <button className="bg-[#cccccc] px-5 py-2">10 Min</button>
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                </div>
            </div>
            <div className="">
                <h3 className="text-2xl lg:text-3xl font-bold py-7">Section 3</h3>
                <div className="flex items-center justify-between bg-slate-100 py-3 px-3">
                    <div className="flex items-center justify-center gap-3">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="">Quiz 3</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="bg-[#015abd] text-white px-5 py-2">14 Questions</button>
                        <button className="bg-[#cccccc] px-5 py-2">30 Min</button>
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Curriculum;