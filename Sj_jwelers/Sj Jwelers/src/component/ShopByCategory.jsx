import React from "react";
import "./Hr.css";
import Jw from "../assets/jw.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ShopByCategory(){
    return(
        <div className="playfair-display-custom mt-5  grid grid-rows-1">
            <p className="text-center text-5xl text-[#832729]">Shop By Category</p>
            <p className="text-center text-xl text-[#832729] pt-3">Browse through your favorite categories. We've got them all!</p>
            <hr className="hr-with-svg text-[#832729] mt-2" />
            <div className="grid grid-rows-6 md:grid-rows-2 ">
                <div className="row-span-3 md:row-span-1" >
                    <div className="md:grid grid-cols-6  p-0 md:px-32 mb-4 ">
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0   rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        
                       {/* here paste */}
                    </div>
                </div>
                <div className="row-span-3 md:row-span-1 " >
                    <div className="md:grid grid-cols-6 p-0 md:px-32 ">
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span text-center-1 shadow-4xl bg-[#f2e9e9] h-[260px] mt-1 mb-6 md:mb-0  md:mt-0  w-40 m-32 md:mt-2 md:m-0  rounded-md  hover:scale-105 hover:zIndex-5 duration-[400] " >
                            <img src={Jw} className="w-full rounded-md  h-48 "></img>
                            <p className="text-center text-2xl mt-2 text-[#832729]"> Gold</p>
                            <div className="grid grid-cols-1 ">
                                {/* <div className="col-span-1"></div> */}
                                <div className="col-span-1 flex">
                                    <p className="text-center text-x mt-1 ml-12   text-[#832729] ">Explore </p>
                                    <IoIosArrowRoundForward className="text-[30px] text-center text-[#832729] "/>
                                </div>
                                {/* <div className="col-span-1"></div> */}
                            </div>
                        </div>

                    {/* paste here */}
                    </div>
                </div>



            </div>


        </div>
    );
}