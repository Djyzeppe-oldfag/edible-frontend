import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages";
import Box from "./pages/Box/Box";
import Profile from "./pages/Profile/Profile";

export default function App () {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/case/:case_id" element={ <Box/> } />
                <Route path="/profile" element={ <Profile/> } />
            </Routes>
            <Footer />
        </>
    );
};