import React from "react";
import Jw from "../assets/jw.jpg";
import Men from "../assets/men.jpeg";
import Child from "../assets/child.jpg";
import Girl from "../assets/img1.jpg"
export default function NewshopByGender(){
    return(
        <>
        <div className="playfair-display-custom">
        <p className="text-center text-5xl text-[#832729]">Shop For</p>
        <p className="text-center text-xl text-[#832729] pt-3">Browse through your favorite categories. We've got them all!</p>
        <hr className="hr-with-svg text-[#832729] mt-2" />

        <div className=" pb-5  md:mt-5 bg-white  text-[#832729]  grid grid-rows-1">
        <div className=" p-16 md:p-0 md:grid grid-cols-3 md:max-w-[1224px] mx-auto  md:gap-10">

        <div className="mt-3 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9]   h-[350px] max-w-72 rounded  ">
                <div className="grid grid-row-10 ">
                    <div className="row-span-9 rounded "><img src={Men} className="rounded h-72 w-full" alt="" /></div>
                    <div className="row-span-1">
                        <div className="mt-5 mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
                            <p></p>
                            <p></p>
                            <p>Jwelery For Men</p>
                            <p>&nbsp;&nbsp;&gt;</p>
                            <p></p>
                            <p></p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mt-1 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9]   h-[330px] max-w-72 rounded  ">
                <div className="grid grid-row-10 ">
                    <div className="row-span-9 rounded "><img src={Child} className="rounded h-[280px] w-full" alt="" /></div>
                    <div className="row-span-1">
                        <div className="mt-5 mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
                            <p></p>
                            <p></p>
                            <p >Jwelery For Childrens</p>
                            <p>&nbsp;&nbsp;&gt;</p>
                            <p></p>
                            <p></p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mt-3 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9]   h-[350px] max-w-72 rounded  ">
                <div className="grid grid-row-10 ">
                    <div className="row-span-9 rounded "><img src={Girl} className="rounded h-72 w-full" alt="" /></div>
                    <div className="row-span-1">
                        <div className="mt-5 mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
                            <p></p>
                            <p></p>
                            <p>Jwelery for Women</p>
                            <p>&nbsp;&nbsp;&gt;</p>
                            <p></p>
                            <p></p>
                        </div>
                        
                    </div>
                </div>
            </div>

  


        </div>
    </div>

    




    </div>
        
        
        </>

    )
}