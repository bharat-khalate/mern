import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';

export default function Search() {
    const location = useLocation();
    const search_key = location.pathname.split('/')[2];
    // console.log("search key is  "+search_key)
    const [data,setdata]=useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                // Make sure to use http:// or https:// in the URL
                const res = await axios.post(`http://localhost:5000/search/${search_key}`);
                setdata(res.data);
                console.log("data", res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchdata();
    }, []);
  return (
    <>
            <div className=" playfair-display-custom text-">
                
                <div className=" md:flex flex-wrap justify-center gap-5 mt-5 ">
                    <div className=" p-16 md:p-0 md:grid grid-cols-3 md:max-w-[1224px] md:gap-10">

                        {data && data.map((o) => (
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