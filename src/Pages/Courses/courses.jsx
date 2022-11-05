import React from 'react';
import { Outlet } from 'react-router-dom';
import { AllCoursesData } from '../../Components/Components-Nahid/Data/CoursesData';
import Sidebar from '../../Components/Components-Nahid/Sidebars/Sidebar';
import CoursesGrid from './CoursesGrid';

const Courses = () => {
    return (
        <div className="">
            <div className="py-5">
                <h3 className="text-4xl font-bold text-center py-4">User Interface Courses</h3>
                <p className="text-center text-xl">Building the Future</p>
            </div>
            <div className="">

                {/* <TourHeader /> */}
                <div className="bg-gray-100">
                    <div className="container mx-auto py-10">
                        <div className="grid grid-cols-1 relative lg:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
                            <div className="col-span-1">
                                <div className="sticky top-20">
                                    <aside>
                                        <div className="md:mb-3">
                                            <Sidebar/>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-span-3">
                                <Outlet />
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                    {AllCoursesData?.length &&  AllCoursesData.map((data, index) => <CoursesGrid course={data} key={index} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;