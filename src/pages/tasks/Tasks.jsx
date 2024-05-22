import React from "react";
import DownloadIcon from "../../assets/icon/DownloadIcon";
import task_data from "../../data/task_data";
import { Link } from "react-router-dom/dist";

function Tasks() {
  return (
    <section className="map">
      <div className="container max-w-[1440px] mx-auto  px-[20px]   ">
        <div className="flex justify-start items-center gap-[20px] py-[40px] mobile530:flex-col mobile530:items-start ">
          <div className=" ">
            <Link
              className="px-[5px] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 text-[#8D8484] hover:text-white  hover:bg-blue-300 hover:border-blue-400 active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>

          <div className=" ">
            <Link
              className="px-[5px] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 text-[#8D8484] hover:text-white  hover:bg-blue-300 hover:border-blue-400 active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Ortga qaytish
            </Link>
          </div>
        </div>

        <div className="p-[17px] bg-white ">
          <table className="min-w-full  border  border-gray-200">
            <thead>
              <tr className=" ">
                <th className="px-[18px]  text-[#8D8484] text-start w-[250px] py-[15px] font-normal text-[24px]   table900:text-[22px] mobile530:w-[40%]">
                  O'quvchi
                </th>
                <th className="px-[18px] text-[#8D8484] max-w-[250px] py-[15px] font-normal text-[24px]   table900:text-[22px] text-start mobile530:w-[30px] ">
                  Vazifa
                </th>
                <th className="px-[18px] py-[15px] font-normal text-[24px]   table900:text-[22px] text-start "></th>
              </tr>
            </thead>
            <tbody className="">
              {task_data.map((item) => (
                <tr key={item.id} className="border  border-gray-200">
                  <td className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px]   table900:text-[20px]">
                    {item.name}
                  </td>
                  <td className="px-[18px]  flex justify-evenly  bg-[#C9EDFF]  items-center  my-[15px] rounded-lg py-[5px] font-normal text-[#8D8484] text-[24px]   table900:text-[20px]">
                    {" "}
                    <span className="mobile530:w-[20px]">
                      <DownloadIcon />
                    </span>{" "}
                    <p className="mobil2:hidden">{item.task}</p>
                  </td>

                  <td className="text-center  ">
                    <img
                      className="inline-block py-[7px] px-[25px] border border-[#059BE5] rounded-[5px] mobile530:w-[40px]  mobile550:px-[10px]"
                      src={item.check}
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Tasks;
