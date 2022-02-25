import React from "react";

import style from './Footer.module.css';

const Footer = () => {
    return (
        <section className={style.footer}>
            <div className={style.content}>
                <div className={style.companyName}><span>BPMDROP (c) 2021</span></div>
                <div className={style.map}>
                    <a href="#">Главная</a>
                    <a href="#">Реклама</a>
                    <a href="#">FAQ</a>
                    <a href="#">ENG</a>
                    <a href="#">Лицензии</a>
                    <a href="#">Пользовательское соглашение</a>
                </div>
            </div>
        </section>
    );
}

export default Footer;