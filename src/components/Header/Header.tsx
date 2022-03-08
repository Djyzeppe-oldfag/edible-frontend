import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import { changeLanguage } from "../../actions/localization";
import localization from "../../utils/localization";

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
                element.style.top = "-1000px";
            };
        } else {
            lastScroll = currentScroll;
            if (element) element.style.top = "0";
        };
    });

    const [menu, setMenu] = useState(false);
    
    const data = useSelector((state: AppState) => state.localization.data);
    const [locale, setLocale] = useState(data);
    const dispatch = useDispatch();

    const onChangeLanguage = (language: string) => {
        dispatch(changeLanguage(language));
        localization.setLanguage(language);
        localStorage.setItem("language", language);
        setLocale(language);
    };

    return (
        <div className={style.wrapper} id="header">
            <header className={style.header}>
                <div className="container">
                    <div className={style.content}>
                        <div className={style.fixed}>
                            <Link className={style.logotype} to="/" onClick={ () => setMenu(false) }>
                                <img src={logotype_1} alt="" />
                                <img className={style.edible} src={logotype_2} alt="" />
                            </Link>

                            <div className={style.languages}>
                                <div className={style.language+" "+(locale==="eng" && style.active)} onClick={ () => onChangeLanguage("eng") }>en</div>
                                <div className={style.language+" "+(locale==="rus" && style.active)} onClick={ () => onChangeLanguage("rus") }>{ localization.rus }</div>
                            </div>
                        </div>
                        <div className={style.movable}>
                            <div className={style.hamburger+' '+(menu && style.active)} onClick={ () => setMenu(prev => !prev) } />
                            <div className={style.navigation}>
                                <Link className={ style.link } to="/categories">{ localization.header__navigation_services }</Link>
                                <Link className={ style.link } to="/contacts">{ localization.header__navigation_connection }</Link>
                                <Link className={ style.link } to="/reviews">{ localization.header__navigation_reviews }</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            { menu && <div className={style.menu}>
                <div className="container">
                    <div className={style.menuNavigation}>
                        <Link className={style.menuLink} to="/categories" onClick={ () => setMenu(false) }>{ localization.header__navigation_services }</Link>
                        <Link className={style.menuLink} to="/contacts" onClick={ () => setMenu(false) }>{ localization.header__navigation_connection }</Link>
                        <Link className={style.menuLink} to="/reviews" onClick={ () => setMenu(false) }>{ localization.header__navigation_reviews }</Link>
                    </div>
                </div>
                <Link className={style.menuButton} to="/contacts" onClick={ () => setMenu(false) }>Связаться</Link>
            </div> }
        </div>
    );
};

export default Header;