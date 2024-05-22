
import React, { useState } from "react";
import Nav from "../components/Nav";
import MenuIcon from "../assets/icon/MenuIcon";


function Header() {
    const [menu, setMenu] = useState(true)
    const changeMenu = () =>{
        setMenu(!menu)
    }
    return (
        <header className=" py-[35px] relative z-10 shadow-lg">
            <div className="container  max-w-[1440px] mx-auto px-[20px]">
            <div className="inline-block">
            <p onClick={changeMenu} className="flex items-center gap-[20px] cursor-pointer font-normal text-[20px] text-[#0085FF]"><span><MenuIcon/></span>Menu</p>
            <Nav menu={menu}/>
            </div>
            </div>
        </header>
    );
}

export default Header;