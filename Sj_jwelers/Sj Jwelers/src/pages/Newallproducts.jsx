import React, { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import Men from "../assets/men.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Newallproducts() {
    const [showfilter, setshowfilter] = useState(false);
    const [showweightfilter, setshowweightfilter] = useState(false);
    const [ornaments, fetchornaments] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/fetch");
                fetchornaments(res.data)
                console.log(res.data);
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])

    const [category, setcategory] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/fetchcat");

                setcategory(res.data)
                console.log(res.data);
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])



    const [weight, setweight] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/fetchweight");
                setweight(res.data)
                console.log(res.data);
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])


    return (
        <>
            <div className="md:grid grid-cols-10 playfair-display-custom text-">
                <div className="md:col-span-2 ">
                    <div className="">
                        <p className="text-center pb-3 text-xl">Filter</p>
                        <div className="text-center">
                            {
                                showfilter ?
                                    <p onClick={() => setshowfilter(!showfilter)} className="flex justify-center" >Category Filter <MdArrowDropUp className="text-3xl" /></p>
                                    :
                                    <p onClick={() => setshowfilter(!showfilter)} className="flex justify-center">Category Filter <MdArrowDropDown className="text-3xl" /> </p>

                            }

                            <ul className={`ml-5 duration-[400] ${showfilter ? 'left[10px]' : 'hidden'} : `}>
                                {category.map((c) => (

                                    <Link to={`/category/${c.category}`}>
                                        <li>{c.category}</li>
                                    </Link>


                                ))}
                            </ul>

                        </div>
                        <div className=" text-center">
                            {
                                showweightfilter ?
                                    <p onClick={() => setshowweightfilter(!showweightfilter)} className="flex justify-center" >Weight Filter <MdArrowDropUp className="text-3xl" /></p>
                                    :
                                    <p onClick={() => setshowweightfilter(!showweightfilter)} className="flex justify-center">Wieght Filter <MdArrowDropDown className="text-3xl" /> </p>

                            }
                            <ul className={`ml-5 duration-[400] ${showweightfilter ? 'left[10px]' : 'hidden'} : `}>

                                {weight.map((w) => (
                                    <Link to={`/weight/${w.weight}`}>
                                        <li>{w.weight}</li>
                                    </Link>
                                ))}


                            </ul>
                        </div>

                    </div>
                    {/* second filter */}
                </div>
                <div className="col-span-8 md:flex flex-wrap justify-center gap-5 mt-5 ">
                    <div className=" p-16 md:p-0 md:grid grid-cols-3 md:max-w-[1224px] md:gap-10">

                        {ornaments.map((o) => (
                            <Link to={`/user_getpd/${o.id}`}>
                                <div className="grid grid-row-10  h-[350px] max-w-64 rounded   m-auto ">
                                    <div className="row-span-9 rounded "><img src={"/uploads/" + o.img} className="rounded h-72 w-full" alt="" /></div>
                                    <div className="row-span-1">
                                        <div className="mt-5 mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
                                            <p></p>
                                            <p></p>
                                            <p><Link to={`/user_getpd/${o.id}`}>{o.name}</Link></p>
                                            <p>&nbsp;&nbsp;&gt;</p>
                                            <p></p>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}



                    </div>
                </div>
            </div>
        </>
    )
}