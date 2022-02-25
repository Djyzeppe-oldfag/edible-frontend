import React from "react";

import style from "./Vacancies.module.css";

const Vacancies = () => {
    return (
        <div className={`container ${style.wrapper}`}>
            <div className={style.background}>
                <div>
                    <div className={style.title}>Нам нужны талантлевые люди</div>
                    <div className={style.count}>3 вакансии</div>
                </div>
                <div>
                    <div className={style.vacancy}>Дизайнер</div>
                    <div className={style.vacancy}>3D дизайнер</div>
                    <div className={style.vacancy}>Верстальщик</div>
                </div>
            </div>
        </div>
    );
};

export default Vacancies;