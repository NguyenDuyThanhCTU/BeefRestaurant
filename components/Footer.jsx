import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center py-[35px] bg-[#fdf1d8]">
        <div className="mx-8  text-green-main">
          <h3 className="font-iCielBCCubano w-[200px]">Hỗ trợ khách hàng</h3>
          <div className="font-montserrat text-[13px] mt-[30px]">
            <p className="mb-5">T2-CN: 10:00 - 22:00</p>
            <p>ĐẶT BÀN: 1900636882 </p>
            <p>CSKH: 082.814.2288</p>
          </div>
        </div>
        <div className="mx-8  text-green-main ">
          <div className="w-[200px]">
            <Link className="font-iCielBCCubano " href="/trang-chu">
              Về bò tơ quán mộc{" "}
            </Link>
          </div>
          <div className="flex text-[13px] mt-[30px] font-montserrat">
            <div className=" flex flex-col flex-1">
              <Link href="/gioi-thieu">Giới thiệu</Link>
              <Link href="/thuc-don">Thực đơn</Link>
              <Link href="/dat-ban">Đặt bàn</Link>
              <Link href="/tin-tuc">Tin tức</Link>
            </div>
            <div className="flex flex-col flex-1">
              <Link href="/lien-he">Liên hệ</Link>
              <Link href="/khuyen-mai">Khuyến mãi</Link>
              <Link href="/cau-hoi">Câu hỏi thường gặp</Link>
            </div>
          </div>
        </div>
        <div className="mx-8  text-green-main ">
          <h3 className="font-iCielBCCubano w-[200px]">Liên kết mạng xã hội</h3>
        </div>
      </div>
      <div className="flex justify-center text-[14px] font-poppins h-[40px] py-[5px] items-center bg-[#fcb040] color-[#222222] font-light">
        <p className="pr-2 ">©2022 All Rights reserved ADS Company</p>
        <p className="pl-2 border-l-[1px] border-black">
          Designed by Thanh Dev ADS Company
        </p>
      </div>
    </div>
  );
};

export default Footer;
