import React from "react";

import Roulete from "../components/Roulete/Roulete";
import MainScreen from "../components/MainScreen/MainScreen";
import ContentScreen from "../components/ContentScreen/ContentScreen";

const Home = () => {
    return (
        <>
            <Roulete />
            <MainScreen />
            <ContentScreen />
        </>
    );
};

export default Home;