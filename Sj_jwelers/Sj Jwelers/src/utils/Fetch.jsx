import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import Men from "../assets/men.jpeg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";


export default function Fetch() {
    const [showfilter, setshowfilter] = useState(false);
    const [showweightfilter, setshowweightfilter] = useState(false);
    const [jwelelery, fetchjwelery] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/fetch");
                fetchjwelery(res.data)
                console.log(res.data);
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])
    
    
    const del_entry=async (id)=>{
        try{
            await axios.delete("http://localhost:5000/del/"+id)
            window.location.reload();
        }catch (err){
            console.log("error encountered while deleting\n"+err);

        }

    }


    const [username,setUsername]=useState('');
    const [des,setDes]=useState(false);
  
    useEffect(() => {
      const fetchdata = async () => {
          try {         
            // const rees = await axios.post("http://localhost:5000/test");
              const res = await axios.get("http://localhost:5000/");
              // fetchjwelery(res.data
              console.log(res.data)
              setUsername(res.data.username);
              setDes(res.data.des?true:false);
              
            } catch (err) {
              console.log("error : " + err)
            }
          }
          fetchdata();
        }, [])
  

    if(des){

        
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
                                    <li>mangalsutra</li>
                                    <li>ring</li>
                                    <li>Necklace</li>
    
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
                                    <li>mangalsutra</li>
                                    <li>ring</li>
                                    <li>Necklace</li>
    
                                </ul>
                            </div>
    
                        </div>
                        {/* second filter */}
                    </div>
                    <div className="col-span-8 md:flex flex-wrap justify-center gap-5 mt-5 ">
                        <div className=" p-16 md:p-0 md:grid grid-cols-3 md:max-w-[1224px] md:gap-10" >
                            
                                {jwelelery.map((jweleleryy) => (
    
    
    
                                    <div className="grid grid-row-10  h-[370px] max-w-64 rounded   m-auto mb-5 md:mb-0 " key={jweleleryy.id}>
                                        {<div className="row-span-9 rounded "><img src={"/uploads/"+jweleleryy.img} className="rounded h-72 w-full" alt="" /></div>}
                                        <div className="row-span-1">
                                            <p className="text-center mt-3 mb-1 text-xl"> {jweleleryy.name}</p>
                                            <div className=" mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
    
                                                <div className="flex justify-center  ">
                                                    <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#29c5f6]  hover:text-[#ffffff] hover:border-[#29c5f6] " ><Link to={`/update/${jweleleryy.id}`}>Edit Entry &nbsp; <MdOutlineEdit className="text-2xl" /></Link></button>
                                                </div>
                                                <p> &nbsp; </p>
                                                <div className="flex justify-center ">
                                                    <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#FF0000]  hover:text-[#ffffff] hover:border-[#FF0000] " onClick={()=>del_entry(jweleleryy.id)} >Delete Entry &nbsp; <MdDeleteForever className="text-2xl" /></button>
                                                </div>
    
                                            </div>
    
                                        </div>
                                    </div>
    
    
    
                                ))}
                            
    
    
    
    
    
                            
    
                            {/* <div className="grid grid-row-10  h-[370px] max-w-64 rounded   m-auto mb-5 md:mb-0">
                                <div className="row-span-9 rounded "><img src={Men} className="rounded h-72 w-full" alt="" /></div>
                                <div className="row-span-1">
                                    <p className="text-center mt-3 mb-1 text-xl"> Name</p>
                                    <div className=" mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
    
                                        <div className="flex justify-center  ">
                                            <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#29c5f6]  hover:text-[#ffffff] hover:border-[#29c5f6] " >Edit Entry &nbsp; <MdOutlineEdit className="text-2xl" /></button>
                                        </div>
                                        <p> &nbsp; </p>
                                        <div className="flex justify-center ">
                                            <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#FF0000]  hover:text-[#ffffff] hover:border-[#FF0000] " >Delete Entry &nbsp; <MdDeleteForever className="text-2xl" /></button>
                                        </div>
    
                                    </div>
    
                                </div>
                            </div> */}
    
    
                        </div>
                    </div>
                </div>
            </>
        )

    }else{
        return(
        <div className="h-screen text-center text-4xl p-20">
            Access prohibited
        </div>)
    }
}