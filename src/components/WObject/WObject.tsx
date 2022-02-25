import React from "react";
import { WObject as Object } from "../../types/store";

import image from "../../assets/Cases/images/case.png";

import style from './WObject.module.css';

interface Props {
    data: Object
};

const WObject = ({ data }: Props) => {
    return (
        <div className={style.case}>
            <img src={ image } className={style.image}/>
            <div className={style.title}>{` ${ data.title } (${data.type}) `}</div>
        </div>
    );
}

export default WObject;