import Footer from "@components/Footer";
import Header from "@components/Header";
import Hotline from "@components/Hotline";
import Nav from "@components/Nav";
import Shopcard from "@components/Shopcard";
import Subcription from "@components/Subcription";
import "@styles/styles.css";
import React from "react";

export const metadata = {
  title: "Bò tơ tây ninh",
  description: "BÒ TƠ TÂY NINH SÁU TÂM 68",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="relative">
        <div className="bg-orange-300">
          <Header />
        </div>
        <div className="bg-green-900">
          <Nav />
        </div>

        <div>{children}</div>
        <div className="bg-green-900">
          <Subcription />
        </div>
        <div className="fixed bottom-10 right-1 ">
          <Hotline />
        </div>
        <div className="fixed bottom-1/2 right-[-52px] ">
          <Shopcard />
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default layout;
