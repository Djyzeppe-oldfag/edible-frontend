import React from "react";

import s from "./Information.module.css";

const Information = () => {
    return (
        <div className={s.popup}>
            <button className={s.close}></button>
            <div className={s.content}>
                <div className={s.text}>
                    Мы выслали письмо на Ваш адрес электронной почты. Откройте его и перейдите по ссылке, чтобы зарегестрироваться
                </div>
            </div>
            <div className={s.consolePanel}>
                <div className={s.error}>Неверный mail или пароль</div>
                <button className={s.submit+' '+s.waiting}>Ожидание...</button>
            </div>
        </div>
    );
};

export default Information;