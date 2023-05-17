"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./widgets/Button";

const Header = () => {
  const styleNav =
    "mr-5 hover:text-white hover:scale-125 transition duration-500";
  return (
    <div className="bg-orange-300 flex justify-between mx-32">
      <div>
        <Image src="/fonts/logo.jpg" width={242} height={250} />
      </div>
      <div className="flex  items-center   ">
        <ul className="mr-0 font-montserrat font-bold text-green-900 ">
          <Link className={styleNav} href="/thuc-don">
            Thực đơn
          </Link>
          <Link className={styleNav} href="/dat-ban">
            Đặt bàn
          </Link>
          <Link className={styleNav} href="/khuyen-mai">
            Khuyến mãi
          </Link>
          <Link className={styleNav} href="/gioi-thieu">
            giới Thiệu
          </Link>
          <Link className={styleNav} href="/tin-tuc">
            Tin tức
          </Link>
          <Link className={styleNav} href="/lien-he">
            Liên hệ
          </Link>
          <Link className={styleNav} href="/ship">
            Ship tận nhà
          </Link>
        </ul>

        <Button
          text="xem giá"
          style="button-violet w-[130px] h-[50px] hover:bg-green-800"
        />
      </div>
    </div>
  );
};

export default Header;
