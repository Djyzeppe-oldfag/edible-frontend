import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/index";
import Case from "./pages/Case/Case";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/Product/Product";
import Contacts from "./pages/Contacts/Contacts";
import Reviews from "./pages/Reviews/Reviews";
import Profile from "./pages/Profile/Profile";

const App = () => {
    return (
        <>
            <Header />
            <div className="app">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/case" element={ <Case /> } />
                    <Route path="/categories" element={ <Categories /> } />
                    <Route path="/product" element={ <Product /> } />
                    <Route path="/contacts" element={ <Contacts /> } />
                    <Route path="/reviews" element={ <Reviews /> } />
                    <Route path="/profile" element={ <Profile /> } />
                </Routes>
                <Footer />
            </div>
        </>
    );
};

export default App;