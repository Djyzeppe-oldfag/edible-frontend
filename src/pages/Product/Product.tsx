import React from "react";

import Cases from "../../components/Cases/Cases";

import style from "./Product.module.css";

const Product = () => {
    return (
        <>
            <div className="container">
                <div className={style.title}>Ux/Ul</div>
                <div className={style.description}>Определим потребности бизнеса → Исследуем аудиторию → Спроектируем пользовательский опыт → Разработаем внешний вид сайта или приложения</div>
                <div className={style.navigation}>
                    <div className={`${style.link} ${style.active}`}>Ux/ui</div>
                    <div className={style.link}>3D</div>
                    <div className={style.link}>Андентика</div>
                    <div className={style.link}>Графика</div>
                    <div className={style.link}>Маркетинг</div>
                    <div className={style.link}>Арт</div>
                </div>
            </div>
            <Cases />
        </>
    );  
};

export default Product;