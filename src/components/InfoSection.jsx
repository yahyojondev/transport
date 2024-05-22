import React from 'react';
import infoImg1 from "../assets/img/Container.png"
import infoImg2 from "../assets/img/aboutImg.png"

function InfoSection(props) {
    return (
       <section  className=" h-full  py-[140px]  bg-[#f5f5f5] table1005:py-[30px]  ">
        <div className="container max-w-[1440px] mx-auto  px-[20px]  flex items-start justify-around table1005:flex-col-reverse ">
        <div className=" max-w-[400px] table1005:max-w-full  ">
           <p className='font-semibold text-[30px] text-[#335A50] mobil675:text-[24px]'>
           TRANSPORT SOHASIDA KADRLARNI QAYTA TAYYORLASH VA ULARNING MALAKASINI OSHIRISH HAMDA ILMIY VA INNOVATSION FAOLIYAT TIZIMINI TASHKIL ETISH CHORA-TADBIRLARI TO‘G‘RISIDA
           </p>
           <br />
           <p className='font-normal text-[16px] '>
           Mamlakatimizda transport va yo‘l xo‘jaligi sohasida xodimlarni tayyorlash, qayta tayyorlash, ularning malakasini oshirish tizimini tubdan isloh qilish maqsadida ilg‘or xorijiy tajribani qo‘llagan holda o‘quv jarayoniga yangi ta’lim uslublarini, zamonaviy axborot texnologiyalarini keng joriy etish borasida tizimli ishlar amalga oshirilmoqda.
           </p> <br />  
           <p className='font-normal text-[16px] '>
           Shu bilan birga, bugungi kunda transport sohasida ta’lim oluvchilarga keng imkoniyatlar va qulay sharoitlar yaratish, soha kadrlarining bilim va ko‘nikmalarini oshirish, shuningdek, kadrlarni qayta tayyorlash hamda ularning malakasini oshirish jarayonlarini ishlab chiqarish bilan uzviy bog‘liq holda amalga oshirish talab etilmoqda.
           </p>
        </div>
        <div className="max-w-[850px] mx-auto">
            <img  className="w-full h-auto  rounded-lg table1005:hidden"  src={infoImg1} alt="img" />
            <img  className=" hidden w-full mx-auto h-auto rounded-lg table1005:block"  src={infoImg2} alt="img" />
        </div>
        </div>

       </section>
    );
}

export default InfoSection;