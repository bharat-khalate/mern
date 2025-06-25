import React, { useEffect } from 'react'
import axios from 'axios';
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import Men from '../assets/img1.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate=useNavigate();
    const [cartData,setcartData]=useState([]);
    const [uid,setuid]=useState(0);
    useEffect(() => {
        const fetchdata = async () => {
            try {         
                const res = await axios.get("http://localhost:5000/");
                setuid(res.data.id);

                
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])
    console.log("t " + uid); // Log the updated uid
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("this " + uid); // Log the updated uid
                const ress = await axios.post("http://localhost:5000/fetch_cart/" + uid);
                setcartData(ress.data);
                
            } catch (err) {
                console.log("Error: " + err);
            }
        };
    
        fetchData(); // Call the fetchData function
    
    }, [uid]);

    
    const del_entry=async (id)=>{
        try{
            await axios.delete("http://localhost:5000/del_cart/"+id)
            window.location.reload();
        }catch (err){
            console.log("error encountered while deleting\n"+err);

        }

    }
          
  if (uid){

      return (
      
      <>
                  <div className="md:grid grid-cols-10 playfair-display-custom text-">
                      
                      <div className="col-span-10 md:flex flex-wrap justify-center gap-10 mt-5 ">
                          <div className=" p-16 md:p-0 md:grid grid-cols-3 md:max-w-[1224px] md:gap-10" >
                              
                                  {cartData && cartData.map((jweleleryy) => (
      
      
      
                                      <div className="grid grid-row-10  h-[370px] max-w-64 rounded   m-auto mb-5 mb-24 md:mb-10 " >
                                          {<div className="row-span-9 rounded "><img src={"/uploads/"+jweleleryy.img} className="rounded h-72 w-full" alt="" /></div>}
                                          <div className="row-span-1">
                                              <p className="text-center mt-3 mb-1 text-xl"> {jweleleryy.name}</p>
                                              <p className="text-center mt-3 mb-1 text-xl">quantity: {jweleleryy.quantity}</p>
                                              <div className=" mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between ">
      
                                                  <div className="flex justify-center  ">
                                                      <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#FF0000]  hover:text-[#ffffff] hover:border-[#FF0000] " onClick={()=>del_entry(jweleleryy.od_id)} >Delete Entry &nbsp; <MdDeleteForever className="text-2xl" /></button>
                                                  </div>
                                                  <p> &nbsp; </p>
                                                  <div className="flex justify-center ">
                                                      <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#29c5f6]  hover:text-[#ffffff] hover:border-[#29c5f6] " ><Link to={`/user_getpd/${jweleleryy.id}`}>Detail &nbsp; <MdOutlineEdit className="text-2xl" /></Link></button>
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
                                              <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#FF0000]  hover:text-[#ffffff] hover:border-[#FF0000] " >Delete From cart &nbsp; <MdDeleteForever className="text-2xl" /></button>
                                          </div>
                                          <p> &nbsp; </p>
                                          <div className="flex justify-center ">
                                              <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#29c5f6]  hover:text-[#ffffff] hover:border-[#29c5f6] " >View Product &nbsp; <MdOutlineEdit className="text-2xl" /></button>
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
            Log in to access
        </div>

    )
  }
}
