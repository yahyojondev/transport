import { Link } from "react-router-dom";
import account_data from "../../data/account_data";
import sashaka from "../../assets/img/sashaka.png";

function Account() {
  return (
    <section className="map">
      <div className="container max-w-[1440px] mx-auto  px-[20px] pt-[70px]">
        <div className="flex gap-[185px] items-center table900:gap-[50px] mobile550:flex-col  mobile550:gap-[20px] mobile550:items-start">
          <h2 className="text-[#8D8484] font-normal  text-[24px] ">
            Shaxsiy ma`lumot
          </h2>

          <div className=" flex items-center  mobile550:flex-col">
            <Link
              className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-300 hover:border-blue-400 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>
        </div>

        <div className="flex items-start pt-[50px]  gap-[100px] table1170:gap-[20px] mobile768:flex-col">
          <div className="img max-w-[268px] mobile768:max-w-[180px]">
            <img src={sashaka} alt="sashaka" />
          </div>

          <div className=" flex items-start justify-start gap-[150px] bg-white py-[18px] px-[24px] table1170:gap-[50px]">
            <div className="">
              <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                FIO
              </p>
              <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                Tug'ilgan kun
              </p>
              <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                Jinsi{" "}
              </p>
              <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                Manzil
              </p>
            </div>
            {account_data.map((item) => (
              <div className="" key={item.id}>
                <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                  {item.fullName}
                </p>
                <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                  {item.date}
                </p>
                <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                  {item.gender}
                </p>
                <p className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] b table900:text-[20px]">
                  {item.adress}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
