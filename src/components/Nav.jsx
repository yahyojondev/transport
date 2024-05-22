import React from 'react';
import { Link } from 'react-router-dom';
import nav_data from '../data/nav_data';

function Nav({menu}) {
    return (
        <nav className={`absolute transition duration-700 ease-in-out transform ${menu? "h-[200px] hidden" : "h-100"} top-[90px] z-50 left-0  w-[193px] py-[10px] px-[15px] bg-white rounded-lg shadow-md`}>
            <ul className='grid gap-[10px]'>
                {
                    nav_data.map((item) =>(
                        <li key={item.id} className=' py-[6px] px-[16px] font-normal text-[13px] rounded-xl hover:bg-[#0057FF26]'>
                            <Link className='inline-block w-full' to={item.link}>{item.title}</Link>
                        </li>
                    ))
                }
              
            </ul>
            
        </nav>
    );
}

export default Nav;