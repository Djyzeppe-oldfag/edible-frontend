import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import localization from "../../utils/localization";

import { getCategories } from "../../actions/categories";

import style from "./Intro.module.css";

const Intro = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    useSelector((state: AppState) => state.localization.data);

    return (
        <div className={style.background} >
            
            <div className={style.movie}>
                <video autoPlay loop muted >
                    <source src={ require("../../assets/intro/intro.webm") } type="video/webm" />
                </video>
            </div>

            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.content}>
                        <div className={style.title}>{ localization.intro__title }</div>
                        <div className={style.tags}>
                            { !data.isLoading && data.data.map(item => 
                                <Link className={style.item} key={ item._id } to={`/product/${ item._id }`}>{ item.title }</Link>   
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;