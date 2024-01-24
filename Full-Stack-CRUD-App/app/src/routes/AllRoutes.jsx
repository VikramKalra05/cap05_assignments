import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/register/register";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Notes from "../pages/notes/notes";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/notes" element={<Notes />}/>
        </Routes>
    )
}

export default AllRoutes;