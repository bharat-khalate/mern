import React, { useState } from "react";
import Men from "../assets/men.jpeg";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Update_product() {
    const [form, switchForm] = useState(false);
    const location = useLocation();
    const pd_id = location.pathname.split('/')[2];
    // console.log("id: " + pd_id);


    const [jwelelery, fetchjwelery] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/fetchcat");
                fetchjwelery(res.data)
                console.log(res.data);
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])


    const [productt, setproductt] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("http://localhost:5000/fetch/product/" + pd_id);
                setproductt(res.data)
                // console.log(res.data);
            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])





    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: "",
        weight: "",
        avail: "",
        purity: "",
        category: "",
        img: null  // Use null to represent no image selected initially
    });

    const handleInputChange = (e) => {
        if (e.target.name === 'img') {
            setProduct({ ...product, img: e.target.files[0] }); // Set the image file
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
    };
    // console.log(product);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('weight', product.weight);
        formData.append('avail', product.avail);
        formData.append('purity', product.purity);
        formData.append('category', product.category);
        formData.append('img', product.img); // Append the image file

        try {
            const response = await axios.put("http://localhost:5000/update_product/" + pd_id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // console.log(response.data);
            // Reset form after successful submission if needed
            // window.alert("file uploaded\n" + formData);
            window.alert("updated");
            window.location.reload();

            // navigate("/upload");

        } catch (error) {
            console.error(error);
        }
    };





    const [stock, setStock] = useState({
        name: "na",
        price: "na",
        weight: "na",
        avail: "",
        purity: "na",
        category: "na",
        img: null  // Use null to represent no image selected initially
    });

    const handleInputChangeforstock = (e) => {

        setStock({ ...stock, [e.target.name]: e.target.value });

    };
    // console.log(stock);

    const handlesubmitforstock = async (e) => {
        e.preventDefault();

        const formdata = {
            avail: stock.avail
        }

        // console.log(formdata.avail +""+stock.avail)
        try {
            const response = await axios.put("http://localhost:5000/update_product_stock/" + pd_id, formdata);
            // console.log(response.data);
            // Reset form after successful submission if needed
            // window.alert("file uploaded\n" + formdata);
            // navigate("/upload");
            window.location.reload();

        } catch (error) {
            console.error(error);
        }
    };



    const [username, setUsername] = useState('');
    const [des, setDes] = useState(false);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                // const rees = await axios.post("http://localhost:5000/test");
                const res = await axios.get("http://localhost:5000/");
                // fetchjwelery(res.data
                console.log(res.data)
                setUsername(res.data.username);
                setDes(res.data.des ? true : false);

            } catch (err) {
                console.log("error : " + err)
            }
        }
        fetchdata();
    }, [])

    if (des) {

        return (
            <div className="md:grid grid-cols-2 ">

                <div className="md:col-span-1">
                    {productt.map((p) => (
                        <div key={p.id} className="grid grid-row-10  h-[370px] max-w-64 rounded   m-auto mb-5 md:mb-24 mt-10">

                            <div className="row-span-9 rounded "><img src={"/uploads/" + p.img} className="rounded h-72 w-full" alt="" /></div>
                            <div className="row-span-1">
                                <p className="text-center mt-3 mb-1 text-xl"> Name: {p.name}</p>
                                <p className="text-center mt-3 mb-1 text-xl"> price: {p.price}</p>
                                <p className="text-center mt-3 mb-1 text-xl">Weight: {p.weight}</p>
                                <p className="text-center mt-3 mb-1 text-xl"> Stock: {p.stock}</p>
                                <p className="text-center mt-3 mb-1 text-xl"> Purity: {p.purity}</p>
                                <p className="text-center mt-3 mb-1 text-xl"> Category: {p.category}</p>
                            </div>
                        </div>
                    ))}

                    {/* <div className=" mb-1 text-center  flex justify-center transition delay-1000 hover:justify-between "> 
        
                                            <div className="flex justify-center  ">
                                                <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#29c5f6]  hover:text-[#ffffff] hover:border-[#29c5f6] " >Edit Entry &nbsp; <MdOutlineEdit className="text-2xl" /></button>
                                            </div>
                                            <p> &nbsp; </p>
                                            <div className="flex justify-center ">
                                                <button className="border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#FF0000]  hover:text-[#ffffff] hover:border-[#FF0000] " >Delete Entry &nbsp; <MdDeleteForever className="text-2xl" /></button>
                                            </div>
        
                                        </div>*/}

                </div>



                <div className="md:col-span-1 mt-64 md:mt-6">

                    <div className="flex justify-center ">
                        {
                            form ?

                                <button onClick={() => switchForm(!form)} className="mt-10 border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#29c5f6]  hover:text-[#ffffff] hover:border-[#29c5f6] " >Update  stock only! &nbsp; <MdOutlineEdit className="text-2xl" /></button>

                                :
                                <button onClick={() => switchForm(!form)} className="mt-10 border-2  flex   border-black bg-transparent p-1 rounded mt-1  hover:bg-[#29c5f6]  hover:text-[#ffffff] hover:border-[#29c5f6] " >Update complete info &nbsp; <MdOutlineEdit className="text-2xl" /></button>

                        }

                    </div>





                    <div className={`m-auto md:mt-6 w-96 bg-slate-100 rounded shadow-xl p-10 text-[#832729] ${form ? 'left-[0] top-[100px]' : 'hidden'}`} id="abc" >
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h1 className="text-center text-4xl mb-10">Add Product</h1>
                            <label htmlFor="name" className="mr-5">Name</label>
                            <input type="text" id="name" onChange={handleInputChange} name="name" value={product.name} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter name of jewelry" />

                            <label htmlFor="price" className="mr-5">Price</label>
                            <input type="number" id="price" onChange={handleInputChange} name="price" value={product.price} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter Price in Rs" />

                            <label htmlFor="weight" className="mr-5">Weight</label>
                            <input type="number" id="weight" onChange={handleInputChange} name="weight" value={product.weight} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter weight in Grams" />

                            <label htmlFor="avail" className="mr-5">Availability</label>
                            <input type="number" id="avail" onChange={handleInputChange} name="avail" value={product.avail} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter the number of items available" />

                            <label htmlFor="purity" className="mr-5">Purity</label>
                            <input type="number" id="purity" onChange={handleInputChange} name="purity" value={product.purity} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter purity in karat" />

                            <label htmlFor="category" className="mr-5">Category</label>
                            <select name="category" onChange={handleInputChange} value={product.category} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1">
                            {jwelelery.map((jweleleryy) => (
                            <option value={jweleleryy.category} className="text-black">{jweleleryy.category}</option>
                            ))}
                            </select>

                            <label htmlFor="img" className="mr-5">Upload Image</label>
                            <input type="file" id="img" name="img" onChange={handleInputChange} accept="image/png, image/gif, image/jpeg" className="mb-1 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" />

                            <div className="flex justify-end mb-8">
                                <button type="submit" className="border-2 flex border-black bg-transparent p-2 rounded mt-5 hover:bg-[#832729] hover:text-[#ffffff] hover:border-[#ffffff]">Submit</button>
                            </div>
                        </form>
                    </div>








                    <div className={`m-auto md:mt-6  md:mb-24   w-96 bg-slate-100 rounded shadow-xl p-10 text-[#832729] ${form ? 'hidden' : 'left-[0] top-[100px]'}`} id="abc" >
                        <form onSubmit={handlesubmitforstock} encType="multipart/form-data">
                            <h1 className="text-center text-4xl mb-10">Change Quantity</h1>

                            <label htmlFor="avail" className="mr-5">Availability</label>
                            <input type="number" id="avail" onChange={handleInputChangeforstock} name="avail" required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter the number of items available" />


                            <div className="flex justify-end mb-8">
                                <button type="submit" className="border-2 flex border-black bg-transparent p-2 rounded mt-5 hover:bg-[#06ba12] hover:text-[#ffffff] hover:border-[#06ba12]">Submit</button>
                            </div>
                        </form>
                    </div>







                </div>

            </div>
        )
    } else {
        return (
            <div className="h-screen text-center text-4xl p-20">
                Access prohibited
            </div>
        )
    }

}