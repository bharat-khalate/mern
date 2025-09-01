import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsTransparency } from "react-icons/bs";


export default function Card(){
    return(
        <div className=" pb-5 mt-3 md:mt-16 bg-white playfair-display-custom text-[#832729] grid grid-rows-1">
            <div className=" p-16 md:p-0 md:grid grid-cols-4 md: max-w-[1224px] mx-auto  md:gap-10">

                <div className="md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[90px]  rounded hover:scale-105 hover:zIndex-5 duration-[400]">
                    <div className="grid grid-cols-10">
                        <div className="col-span-3 text-[40px] mt-4"><AiOutlineHeart/></div>
                        <div className="col-span-7">
                            <p className="mt-1">Certified</p>
                            <p className="text-[14px]">Available certificates of authenticity </p>
                        </div>
                    </div>
                </div>

                <div className="mt-3 md:mt-0  md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[90px]  rounded hover:scale-105 hover:zIndex-5 duration-[400]">
                    <div className="grid grid-cols-10">
                        <div className="col-span-3 text-[40px] mt-4"><MdOutlineLock /></div>
                        <div className="col-span-7">
                            <p className="mt-1">Secure</p>
                            <p className="text-[14px]">Certified market place since 2002 </p>
                        </div>
                    </div>
                </div>

                <div className="mt-3 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[90px]  rounded hover:scale-105 hover:zIndex-5 duration-[400]">
                    <div className="grid grid-cols-10">
                        <div className="col-span-3 text-[40px] mt-4"><LiaShippingFastSolid /></div>
                        <div className="col-span-7">
                            <p className="mt-1">Shipping</p>
                            <p className="text-[14px]">Free, fast and reliable worldwide </p>
                        </div>
                    </div>
                </div>

                <div className="mt-3 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[90px]  rounded hover:scale-105 hover:zIndex-5 duration-[400]">
                    <div className="grid grid-cols-10">
                        <div className="col-span-3 text-[40px] mt-4"><BsTransparency/></div>
                        <div className="col-span-7">
                            <p className="mt-1">Transperent</p>
                            <p className="text-[14px]">Hassle free purchase</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}