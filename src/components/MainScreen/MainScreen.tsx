import React from "react";

import image from '../../assets/MainScreen/images/slava-marlow-scaled.png';

import style from './MainScreen.module.css';

const MainScreen = () => {
    return (
        <>
            <div className={style.MainScreen}>
                <div className={style.content}>
                    <div className={style.banner}>
                        <div className={style.content}>
                            <div className={style.photo}>
                                <img src={image} alt={``}/>
                            </div>
                            <div className={style.titles}>
                                <h2>Открывай кейсы<br/>и становись</h2>
                                <h1>Звездой в<br/> рэп игре!</h1>
                            </div>
                            <figure className={style.duckTape}/>
                        </div>
                        <div className={style.ziplock}>
                            <figure className={style.body}/>
                            <h2 className={style.title}>Скидки 30% на все кейсы</h2>
                        </div>
                        <div className={style.buttons}>
                            <a href="" className={style.arrow}/>
                            <div className={style.content}>
                                <button className={style.filled}>Открыть</button>
                                <button>Как это работает?</button>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className={style.graphics}>
                    <figure className={style.background}/>
                    <figure className={style.backgroundLogo}/>
                    <figure className={style.backgroundRadialGradientOrange}/>
                    <figure className={style.backgroundRadialGradientYellow}/>
                    <figure className={style.backgroundApplication}/>
                    <figure className={style.backgroundTape}/>
                </figure>
            </div>
        </>
    )
}

export default MainScreen;