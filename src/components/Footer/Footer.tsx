import React from "react";

import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.header}>
                    <div>
                        <div className={style.title}>Edible@work.ru</div>
                        <div className={style.subtitle}>Узнайте, чем мы можем быть<br/>позелными для вас</div>
                    </div>
                    <div className={style.social}>
                        <div className={style.link}>Behance</div>
                        <div className={style.link}>FaceBook</div>
                        <div className={style.link}>Instagram</div>
                    </div>
                </div>
                <div className={style.body}>
                    <div className={style.rights}>Edible Works production  2013 — 2022 ©</div>
                    <div className={style.information}>
                        <div className={style.documents}>Документы</div>
                        <div className={style.author}>Sk</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;