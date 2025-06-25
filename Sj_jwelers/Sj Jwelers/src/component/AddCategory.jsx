import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function AddCategory()
{
    const [product, setProduct] = useState({
        name: "",
        img: null  // Use null to represent no image selected initially
    });

    const handleInputChange = (e) => {
        if (e.target.name === 'img') {
            setProduct({ ...product, img: e.target.files[0] }); // Set the image file
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('img', product.img); // Append the image file

        try {
            const response = await axios.post("http://localhost:5000/createcategory", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // console.log(response.data);
            // Reset form after successful submission if needed
                window.alert("file uploaded");
                // navigate("/upload");
           
        } catch (error) {
            console.error(error);
        }
    };


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
        
            return(
                <div className="m-auto md:mt-16 w-96 bg-slate-100 rounded shadow-xl p-10 text-[#832729]" id="abc">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h1 className="text-center text-4xl mb-10">Add Category</h1>
                        <label htmlFor="name" className="mr-5">Category</label>
                        <input type="text" id="name" onChange={handleInputChange} name="name" value={product.name} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter name of jewelry"/>
        
                        
        
                        <label htmlFor="img" className="mr-5">Upload Image</label>
                        <input type="file" id="img" name="img" onChange={handleInputChange} accept="image/png, image/gif, image/jpeg" className="mb-1 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" />
        
                        <div className="flex justify-end mb-8">
                            <button type="submit" className="border-2 flex border-black bg-transparent p-2 rounded mt-5 hover:bg-[#832729] hover:text-[#ffffff] hover:border-[#ffffff]">Submit</button>
                        </div>
                    </form>
                </div>
            )

    }else{
        return(
            <div className="h-screen text-center text-4xl p-20">
            Access prohibited
        </div>
        )
    }
}