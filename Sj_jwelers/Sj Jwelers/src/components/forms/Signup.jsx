import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Signup() {
    const location = useLocation();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        "name":"",
        "email":"",
        "password":"",
        "cpassword":""
    })

    const handlechange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    console.log(formData);
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const   FD = new FormData();
          FD.append('name', formData.name);
          FD.append('email', formData.email);
          FD.append('password', formData.password);
        
          if(formData.password==formData.cpassword)
        {
        try {
            const response = await axios.post("http://localhost:5000/reg" , formData);
            // console.log(response.data);
            // Reset form after successful submission if needed
            // window.alert("file uploaded\n" + formData);
            window.alert("Registration done");
            navigate("/login");

        } catch (error) {
            console.error(error);
        }
    }else{
        window.alert("password and confirm password no matched")
    }

    }

  return (
    <div className={`m-auto mt-40 md:mt-6 w-96 bg-slate-100 rounded shadow-xl p-10 text-[#832729] ${(1) ? 'left-[0] top-[100px]' : 'hidden'}`} id="abc" >
                    <form  encType="multipart/form-data" onSubmit={handleSubmit} >
                        <h1 className="text-center text-4xl mb-10">Register</h1>
                        <label htmlFor="name" className="mr-5">Name</label>
                        <input type="text" id="name"   name="name"  onChange={handlechange}  required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter name of jewelry" />

                        <label htmlFor="price" className="mr-5">Email id</label>
                        <input type="email" id="email"   name="email" onChange={handlechange}  required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter Email " />

                        <label htmlFor="weight" className="mr-5">Password</label>
                        <input type="password" id="password"   name="password" onChange={handlechange} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter Password" />
                        
                        <label htmlFor="weight" className="mr-5">Confirm Password</label>
                        <input type="password" id="cpassword"   name="cpassword" onChange={handlechange} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter Password" />


                        <div className="flex justify-center mb-8">
                            <button type="submit" className="border-2 text-center border-black w-32 bg-transparent p-2 rounded mt-5 hover:bg-[#832729] hover:text-[#ffffff] hover:border-[#ffffff]">Register !</button>
                        </div>
                    </form>

                   <Link to={'/login'}><p>Already have account ?, Login.</p> </Link> 
                </div>
  )
}
