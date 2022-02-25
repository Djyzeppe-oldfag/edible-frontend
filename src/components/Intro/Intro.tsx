import React from "react";

import image from "../../assets/intro/intro.png";

import style from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={style.background}>
            <img className={style.movie} src={image} alt="" />
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.content}>
                        <div className={style.title}>Студия бренд-дизайна.<br/>Предлагаем осознанные решения под соусом творчества.</div>
                        <div className={style.tags}>
                            <div className={style.item}>Брендирование</div>
                            <div className={style.item}>Упаковка</div>
                            <div className={style.item}>3D Графика</div>
                            <div className={style.item}>Интерфейсы</div>
                            <div className={style.item}>Арты</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;