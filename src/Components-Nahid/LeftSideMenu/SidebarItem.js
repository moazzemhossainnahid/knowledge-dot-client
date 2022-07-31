import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseListDropdownData, HomeDropdownData, MainMenuData } from '../Data/LeftSideMenuData';

const SidebarItem = () => {
    const [open, setOpen] = useState(false);
    const [on, setON] = useState(false);
    return (
        <div>
            {
                MainMenuData.map((item, idx) => {

                    if (item.name === 'Home') {
                        return (
                            <div className="group hover:-pt-30 transition ease-in-out delay-150 duration-300">
                                <div onMouseEnter={() => setOpen(true)} onMouseOut={() => setOpen(false)} className="flex justify-between group items-center">
                                    <li className='transition-all' key={idx}><Link to={item?.href} ><FontAwesomeIcon className='text-rose-500 transition-all font-semibold hidden group-hover:block group-hover:duration-300' icon={faArrowRight} />{item.name}</Link></li>
                                    <FontAwesomeIcon className='text-white font-semibold transition-all' icon={open ? faAngleDown : faAngleRight} />
                                </div>                                {
                                    HomeDropdownData.map((item, idx) => {
                                        return (
                                            <div className="hidden group-hover:block pl-3 duration-300">
                                                <li className='transition ease-in-out delay-150 duration-300' key={idx}><Link to={item?.href} >{item.name}</Link></li>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }

                    if (item.name === 'Course List') {
                        return (
                            <div className="group transition-all duration-300">
                                <div onMouseEnter={() => setON(true)} onMouseOut={() => setON(false)} className="flex justify-between group items-center">
                                    <li className='transition-all' key={idx}><Link to={item?.href} ><FontAwesomeIcon className='text-rose-500 transition-all font-semibold hidden group-hover:block group-hover:duration-300' icon={faArrowRight} />{item.name}</Link></li>
                                    <FontAwesomeIcon className='text-white font-semibold transition-all' icon={on ? faAngleDown : faAngleRight} />
                                </div>
                                {
                                    CourseListDropdownData.map((item, idx) => {
                                        return (
                                            <div className="hidden group-hover:block pl-3 transition ease-in-out delay-150 duration-300">
                                                <li className='transition ease-in-out delay-150 duration-300' key={idx}><Link to={item?.href} >{item.name}</Link></li>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }


                    return (
                        <div className="group">
                            <li className='transition-all' key={idx}><Link to={item?.href} ><FontAwesomeIcon className='text-rose-500 transition-all font-semibold hidden group-hover:block group-hover:duration-300' icon={faArrowRight} />{item.name}</Link></li>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SidebarItem;