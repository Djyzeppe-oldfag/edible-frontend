import React from "react";

import Intro from "../components/Intro/Intro";
import Cases from "../components/Cases/Cases";
import Vacancies from "../components/Vacancies/Vacancies";

const Home = () => {
    return (
        <div className="home">
            <Intro />
            <Cases />
            <Vacancies />
        </div>
    );
};

export default Home;