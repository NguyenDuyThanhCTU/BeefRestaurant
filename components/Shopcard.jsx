"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Shopcard = () => {
  const Click1 = "-translate-y-0";
  const Clicked2 = "-translate-y-60";
  const Click3 = " -translate-x-[52px] ";
  const Clicked4 = " translate-x-48";
  const [Click, setClick] = useState(false);
  return (
    <>
      <div className="transform90 absolute top-[52px] -right-1 z-10">
        <div
          className={`bg-[#fdf1d8] py-[7px] px-[10px] rounded-t-md transform  ${
            Click ? Clicked2 : Click1
          }  transition duration-300`}
          onClick={() => setClick(!Click)}
        >
          <h3 className="uppercase font-iCielBCCubano text-green-900 inline-block">
            {Click ? (
              <IoIosArrowDown
                className="text-green-900 mr-2
             inline-block"
              />
            ) : (
              <IoIosArrowUp
                className="text-green-900 mr-2 
             inline-block"
              />
            )}
            Món đã chọn
          </h3>
        </div>
      </div>

      <div
        className={`bg-[#fdf1d8] w-60 h-60 transform  ${
          Click ? Click3 : Clicked4
        }
       
          transition duration-300`}
      >
        <h3 className="uppercase font-iCielBCCubano bg-green-900  text-white text-center py-[10px]">
          Thực đơn bạn đã chọn
        </h3>
        <div className="border-t-4 h-2 w-full border-solid border-green-900 mt-1"></div>
      </div>
    </>
  );
};

export default Shopcard;
