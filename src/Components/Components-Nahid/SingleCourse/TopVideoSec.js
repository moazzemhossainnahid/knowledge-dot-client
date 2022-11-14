import React from 'react';
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCertificate, faChartColumn, faClock, faInr, faLanguage, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';


const TopVideoSec = ({ course }) => {
    console.log(course);

    return (
        <div className='container'>

            <div className="">
                <h3 className="text-3xl md:text-5xl font-semibold text-left">{course?.name}</h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 w-full h-full p-5">
                <div className="w-full lg:w-4/6 mx-auto">
                    <div className="lg:h-[450px] h-48 md:h-96 w-full">
                        {course?.trailer_video ? (
                            <ReactPlayer
                                width={"100%"}
                                height={"100%"}
                                controls
                                light={true}
                                url={course?.trailer_video}
                                playing
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-300 rounded">
                                <img
                                    className="mx-auto lg:w-72 md:w-72 w-40"
                                    src="https://github.com/MShafiMS/admission/blob/gh-pages/output-onlinegiftools%20(1).gif?raw=true"
                                    alt="error"
                                />
                                <h1 className="text-xl font-bold flex justify-center items-center text-center">
                                    The module is not cooked yet!
                                </h1>
                            </div>
                        )}
                    </div>
                </div>
                <div className=" w-full lg:w-2/6 text-left p-5">
                    <div className="">
                        <h3 className="text-3xl md:text-4xl font-bold"><FontAwesomeIcon icon={faInr} />{course?.price.toLocaleString("en")} </h3>
                        <button className="border-orange-600 text-md border-2 px-7 py-2 rounded font-semibold bg-orange-600 text-white hover:bg-white hover:text-orange-600 my-5 duration-300">Enroll This Course</button>
                    </div>
                    <div className="py-5">
                        <h3 className="text-2xl font-semibold pb-3">This course include</h3>
                        <div className="text-left grid grid-cols-2 lg:grid-cols-1">

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faClock} /></span>
                                <p className="text-md font-semibold">Duration - 10 Weeks</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faChartColumn} /></span>
                                <p className="text-md font-semibold">Skill Level - Beginners</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faCalendarDays} /></span>
                                <p className="text-md font-semibold">Lectures - 10 Lessons</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faUsersBetweenLines} /></span>
                                <p className="text-md font-semibold">Enrolled - 25 Students</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faLanguage} /></span>
                                <p className="text-md font-semibold">Language - English</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faAccessibleIcon} /></span>
                                <p className="text-md font-semibold">Accessibility - Lifetime</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faCertificate} /></span>
                                <p className="text-md font-semibold">Certificate of Completion</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopVideoSec;