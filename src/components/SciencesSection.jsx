import React from "react";
// import brend1 from "../assets/img/metroLogo.png"


import { Link } from "react-router-dom";
import SliderContainer from "./SliderContainer";
import brend_data from "../data/brend_data";

function SciencesSection() {

  
  return (
    <div className="container max-w-[1440px]   mx-auto px-[20px]">
            <h2 className="text-[22px] font-normal text-start py-[45px] text-[#123E02] leading-[30px] " >Фанлар</h2>

        <div className="slider-container relative text-center  gap-[10px]">

        <SliderContainer/>
      </div>
      <div className="my-[175px] text-center mobil670:my-[40px]">
        <Link className="py-[13px] px-[21px] text-[#335A50] underline border border-solid rounded-lg border-[#335A50] transition duration-300 ease-in-out transform hover:bg-[#335A50] hover:text-white hover:border-white">
        Просмотреть все модули
        </Link>
      </div>

    <div className="flex justify-between items-center gap-[20px] py-[50px]  tablemin:grid tablemin:grid-cols-2 ">

    {
        brend_data.map((item) => (
            <div className="" key={item.id}>
                <img className="mx-auto" src={item.img} alt="img" />
            </div>
        ))
    }
    </div>
    </div>
  );
}

export default SciencesSection;
