import React from "react";
import Male from "../assets/men.jpeg";
import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
axios.defaults.withCredentials = true;







export default function Product(){
    const navigate=useNavigate();
    const [uid,setuid]=useState(0);
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const pd_id = location.pathname.split('/')[2];
    const [log,islog]=useState(0);

    const [productt, setproductt] = useState([]);



    

          console.log("log1  "+log)
    
          useEffect(() => {
            const fetchdata = async () => {
                try {
                    console.log("logg  "+log)
                    const mmc={
                        log:log
                    }
                    const res = await axios.post("http://localhost:5000/fetchh/product/" + pd_id,mmc);
                    setproductt(res.data)
                    console.log(res.data);
                } catch (err) {
                    console.log("error : " + err)
                }
            }
            fetchdata();
        }, [log])


        useEffect(() => {
            const fetchdata = async () => {
                try {         
                  // const rees = await axios.post("http://localhost:5000/test");
                    const res = await axios.get("http://localhost:5000/");
                    // fetchjwelery(res.data
                    console.log(res.data)
                    islog(res.data.id);
                    // setDes(res.data.des?true:false);
                    
                  } catch (err) {
                    console.log("error : " + err)
                    islog(0);
    
                  }
                }
                fetchdata();
              }, [])

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value); // Convert input value to integer
        setQuantity(value); // Update quantity state
      };

      useEffect(() => {
          const fetchdata = async () => {
              try {         
                // const rees = await axios.post("http://localhost:5000/test");
                  const res = await axios.get("http://localhost:5000/");
                  // fetchjwelery(res.data
                  console.log(res.data)
                  setuid(res.data.id);
                  // setDes(res.data.des?true:false);
                  
                } catch (err) {
                  console.log("error : " + err)
                }
              }
              fetchdata();
            }, [])

      

      const handleclick = async (e) => {
        e.preventDefault();
            console.log("id1 ="+uid)
            console.log("quantity 1 ="+quantity);
            console.log("pdid 1 ="+pd_id)           
       
        if(uid){

            const dataobj={
                uid:uid,
                pdid:pd_id,
                quantity:quantity
            }



            try {
                const response = await axios.post("http://localhost:5000/add_to_cart/", dataobj);
                // console.log(response.data);
                // Reset form after successful submission if needed
                // window.alert("file uploaded\n" + formData);
                window.alert("Added to cart");
                window.location.reload();
                // navigate("/upload");
    
            } catch (error) {
                console.error(error);
            }


        }else{
            window.alert("log in to add productd")
            navigate('/login')
        }

    };


    return(
        <div className="md:grid grid-cols-2 ">
            <div className="col-span-1 md:p-32">
                <img src={Male} alt=""  className="h-96 w-96 hover:scale-150 m-auto mt-5"/>
            </div>
            <div className="col-span-1 ">
                {productt.map((p)=>(


                <div className="mt-10 ml-10 ">
                    <p className=" md:mt-48 text-4xl text-[#832729]">Name: {p.name}</p>
                    <hr className="mt-1  max-w-96 h-1 bg-[#832729]"/>
                    <p className="mt-3 text-xl flex">Price:  <p className="text-2xl flex" > &nbsp;₹ <input type="number" id="price" value={quantity*p.price}></input></p></p>
                    <p className=" mt-5 text-l ">Weight: {p.weight} (in grams)</p>
                    <p className=" mt-3 text-l ">Quality in karat :{p.purity}</p>
                    <p>{(p.stock>0)?"Avilable":"unavailable"}</p>
                    <label htmlFor="quantity" className="mt-5">Quantity</label>
                    <input type="number" id="quantity" placeholder="1" value={quantity} min={1} max={p.stock} onChange={handleQuantityChange} className="border border-1 mt-3 ml-2 bg-slate-200 w-10"/>
                    <div className="flex  "> 
                        {
                            p.show?
                            
                            <button onClick={handleclick} className="border-2     border-black bg-transparent p-2 rounded mt-5  hover:bg-[#832729]  hover:text-[#ffffff] hover:border-0 " >Add to Cart</button>
                            :
                            <button onClick={handleclick} className="border-2     border-black bg-transparent p-2 rounded mt-5  hover:bg-[#832729]  hover:text-[#ffffff] hover:border-0 " disabled >Already Added to cart</button>
                        }             
                     </div>
                </div>



                ))}
            </div>
        </div> 
    );
}