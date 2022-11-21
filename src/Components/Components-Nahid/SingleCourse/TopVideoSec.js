import React from 'react';
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCertificate, faChartColumn, faClock, faHeadphonesAlt, faInr, faLanguage, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const TopVideoSec = ({ course }) => {
    // console.log(course); 
    // console.log(course?.files.length);
    const navigate = useNavigate();

    return (
        <div className='container w-full'>
            <h3 className="text-xl md:text-3xl lg:text-5xl font-semibold text-left">{course?.name}</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 w-full h-full p-5">
                <div className="w-full lg:w-4/6 mx-auto">
                    <div className="lg:h-[450px] h-56 md:h-96 w-full rounded-xl">
                        {course?.introvdo ? (
                            <ReactPlayer
                                width={"100%"}
                                height={"100%"}
                                controls
                                light={true}
                                url={course?.introvdo}
                                playing
                                config={{
                                    youtube: {
                                        playerVars: {
                                            showinfo: 0,
                                            fs: 0,
                                        },
                                        modestbranding: 1,
                                        preload: true,
                                        rel: 0
                                    },
                                }}
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-300 rounded">
                                <img
                                    className="mx-auto lg:w-72 md:w-72 w-40"
                                    src="https://github.com/MShafiMS/admission/blob/gh-pages/output-onlinegiftools%20(1).gif?raw=true"
                                    alt="error"
                                />
                                <h1 className="text-xl font-bold flex justify-center items-center text-center">
                                    The Module is not Cooked Yet!
                                </h1>
                            </div>
                        )}
                    </div>
                </div>
                <div className=" w-full lg:w-2/6 text-left p-5">
                    <div className="w-full">
                        <h3 className="text-3xl md:text-4xl font-bold"><FontAwesomeIcon icon={faInr} />{course?.price.toLocaleString("en")} </h3>
                        <button onClick={() => navigate(`/checkout/${course?._id}`)} className="border-orange-600 w-full text-sm border-2 px-7 mx-auto py-2 rounded font-semibold bg-orange-600 text-white hover:bg-white hover:text-orange-600 my-5 duration-300">Enroll This Course</button>
                    </div>
                    <div className="py-5">
                        <h3 className="text-2xl font-semibold pb-3">This course include</h3>
                        <div className="text-left grid grid-cols-1">

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faClock} /></span>
                                <p className="text-md font-semibold">Duration - {course?.duration} Weeks</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faChartColumn} /></span>
                                <p className="text-md font-semibold">Skill Level - {course?.level}</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faCalendarDays} /></span>
                                <p className="text-md font-semibold">Lectures - {course?.files?.length} Lessons</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faUsersBetweenLines} /></span>
                                <p className="text-md font-semibold">Enrolled - 25 Students</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faLanguage} /></span>
                                <p className="text-md font-semibold">Language - {course?.language}</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faAccessibleIcon} /></span>
                                <p className="text-md font-semibold">Accessibility - {course?.accessibility}</p>
                            </div>

                            <div className="flex justify-start items-center py-3">
                                <span className="pr-2"><FontAwesomeIcon icon={faHeadphonesAlt} /></span>
                                <p className="text-md font-semibold">Mentor Support</p>
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