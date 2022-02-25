import React, { useState } from "react";
import { Link } from "react-router-dom";

import logotype_1 from "../../assets/header/logotype_1.svg";
import logotype_2 from "../../assets/header/logotype_2.svg";

import style from "./Header.module.css";

const Header = () => {
    var lastScroll = 0;
    window.addEventListener("scroll", (e) => {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const element = document.getElementById("header");
        if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            if (window.scrollY > 70 && element) {
                element.style.top = "-500px";
            };
        } else {
            lastScroll = currentScroll;
            if (element) element.style.top = "0";
        };
    });

    const [menu, setMenu] = useState(false);
    return (
        <div className={style.wrapper} id="header">
            <header className={style.header}>
                <div className="container">
                    <div className={style.content}>
                        <div className={style.fixed}>
                            <Link className={style.logotype} to="/">
                                <img src={logotype_1} alt="" />
                                <img className={style.edible} src={logotype_2} alt="" />
                            </Link>

                            <div className={style.languages}>
                                <div className={style.language+' '+style.active}>en</div>
                                <div className={style.language}>rus</div>
                            </div>
                        </div>
                        <div className={style.movable}>
                            <div className={style.hamburger+' '+(menu && style.active)} onClick={ () => setMenu(prev => !prev) } />
                            <div className={style.navigation}>
                                <Link className={style.link} to="/categories">Услуги</Link>
                                <Link className={style.link} to="/contacts">Связь</Link>
                                <Link className={style.link} to="/reviews">Отзывы</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            { menu && <div className={style.menu}>
                <div className="container">
                    <div className={style.menuNavigation}>
                        <Link className={style.menuLink} to="/categories" onClick={ () => setMenu(prev => !prev) }>Услуги</Link>
                        <Link className={style.menuLink} to="/contacts" onClick={ () => setMenu(prev => !prev) }>Связь</Link>
                        <Link className={style.menuLink} to="/reviews" onClick={ () => setMenu(prev => !prev) }>Отзывы</Link>
                    </div>
                </div>
                <button>Связаться</button>
            </div> }
        </div>
    );
};

export default Header;