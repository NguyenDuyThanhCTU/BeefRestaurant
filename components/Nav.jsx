import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="h-[43px] py-[5px] bg-green-900 mx-36 text-white font-montserrat flex items-center font-normal ">
      <Link
        href="/trang-chu"
        className="text-[13px] hover:text-black hover:scale-x-110 transition duration-300"
      >
        {" "}
        Trang chủ
      </Link>
    </div>
  );
};

export default Nav;
