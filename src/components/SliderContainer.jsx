import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import fanlar_data from "../data/fanlar_data";
import RigthIcon from "../assets/icon/RigthIcon";
import LeftIcon from "../assets/icon/LeftIcon";
import RigthVectorIcon from "../assets/icon/RigthVectorIcon";
import { useRef } from "react";
import { Link } from 'react-router-dom';


function SliderContainer(props) {
    
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1295,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 895,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
    return (
        <div>
            <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
            
    {
        fanlar_data.map((item) => (
            <div key={item.id} className=" bg-[#f2f2f2] mx-auto  text-start p-[27px] max-w-[410px] rounded-xl max-h-[450px] h-full transition duration-300 ease-in-out transform    m-1  hover:shadow-lg">
            
              <div className=" ">
                <img className="w-full h-[200px] mx-auto rounded-xl" src={item.img} alt={item.title} />
              </div>
              <div className="grid gap-[10px] py-[10px] px-[5px]">
              <p className="text-[28px]  font-normal text-start text-[#8C8C8C]">Kurs</p>
              <p className="text-[20px] font-normal text-center text-[#123E02] leading-[30px] ">{item.title}</p>
              <div className="flex justify-end ">

              <Link to="/">
              <span className="flex justify-end items-end text-end bg-[#335A50] py-[15.5px] px-[23px] rounded-full  "><RigthVectorIcon/></span>
              </Link>
              </div>
              </div>
            
          </div>
        ))
    }
      </Slider>
        <button className="button absolute top-[40%] left-0  " onClick={previous}>
          <LeftIcon/>
        </button>
        <button className="button absolute top-[40%] right-0" onClick={next}>
          <RigthIcon/>
        </button>
            
        </div>
    );
}

export default  SliderContainer