import React, {useState, useEffect} from "react";

import style from "./Authorization.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../store";
import useAuth from "../../../hooks/useAuth";

const Authorization = ({onClose}: any) => {
    const [tab, setTab] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const {login, register, authError, isAuthorized} = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setError("");
    }, [tab]);

    useEffect(() => {
        if (isAuthorized)
            onClose();
    }, [isAuthorized]);

    useEffect(() => {
        if (authError)
            setError(authError);
    }, [authError]);

    const onSubbmitEvent = () => {
        if (email.length === 0) {
            setError("Не указан Email-адрес");
            return
        }
        if (password.length === 0) {
            setError("Не указан пароль");
            return
        }
        if (authError)
            return;
        if (tab)
            if (password !== repeatPassword)
            {
                setError("Не совпадают пароли");
                return
            }
        if (tab)
            register(email, password);
        else
            login(email, password);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.popup}>
                <button className={style.close} onClick={onClose}/>
                <div className={style.content}>
                    <div className={style.header}>
                        <div className={style.title}>вход</div>
                        <div className={style.sociallist}>
                            <div className={style.unit + ' ' + style.vk}/>
                            <div className={style.unit + ' ' + style.vk}/>
                            <div className={style.unit + ' ' + style.vk}/>
                        </div>
                    </div>
                    <div className={style.body}>
                        <div className={style.manage}>
                            <p className={` ${style.unit} ${!tab && style.active}`}
                               onClick={() => setTab(false)}>Вход</p>
                            <p className={` ${style.unit} ${tab && style.active}`}
                               onClick={() => setTab(true)}>Регистрация</p>
                        </div>
                        {!tab ?
                            <form className={style.form}>
                                <input className={style.input} value={email} onChange={e => setEmail(e.target.value)}
                                       placeholder="Ваш @mail адрес"/>
                                <input className={style.input} value={password}
                                       onChange={e => setPassword(e.target.value)} placeholder="Введите пароль"/>
                            </form>
                            :
                            <form className={style.form}>
                                <input className={style.input} value={email} onChange={e => setEmail(e.target.value)}
                                       placeholder="Ваш @mail адрес"/>
                                <input className={style.input} value={password}
                                       onChange={e => setPassword(e.target.value)} placeholder="Введите пароль"/>
                                <input className={style.input} value={repeatPassword}
                                       onChange={e => setRepeatPassword(e.target.value)}
                                       placeholder="Повторите пароль"/>
                            </form>}
                    </div>
                </div>
                <div className={style.consolePanel}>
                    <div className={style.error}>{error}</div>
                    <button className={style.submit}
                            onClick={onSubbmitEvent}>{tab ? "Зарегестрироваться" : "Войти"}</button>
                </div>
            </div>
        </div>
    )
}

export default Authorization;