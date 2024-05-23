import { Link } from "react-router-dom";
import book_data from "../../data/book_data";

function Books() {
    return (
        <section className="map">
        <div className="container max-w-[1440px] mx-auto px-[20px] pt-[70px] ">
          <div className="flex gap-[185px] items-center table900:gap-[50px] mobile550:flex-col  mobile550:gap-[20px] mobile550:items-start">
            <h2 className="text-[#8D8484] font-normal  text-[24px] ">
              Kutubxona
            </h2>
  
            <div className=" ">
              <Link
                className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-300 hover:border-blue-400 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
                to="/"
              >
                Bosh saxifaga qaytish
              </Link>
            </div>
          </div>
          <div className="bg-white w-full  my-[50px] border pt-[50px] px-[50px] pb-[150px] ">
            <h2 className="text-center  text-[#8D8484] font-normal text-[24px] b table900:text-[32px]">
              Darsliklar
            </h2>
            <span className="block bg-blue-400 h-1 max-w-[1000px] mx-auto mt-[20px] mb-[50px]"></span>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[40px] ">
              {book_data.map((item) => (
                <div
                  className="mx-auto grid gap-[20px]  border border-blue-400 py-[8px] px-[28px] text-center rounded-md w-[250px] "
                  key={item.id}
                >
                  <div className="w-[100px] mx-auto ">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3 className=" text-[#8D8484] font-normal text-[24px] b table900:text-[20px] ">
                    {item.title}
                  </h3>
                  <Link className=" font-normal text-white text-[24px] b table900:text-[20px] bg-blue-500 px-[20px] py-[5px] rounded-lg ">
                    Yuklab olish
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Books;