import React from "react";
import { Link } from "react-router-dom";

import case_1 from "../../assets/cases/1.jpg";
import case_2 from "../../assets/cases/2.jpg";
import case_3 from "../../assets/cases/3.jpg";
import case_4 from "../../assets/cases/4.jpg";
import case_5 from "../../assets/cases/5.jpg";
import case_6 from "../../assets/cases/6.jpg";

import style from "./Cases.module.css";

const Cases = () => {
    return (
        <div className={`container ${style.conteiner}`}>
            <div className={style.cases}>
                <Link className={style.case} to="/case">
                    <img src={case_1} alt="" />
                    <div className={style.title}>Значимость этих проблем настолько очевидна, что существующая теория.</div>
                </Link>
                
                <Link className={style.case} to="/case">
                    <img src={case_2} alt="" />
                    <div className={style.title}>Для современного мира убеждённость некоторых оппонентов является качественно.</div>
                </Link>

                <Link className={style.case} to="/case">
                    <img src={case_3} alt="" />
                    <div className={style.title}>Вот вам яркий пример современных тенденций - синтетическое тестирование создаёт.</div>
                </Link>

                <Link className={style.case} to="/case">
                    <img src={case_4} alt="" />
                    <div className={style.title}>Вот вам яркий пример современных тенденций - синтетическое тестирование создаёт.</div>
                </Link>

                <Link className={style.case} to="/case">
                    <img src={case_5} alt="" />
                    <div className={style.title}>Значимость этих проблем настолько очевидна, что существующая теория.</div>
                </Link>

                <Link className={style.case} to="/case">
                    <img src={case_6} alt="" />
                    <div className={style.title}>Вот вам яркий пример современных тенденций - синтетическое тестирование создаёт.</div>
                </Link>
            </div>
        </div>
    );
};

export default Cases;