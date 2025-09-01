import React, { useState } from "react";
import "../assets/Font.css";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineLogin, AiOutlineSearch } from "react-icons/ai";
import { LuSearchX } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { RiLogoutCircleLine } from "react-icons/ri";


export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [stoggle, ssetToggle] = useState(false);
    const [log, setlog] = useState(0);
    const [input,setinput]=useState('')

    const handleInputChange = (e) => {
        
            setinput( e.target.value );
        
    };


    // console.log(input);

    const logout = async () => {
        try {
            if (window.confirm("Click Ok to Logout") == true) {

                const res = await axios.get("http://localhost:5000/logot/");
                alert("Logged Out Successfully")
                setlog(0);
            window.location.reload();
                
            } else {

            }





        } catch (err) {
            console.log("here")
            console.log(err)
        }
    }
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/");
                if (res.data.id) {
                    setlog(1);

                }


            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])



    return (
        <div className='bg-[#f2e9e9] p-4 playfair-display-custom '>
            <div className="max-w-[1240px]  items-center  flex justify-end order-black mx-auto ">
                <div className="text-3xl font-bold" style={{ color: '#832729' }}>

                </div>


                <div className={`fixed duration-300 ${stoggle ? 'mr-[110px] mb-2 ' : 'top-[-100%]'} `}>
                    <form >
                        <div className="flex justify-center rounded ">
                            <input
                                className="rounded  w-32  text-[#832729]  p-1"
                                type="text"
                                aria-label="s_box"
                                onChange={handleInputChange}
                                
                            />
                            <Link to={`/search/${input}`}>
                            <button className="rounded  bg-black text-white  p-2 " type="button" >
                                Search
                            </button>
                            </Link>
                            {
                                console.log(input)
                            }
                        </div>
                    </form>
                </div>


                {
                    stoggle ?
                        <LuSearchX className="animate-bounce text-[25px] " onClick={() => ssetToggle(!stoggle)} title="Close Search" />
                        :
                        <AiOutlineSearch className="text-[25px] " onClick={() => ssetToggle(!stoggle)} title="Search" />

                }
                <Link to={'/cart'}><AiOutlineShoppingCart className="text-[30px] mr-3" title="Cart" /></Link>


                {log ?
                    <RiLogoutCircleLine className="text-[25px] mr-3" title="LogOut" onClick={logout} />
                    :
                    <Link to="/login">
                        <AiOutlineLogin className="text-[25px] mr-3" title="Login" />
                    </Link>
                }
            </div>
            <div className=" max-w-[1240px] mt-[5px] items-center  flex justify-between  mx-auto " >
                <Link to={`/`}><div className="text-3xl font-bold" style={{ color: '#832729' }}>
                    Sj_Jwelers
                </div></Link>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-xlr md:hidden block text-[25px]" style={{ color: '#832729' }} />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className=" text-xlr md:hidden block text-[25px]" style={{ color: '#832729' }} />
                }


                <ul className="hidden md:flex   gap-5" style={{ color: '#832729' }}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/users"}>View all products</Link></li>
                    {/* <li>Blog</li> */}
                    <li>About</li>
                    <li>Contact</li>

                </ul>


                <ul className={` md:hidden w-full h-50%  gap-5 fixed bg-white h-screen  ${toggle ? 'left-[0] top-[100px]' : 'left-[0] top-[-100%]'} `} style={{ color: '#832729' }}>
                    <li className="p-3"><Link to={"/"}>Home</Link></li>
                    <li className="p-3"><Link to={"/users"}>View all products</Link></li>
                    {/* <li className="p-3">Blog</li> */}
                    <li className="p-3">About</li>
                    <li className="p-3">Contact</li>
                </ul>

            </div>


        </div>
    );
}