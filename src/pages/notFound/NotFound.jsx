import { Link } from "react-router-dom";


function NotFound() {
    return (
        <section className=" text-center mx-auto container px-[20px] flex flex-col justify-center items-center gap-[20px] mt-[200px] ">
            <h3 className="text-blue-500 text-[40px] font-medium">404</h3>
            <p className="text-blue-900 text-[24px] font-medium">Sahifa topilmadi</p>
            <p className="text-blue-900 text-[20px] font-medium max-w-[600px]">Aka sahifa gaz zapravkaga ketibti😂, yokida abet qilyabti (bezovta qilmang😉)</p>
            <Link to="/" className="text-white text-[26px] font-medium inline-block py-[10px] px-[22px] rounded-lg bg-blue-600">Asosiy sahifaga qaytish</Link>
            
        </section>
    );
}

export default NotFound;