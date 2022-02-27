import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";

import { getBoxes } from "../actions/boxes";

import Intro from "../components/Intro/Intro";
import Boxes from "../components/Boxes/Default";
import Vacancies from "../components/Vacancies/Vacancies";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.boxes);

    useEffect(() => {
        dispatch(getBoxes());
    }, []);

    return (
        <div className="home">
            <Intro />
            <Boxes isLoading={ data.isLoading } data={ data.data } />
            <Vacancies />
        </div>
    );
};

export default Home;