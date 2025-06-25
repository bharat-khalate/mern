
import './App.css';
import Header from './component/Header';
import Top_div from './component/Top_div';
import Card from './component/Card';
// import ShopByCategory from './component/ShopByCategory';
// import ShopByWeight from './component/ShopByWeight';
// import ShopByGender from './component/ShopByGender';
import NewshopByCategory from './component/NewshopByCategory';
import NewshopByWeight from "./component/NewshopByWeight"
import NewshopByGender from './component/NewshopByGEnder';
import Footer from './component/Footer';
import AllProducts from './component/AllProducts';
import Product from './component/Product';
import Uploadproduct from './component/Uploadproduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fetch from './component/Fetch';
import Update_product from './component/Update_product';
import AddCategory from './component/AddCategory';
import Newallproducts from './component/Newallproducts';
import Category from './component/Category';
import Weight from './component/Weight';
import Admin_div from './component/Admin_div';
import Login from './component/Login';
import Signup from './component/Signup';
import axios from 'axios';
import Cart from './component/Cart';
import { useEffect, useState } from 'react';
import Search from './component/Search';
axios.defaults.withCredentials = true;

function App() {




  return (
    <>
    {/* <Header/> */}
    {/* <Fetch/> */}
    {/* <Header></Header> */}
    {/* <Top_div></Top_div> */}
    {/* <Card></Card> */}
    {/* <NewshopByCategory/> */}
    {/* <NewshopByGender></NewshopByGender> */}
    {/* <NewshopByWeight/> */}
    {/* <AllProducts/> */}
    {/* <Product/> */}
    {/* <Footer/> */}
    {/* <Update_product/> */}
    <Router>
    <Routes>
      
      <Route path='/' element={<><Header/><Top_div/><Card/><NewshopByCategory/><NewshopByGender/><NewshopByWeight/><Footer/></>}/>
      
    
      <Route path="/upload" element={<><Header/><Uploadproduct/><Footer/></>}/>
      <Route path='/fetch' element={<><Header/><Fetch/><Footer/></>}/>
      <Route path='/update/:id' element={<><Header/><Update_product/><Footer/></>}/>
      <Route path='/createcategory' element={<><Header/><AddCategory/><Footer/></>}/>
      <Route path='/viewdetail/:id' element={<><Header/><Product/><Footer/></>}/>
      <Route path='/users' element={<><Header/><Newallproducts/><Footer/></>}/>
      <Route path='/user_getpd/:id' element={<><Header/><Product/><Footer/></>}/>
      <Route path='/category/:id' element={<><Header/><Category/><Footer/></>}/>
      <Route path='/weight/:id' element={<><Header/><Weight/><Footer/></>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='/cart' element={<><Header/><Cart/><Footer></Footer></>}/>
      <Route path='/search/:search_key' element={<><Header/><Search></Search><Footer/></>}/>
    
    </Routes>
    </Router>
    </>
  );
}

export default App;
