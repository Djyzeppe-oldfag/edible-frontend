import React from "react";

import style from "./More.module.css";

import image from "../../assets/more/1.png";

const More = () => {
    return (
        <div className={style.more}>
            <div className={style.title}>Ещё</div>

            <div className={style.collection}>
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
        </div>
    );
};

export default More;