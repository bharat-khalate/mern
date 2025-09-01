import React, { useEffect } from "react";
import "./Hr.css";
import Jw from "../assets/jw.jpg";
import { TiLocationArrowOutline } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



var len
export default function NewshopByCategory() {
    const [category, setcategory] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/fetchcat");

                setcategory(res.data)
                // console.log(res.data);
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])

    return (

        <>
            <div className="playfair-display-custom">
                <p className="text-center text-5xl text-[#832729]">Shop By Category</p>
                <p className="text-center text-xl text-[#832729] pt-3">Browse through your favorite categories. We've got them all!</p>
                <hr className="hr-with-svg text-[#832729] mt-2" />

                <div className=" pb-5  md:mt-5 bg-white  text-[#832729]  grid grid-rows-1">
                    <div className=" p-16 md:p-0 md:grid grid-cols-5 md:max-w-[1224px] mx-auto  md:gap-10 md:flex flex-wrap justify-center">
                        

                        {
                            (category.length <= 12) ?
                                (

                                    category.map((c) => (
                                        <Link to={`/category/${c.category}`}>
                                        <div className="mt-3 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9]   h-[260px] max-  max-w-40 rounded hover:scale-105 hover:zIndex-5 duration-[400]">
                                            <div className="grid grid-row-10 ">
                                                <div className="row-span-9 rounded "><img src={"/uploads/" + c.img} className="rounded h-48" alt="" /></div>
                                                <div className="row-span-1">
                                                    <div className="mt-5 mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
                                                        <p></p>
                                                        <p></p>
                                                        <p>{c.category}</p>
                                                        <p>&nbsp;&nbsp;&gt;</p>
                                                        <p></p>
                                                        <p></p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    ))
                                ) :
                                (

                                    category.slice(0, 11).map((c) => (
                                        <Link to={`/category/${c.category}`}>
                                        <div className="mt-3 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9]   h-[260px] max-  max-w-40 rounded hover:scale-105 hover:zIndex-5 duration-[400]">
                                            <div className="grid grid-row-10 ">
                                                <div className="row-span-9 rounded "><img src={"/uploads/" + c.img} className="rounded h-48" alt="" /></div>
                                                <div className="row-span-1">
                                                    <div className="mt-5 mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
                                                        <p></p>
                                                        <p></p>
                                                        <p>{c.category}</p>
                                                        <p>&nbsp;&nbsp;&gt;</p>
                                                        <p></p>
                                                        <p></p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    ))



                                )

                        }

                        {   (()=>
                            {
                                len = (10 - (category.length))

                            }
                            )()
                        }

                        {

                            len > 0 && (
                                (() => {
                                    let items = [];
                                    // console.log("inside " + len); // Example of logging inside the function

                                    for (let i = 0; i < len; i++) {
                                        // Generate JSX elements and push them to the items array
                                        items.push(
                                            <div key={i} className="mt-3 md:mt-0 md:col-span-1 shadow-2xl bg-[#f2e9e9] h-[260px] max-w-40 rounded hover:scale-105 hover:zIndex-5 duration-[400]">
                                                <div className="grid grid-row-10">
                                                    <div className="row-span-9 rounded">
                                                        <img src={Jw} className="rounded h-48" alt="" />
                                                    </div>
                                                    <div className="row-span-1">
                                                        <div className="mt-5 mb-1 text-center flex justify-center transition delay-1000 hover:justify-between">
                                                            <p></p>
                                                            <p></p>
                                                            <p>Gold</p>
                                                            <p>&nbsp;&nbsp;&gt;</p>
                                                            <p></p>
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return items; // Return the array of JSX elements
                                })()
                            )
                        }




                    </div>
                </div>



                <Link to={`/users`}>
                <div className="flex justify-center mb-8">
                    <button className="border-2 animate-bounce flex   border-black bg-transparent p-2 rounded mt-5  hover:bg-[#832729]  hover:text-[#ffffff] hover:border-0 " >View All Categories &nbsp; <MdKeyboardDoubleArrowRight className="text-3xl" /></button>
                </div>
                </Link>
            </div>


        </>



    );
}