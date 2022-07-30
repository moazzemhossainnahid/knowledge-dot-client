import { faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const LeftSideMenu = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side bg-gray-700 px-5 w-72 h-screen">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <div className=" mx-auto pt-10">
                        <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/Logo-light.png" alt="" className="p-5 w-52" />
                    </div>
                    <div className="-mt-10">
                    <ul class="menu p-4 gap-2 overflow-y-auto bg-gray-700 text-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <div className="">
                            <SidebarItem />
                        </div>
                    </ul>
                    </div>
                    <div className="-mt-10">
                        <p className="text-base-100 hover:text-rose-500 py-5">Lorem ipsum dolor sit amet consectetuer</p>
                        <div className="flex justify-left items-center gap-3">
                            <FontAwesomeIcon className='w-4 h-4 text-gray-300' icon={faLinkedin} />
                            <FontAwesomeIcon className='w-4 h-4 text-gray-300' icon={faTwitter} />
                            <FontAwesomeIcon className='w-4 h-4 text-gray-300' icon={faGooglePlus} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LeftSideMenu;