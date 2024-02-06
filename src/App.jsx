import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import SignUp from "./Components/Pages/SignUp";
import Service from "./Components/Pages/Service";

const App=()=>{
    return(
        <>
        <NavBar/>
        <Routes> 
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Product" element={<Product/>}></Route>
            <Route path="/SignUp" element={<SignUp/>}></Route>
            <Route path="/Service" element={<Service/>}></Route>
        </Routes>
        </>
    )
}

export default App;