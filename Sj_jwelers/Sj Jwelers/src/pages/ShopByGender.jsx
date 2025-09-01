import React from "react";
import img1 from "../assets/img1.jpg";

export default function ShopByGender(){
    return(
        <>
        <p className="playfair-display-custom text-center text-5xl text-[#832729]">Shop By Gender</p>
            <p className="playfair-display-custom text-center text-xl text-[#832729] pt-3">Browse through your favorite categories. We've got them all!</p>
            <hr className="hr-with-svg text-[#832729] mt-2" />
        <div className="gap-3 md:grid grid-cols-3 p-10">

           <div className="md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[400px] ronded hover:scale-105 hover:zIndex-5 duration-[400]">
                    <div className="grid grid-rows-10">
                        <div className="row-span-7">
                            <img src={img1} alt="" className="w-full" />
                        </div>
                        <div className="col-span-7">
                            <p className="mt-1">Gents</p>
                            <p className="text-[14px]">Available certificates of authenticity </p>
                        </div>
                    </div>
                </div> 


                <div className="md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[400px] ronded hover:scale-105 hover:zIndex-5 duration-[400]">
                    <div className="grid grid-rows-10">
                        <div className="row-span-7">
                            <img src={img1} alt="" className="w-full" />
                        </div>
                        <div className="col-span-7">
                            <p className="mt-1">Ladies</p>
                            <p className="text-[14px]">Available certificates of authenticity </p>
                        </div>
                    </div>
                </div> 


                <div className="md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[400px] ronded hover:scale-105 hover:zIndex-5 duration-[400]">
                    <div className="grid grid-rows-10">
                        <div className="row-span-7">
                            <img src={img1} alt="" className="w-full" />
                        </div>
                        <div className="col-span-7">
                            <p className="mt-1">Childs</p>
                            <p className="text-[14px]">Available certificates of authenticity </p>
                        </div>
                    </div>
                </div> 
           
        </div>
        </>
    );
}