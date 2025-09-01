import React, { useState } from 'react'
import { TbCategoryPlus } from "react-icons/tb";
import { MdCloudUpload } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from 'react-router-dom';


export default function Admin_div() {
    const [sate,setstate]=useState();
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
