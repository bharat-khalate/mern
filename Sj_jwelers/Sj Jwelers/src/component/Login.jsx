import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [btn, changebtn] = useState(false);
    var [formData, setFormData] = useState({
        "name": "",
        "cpasss": ""
    })

    const handlechange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (1) {
            try {
                
                const response = await axios.post("http://localhost:5000/fetch_user", formData);

                window.alert("Logged In !")
                navigate("/");

            } catch (error) {
                window.alert("InValid Credential")
                console.error(error);
            }
        } else {
            window.alert("password and confirm password no matched")
        }
    }


    return (

        <div className={`m-auto mt-40 md:mt-6 w-96 bg-slate-100 rounded shadow-xl p-10 text-[#832729] ${(1) ? 'left-[0] top-[100px]' : 'hidden'}`} id="abc" >
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <h1 className="text-center text-4xl mb-10">Login</h1>

                <label htmlFor="price" className="mr-5">Email id</label>
                <input type="email" id="name" name="name" onChange={handlechange} value={formData.name} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter Email " />

                <label htmlFor="weight" className="mr-5">Confirm Password</label>
                <div className='flex'>

                    {
                        btn ? (
                            <>
                                <input type="password" id="cpasss" name="cpasss" onChange={handlechange} value={formData.cpasss} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-r-0 border-double rounded rounded-r-none  p-1" placeholder="Enter Password" />

                                <BiShow
                                    className='border border-[#fab464] border-2 border-double text-[35px] bg-white rounded-r border-l-0'
                                    onClick={() => changebtn(!btn)}
                                />
                            </>
                        ) : (
                            <>
                                <input type="text" id="cpasss" name="cpasss" required onChange={handlechange} value={formData.cpasss} className="mb-2 w-full m-auto border border-[#fab464] border-2 border-r-0 border-double rounded rounded-r-none  p-1" placeholder="Enter Password" />

                                <BiHide
                                    className='border border-[#fab464] border-2 border-double text-[35px] bg-white rounded-r border-l-0'
                                    onClick={() => changebtn(!btn)}
                                />
                            </>
                        )
                    }


                </div>


                <div className="flex justify-center mb-8">
                    <button type="submit" className="border-2 text-center border-black w-32 bg-transparent p-2 rounded mt-5 hover:bg-[#832729] hover:text-[#ffffff] hover:border-[#ffffff]">Login</button>
                </div>
            </form>

            <Link to={'/signup'}><p>Dont have account ?, Sign up</p></Link>
        </div>

    )
}
