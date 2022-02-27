import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import { getCateogory } from "../../actions/categories";

import Boxes from "../../components/Boxes/Default";

import style from "./Product.module.css";

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.category);

    useEffect(() => {
        if (id) dispatch(getCateogory(id));
    }, []);

    return (
        <>
            <div className="container">
                <div className={style.title}>{ data.data?.title }</div>
                <div className={style.description}>{ data.data?.description }</div>
                <div className={style.navigation}>
                    <div className={`${style.link} ${style.active}`}>Ux/ui</div>
                    <div className={style.link}>3D</div>
                    <div className={style.link}>Андентика</div>
                    <div className={style.link}>Графика</div>
                    <div className={style.link}>Маркетинг</div>
                    <div className={style.link}>Арт</div>
                </div>
            </div>
            
            { data.data?.boxes && <Boxes isLoading={ data.isLoading } data={ data.data.boxes } /> }
        </>
    );  
};

export default Product;