import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

import { getProfile } from "../../actions/profile";
import { login, logout } from "../../actions/auth";

import style from './Header.module.css';

import logo from '../../assets/Header/icons/logo.svg';
import avatar from '../../assets/Account/images/avatar.jpg';
import money from '../../assets/Account/icons/money.svg';
import Authorization from "../Popups/Authorization/Authorization";

const Header = () => {
    const [showAuth, setShowAuth] = useState(false);
    const isAuth = useSelector((state: AppState) => state.auth.isAuth) || false;
    const profile = useSelector((state: AppState) => state.profile.data);

    const [burgerActive, setBurgerActive] = useState<boolean>(false);

    const dispatch = useDispatch();

    const onSubbmitEvent = () => {
        setShowAuth(true);
        //dispatch(login({ email: "odjyzeppe@mail.ru", password: "asdqwe13A@" }));
    };

    const onAuthClose = () => setShowAuth(false);

    useEffect(() => {
        if (isAuth) dispatch(getProfile());
    }, [isAuth]);

    return (
        <>
            {
                showAuth
                ?<Authorization onClose={onAuthClose}/>
                :''
            }
            <nav className={style.navbar}>
                <img className={style.logo} src={ logo } alt="" />
                { isAuth && <Link to="/profile" className={style.profile}>
                    <div className={style.name}>{ profile?.name }</div>
                    <div className={style.balance}>
                        <span className={style.val}>{ profile?.balance }</span>
                        <img src={ money } alt="" />
                    </div>
                    <img className={style.avatar} src={ avatar } alt="" />
                </Link> }
                <div className={style.burger+' '+(burgerActive && style.active || '')} onClick={() => setBurgerActive(prevState => !prevState)}/>
                <div className={style.links}>
                    
                    <Link to="/" className={style.active}>Главная</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/">Лицензии</Link>
                    <Link to="/forbeatmaker">Битмейкерам</Link>
                    <Link to="/" className={style.inactive}>Реклама</Link>

                    <a className={style.language} href="#">ENG</a>
                    
                    { !isAuth ? <button className={style.entrance} onClick={ onSubbmitEvent }>Войти</button> :<>
                        <div className={style.profile}>
                            <Link to="/profile" className={style.name}>{ profile?.name }</Link>
                            <div className={style.balance}>
                                <span className={style.val}>{ profile?.balance  }</span>
                                <img src={ money } alt="" />
                            </div>
                            <img className={style.avatar} src={ avatar } alt="" onClick={ () => dispatch(logout()) }/>
                        </div>
                        <button className={style.entrance+' '+style.exit} onClick={ () => dispatch(logout()) }>Выйти</button>
                    </> }
                </div>
            </nav>
        </>
    )
}

export default Header;