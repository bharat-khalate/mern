import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export default function Footer(){
    return(
        <>
            <div className="bg-[#000000] md:grid playfair-display-custom  mt-10">
                <div className="md:col-span-1">
                    <p className="text-[#ffffff]  text-center text-2xl ">© Sj_Jwelers. All rightsReserved</p>
                    <div className="flex justify-center mt-5 mb-5 ">
                        <FaInstagram className="text-[30px] text-[#ffffff] hover:scale-105 " />&nbsp;&nbsp;
                        <LiaFacebookSquare className="text-[30px] text-[#ffffff] hover:scale-105"  ></LiaFacebookSquare>&nbsp;&nbsp;
                        <FaXTwitter className="text-[30px] text-[#ffffff] hover:scale-105" />
                    </div>
                </div>

                <div className="md:col-span-1">
                    <p className="text-[#ffffff] text-center ">Contact</p>
                    <div className="flex justify-center  mt-5  ">
                        <CiLocationOn className="text-[0px] md:text-[30px] text-[#ffffff] hover:scale-105 justify-self-auto "/> <p className="text-[#ffffff] text-[13px] md:text-xl">Pandharpur,Solapur</p>&nbsp;&nbsp;<p className="text-[#ffffff]">|</p>&nbsp;&nbsp;
                        <AiOutlineMail className="text-[0px] md:text-[30px] text-[#ffffff] hover:scale-105"  ></AiOutlineMail><p className="text-[#ffffff] text-[13px] md:text-xl">bharatkhalate50@gmail.com</p>&nbsp;&nbsp;<p className="text-[#ffffff]">|</p>&nbsp;&nbsp;
                        <MdOutlineSmartphone className="text-[0px] md:text-[30px] text-[#ffffff] hover:scale-105" /><p className="text-[#ffffff] text-[13px] md:text-xl">+918010269748</p>
                    </div>
                </div>
            <br></br>
            
            </div>
        
        </>
    );
}