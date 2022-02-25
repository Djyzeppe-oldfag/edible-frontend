import React from "react";

import Cases from "../../components/Cases/Cases";

import image from "../../assets/profile/avatarka.jpg";

import style from "./Profile.module.css";

const Profile = () => {
    return (
        <>
            <div className={style.header}>
                <img src={ image } alt="" />
                <div className={style.wrapper}>
                    <div className={style.information}>
                        <div className={style.role}>арт-директор</div>
                        <div className={style.name}>Алекс Зубехин</div>
                        <div className={style.description}>Значимость этих проблем настолько очевидна, что существующая теория.</div>
                    </div>
                </div>
            </div>
            <Cases />
        </>
    );
};

export default Profile;