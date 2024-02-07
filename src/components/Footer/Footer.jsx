import React, { useContext, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import footerLogo from "../../../public/food-logo.png";
import FooterPart from "./FooterPart";
import { InfoContext } from "../../store/Data";

const Footer = () => {
  const { FooterContent } = useContext(InfoContext);
  return (
    <div className="bg-gray-100 dark:bg-gray-950" id="footer">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3   py-5">
          <div className=" py-8 px-4 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              FOODIE
            </h1>
            <p className="text-justify max-md:w-[70%]">
            {FooterContent}
            </p>

            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Rajkot,Gujarat</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 place-items-center max-md:hidden ">
            <FooterPart/>
            <FooterPart/>
            <FooterPart/>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @2024 All rights reserved || Made with ❤️ by Shivam
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;