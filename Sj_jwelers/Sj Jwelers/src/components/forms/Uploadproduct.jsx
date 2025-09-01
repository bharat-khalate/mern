import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Uploadproduct() {
    const navigate=useNavigate();





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
    console.log(product);

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
            const response = await axios.post("http://localhost:5000/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // console.log(response.data);
            // Reset form after successful submission if needed
                window.alert("file uploaded");
                navigate("/upload");
           
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

            return (
                <div className="m-auto md:mt-16 w-96 bg-slate-100 rounded shadow-xl p-10 text-[#832729]" id="abc">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h1 className="text-center text-4xl mb-10">Add Product</h1>
                        <label htmlFor="name" className="mr-5">Name</label>
                        <input type="text" id="name" onChange={handleInputChange} name="name" value={product.name} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter name of jewelry"/>
        
                        <label htmlFor="price" className="mr-5">Price</label>
                        <input type="number" id="price" onChange={handleInputChange} name="price" value={product.price} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter Price in Rs"/>
        
                        <label htmlFor="weight" className="mr-5">Weight</label>
                        <input type="number" id="weight" onChange={handleInputChange} name="weight" value={product.weight} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter weight in Grams"/>
        
                        <label htmlFor="avail" className="mr-5">Availability</label>
                        <input type="number" id="avail" onChange={handleInputChange} name="avail" value={product.avail} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter the number of items available"/>
        
                        <label htmlFor="purity" className="mr-5">Purity</label>
                        <input type="number" id="purity" onChange={handleInputChange} name="purity" value={product.purity} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" placeholder="Enter purity in karat"/>
        
                        <label htmlFor="category" className="mr-5">Category</label>
                        <select name="category" onChange={handleInputChange} value={product.category} required className="mb-2 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1">
                        {jwelelery.map((jweleleryy) => (
                            <option value={jweleleryy.category} className="tect-black">{jweleleryy.category}</option>
                            ))}
                        </select>
        
                        <label htmlFor="img" className="mr-5">Upload Image</label>
                        <input type="file" id="img" name="img" onChange={handleInputChange} accept="image/png, image/gif, image/jpeg" className="mb-1 w-full m-auto border border-[#fab464] border-2 border-double rounded p-1" />
        
                        <div className="flex justify-end mb-8">
                            <button type="submit" className="border-2 flex border-black bg-transparent p-2 rounded mt-5 hover:bg-[#832729] hover:text-[#ffffff] hover:border-[#ffffff]">Submit</button>
                        </div>
                    </form>
                </div>
            );

        }else{
            return(
                <div className="h-screen text-center text-4xl p-20">
            Access prohibited
        </div>
            )
        }

}
