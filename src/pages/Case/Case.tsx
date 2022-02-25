import React from "react";

import Gallery from "../../components/Gallery/Gallery";
import More from "../../components/More/More";

import style from "./Case.module.css";

const Case = () => {
    return (
        <div className="container">
            <div className={style.header}>
                <div className={style.title}>Лендинг для прокта<br/>CRMP Mobile GRAND RP</div>
                <div className={style.description}>«Билайн» — один из ведущих поставщиков услуг связи, и число разнообразных вакансий компании постоянно увеличивается. </div>
            </div>
            
            <Gallery />
            
            <div className={style.membmers}>
                <div className={style.member}>
                    <div className={style.role}>Арт-Директор</div>
                    <div className={style.name}>Алекс Зубехин</div>
                </div>
                <div className={style.member}>
                    <div className={style.role}>Арт-Директор</div>
                    <div className={style.name}>Алекс Зубехин</div>
                </div>
                <div className={style.member}>
                    <div className={style.role}>Арт-Директор</div>
                    <div className={style.name}>Алекс Зубехин</div>
                </div>
            </div>
            <More />
        </div>
    );
};

export default Case;