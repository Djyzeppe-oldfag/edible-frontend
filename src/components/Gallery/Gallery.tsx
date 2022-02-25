import React from "react";

import style from "./Gallery.module.css";

import image from "../../assets/case/1.jpg";

const Gallery = () => {
    return (
        <div className={style.gallery}>
            <div className={style.unit}>
                <img src={ image } alt="" />
            </div>
            <div className={style.unit}>
                <img src={ image } alt="" />
            </div>
            <div className={style.unit}>
                <img src={ image } alt="" />
            </div>
            <div className={style.unit}>
                <img src={ image } alt="" />
            </div>
            <div className={style.unit}>
                <img src={ image } alt="" />
            </div>
            <div className={style.unit}>
                <img src={ image } alt="" />
            </div>
        </div>
    );
};

export default Gallery;