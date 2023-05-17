import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
const Hotline = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[50px] h-[50px] bg-orange-700 flex justify-center items-center rounded-3xl call-animation">
        <BsFillTelephoneFill className="w-[30px] h-[30px] text-white " />
      </div>
      <div className="w-[50px] h-[50px] bg-green-700 flex justify-center items-center rounded-3xl spin-animation">
        <ImLocation2 className="w-[30px] h-[30px] text-white" />
      </div>
      <div className="w-[50px] h-[50px] bg-red-700 flex justify-center items-center rounded-3xl spin-animation">
        <AiFillYoutube className="w-[30px] h-[30px] text-white" />
      </div>
      <div className="w-[50px] h-[50px] bg-blue-600 flex justify-center items-center rounded-3xl spin-animation ">
        <SiZalo className="w-[30px] h-[30px] text-white" />
      </div>
    </div>
  );
};

export default Hotline;
