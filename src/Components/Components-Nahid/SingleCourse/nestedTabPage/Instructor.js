import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Instructor = () => {
    return (
        <div className='container text-left w-full gap-5 flex flex-col md:flex-row'>
            <div className="w-full md:w-2/6">
                <div className="">
                    <img src="https://edusphere.radiantthemes.com/wp-content/uploads/learn-press-profile/1/e1c26e949b56bd80cb5c9ffdab901b4e.jpg" alt="" className="object-cover" />
                    <div className="py-5">
                        <h3 className="text-2xl font-semibold">Sophia Richards</h3>
                        <p className="py-5 text-xl text-gray-500">Professional Photographer</p>
                        <div className="">
                            <p className="">Mail ID : <span className="cursor-pinter text-blue-700">example@xyz.com</span></p>
                            <p className="">Web : <span className="cursor-pinter text-blue-700">imerntechbd.com</span></p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faPinterest} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/6">
                <div className="">
                    <h3 className="text-3xl font-bold pb-5">Sophia Richards</h3>
                    <hr />
                    <div className="py-7">
                        <h3 className="text-2xl font-bold pb-5">About Instructor</h3>
                        <p className="">Sophia is one of our highly experienced and talented in-house educational consultants that excel in all forms of career counselling as well as consultancy. She is a graduate in Mass Communications from UCLA, and also holds a degree in Statistics from MIT . Meeting her for the first time would instill a sense of faith, trust and bonding that is unparalleled. She perfectly understands your requirement by being in your shoes, and thereby tailoring an extensive educational package. Sophia is very well-informed in all aspects of career consultancy, thus can guide you through some of the best educational institutions in Europe and the Americas.</p>
                    </div>
                    <div className="flex items-center justify-between gap-10 w-full md:px-10">
                        <h3 className="text-2xl w-2/5 font-bold pb-5">Teacher Courses</h3>
                        <div className="w-3/5 bg-slate-300 border"></div>
                    </div>

                    <div className="flex flex-col justify-center py-10 md:flex-row gap-5">
                        <div class="card w-full group md:w-60 card-compact border bg-base-100 hover:shadow-xl duration-300">
                            <figure><img className='group-hover:scale-110 duration-300' src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Course-26-new.jpg" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title text-gray-400">Home one course</h2>
                                <p>Introduction To JavaScript For Beginners Students</p>
                                <div class="card-actions justify-end">
                                <div className="w-4/5 mx-auto bg-slate-300 border"></div>
                                    <span class="text-2xl font-bold">$55.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="card w-full group md:w-60 card-compact border bg-base-100 hover:shadow-xl duration-300">
                            <figure><img className='group-hover:scale-110 duration-300' src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Course-10-new.jpg" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title text-gray-400">Science</h2>
                                <p>Nvidia And UE4 Technologies Practice In University</p>
                                <div class="card-actions justify-end">
                                <div className="w-4/5 mx-auto bg-slate-300 border"></div>
                                    <span class="text-2xl font-bold">$45.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Instructor;