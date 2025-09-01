import React from "react";
import { GiEmeraldNecklace } from "react-icons/gi";
import { ReactTyped } from "react-typed";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import "../assets/Font.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { MdCloudUpload } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

export default function Top_div(){
    const [sate,setstate]=useState();

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

    if(!des){

        return(
            
            <>
            <div className="bg-[#ffffff] w-full  pt-[100px] playfair-display-custom ">
                <div className="max-w-[1240px] mx-auto p-3  md:grid grid-cols-2 md:p-0">
                    <div className="text-left col-span-1 ">
                        <div grid grid-rows-2>
                            <div className="row-span-1 h-48">
                                <p className="text-5xl md:text-[70px] font-bold">Live&nbsp;
                                     <ReactTyped strings={["in<br>Glamour","<br>in<br>Luxury","in<br>Sparkle "]} typeSpeed={100} loop="True" backSpeed={60} />
                                </p>
                            </div>
                            <div className="row-span-1 mt-7">
                                 <p className="text-2xl" >
                                    Reach the perfect glamour style with our exclusive jwelery collection
                                </p>
                                <Link to={`/users`}>
                                <button className="bg-transparent border-2 border-black p-1 rounded mt-5 hover:bg-[#832729]  hover:text-[#ffffff] hover:border-0 " >View More</button>
                                </Link>
    
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-rows-3">
                            <div className="row-span-3">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                    <img src={img1} className="mt-20"></img>
                                    </div>
                                    <div className="col-span-1 ml2">
                                     <img src={img2}></img>
                                     <span className="text-xl text-center font-bold flex ml-10  mt-5" style={{ color: '#000000' }}><GiEmeraldNecklace className="text-xl text-center font-bold flex mt-2 " style={{ color: '#000000' }}/>&nbsp;Beautyfull Collection </span>
                                     
                                     
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            
            </>
        );
        
    }
    else {
        return (
          <div className='md:flex justify-center p-16 gap-10 p-5 '>
      
              <Link to={`/createcategory`}>
              <div className='mx-auto rounded w-48 bg-[#FDCA0C] p-5 mt-5 flex justify-center'>
                  <div className='text-center'>Create Category</div>&nbsp;
                  <TbCategoryPlus className='text-xl mt-1 ml-1'></TbCategoryPlus>
                  
              </div>
              </Link>
      
      
              <Link to={`/upload`}>
              <div className='mx-auto rounded w-48 bg-[#FDCA0C] mt-5  p-5 flex justify-center'>
              <div className='text-center'>Upload Product</div>
              <MdCloudUpload className='text-xl mt-1 ml-2'></MdCloudUpload>
              </div>
              </Link>
      
              <Link to={`/fetch`}>
              <div className='mx-auto rounded w-48 bg-[#FDCA0C] mt-5 p-5 flex justify-center'>
              <div className='text-center'>Edit Product</div>
              <TbEdit className='text-xl mt-[1px] ml-2'></TbEdit>       
              </div>
              </Link>
            
          </div>
        )
    }
}