import React from "react";
import { Link } from "react-router-dom";

import style from "./Categories.module.css";

import category_1 from "../../assets/categories/1.jpg";
import category_2 from "../../assets/categories/2.jpg";
import category_3 from "../../assets/categories/3.jpg";
import category_4 from "../../assets/categories/4.jpg";

const Categories = () => {
    return (
        <div className="container">
            <div className={style.categories}>
                <Link className={style.unit} to="/product">
                    <img src={ category_1 } alt="" />
                    <div className={style.title}>Ux/Ul</div>
                </Link>

                <Link className={style.unit} to="/product">
                    <img src={ category_2 } alt="" />
                    <div className={style.title}>3D</div>
                </Link>

                <Link className={style.unit} to="/product">
                    <img src={ category_3 } alt="" />
                    <div className={style.title}>Айдентика</div>
                </Link>

                <Link className={style.unit} to="/product">
                    <img src={ category_4 } alt="" />
                    <div className={style.title}>Менеджмент</div>
                </Link>
            </div>
        </div>
    );
};

export default Categories;