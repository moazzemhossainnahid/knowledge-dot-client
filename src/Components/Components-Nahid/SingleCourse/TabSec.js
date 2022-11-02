import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import { TabSecData } from './Data.Nahid';

const TabSec = () => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full lg:w-3/5 mx-auto navbar bg-base-300">
                    <div class="flex-none mx-auto block">
                        <ul class="menu gap-10 menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            {
                                TabSecData.map( (item, idx) => {
                                    return(
                                        <li className='rounded'><NavLink to={item?.link}>{item?.label}</NavLink></li>
                                    )
                                } )
                            }
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}

                <div className="py-10 container px-5">
                <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default TabSec;