import React from "react";
import { Link } from "react-router-dom";

import { Box } from "../../types/store";

import image from "../../assets/Cases/images/case.png";

import style from './Case.module.css';

interface Props {
    box: Box
};

const Case = ({ box }: Props) => {
    return (
        <Link className={style.case} to={`/case/${ box.case_id }`}>
            <h2>BETA</h2>
            <img src={ image } className={style.image}/>
            <div className={style.prices}>
                { box.price_without_discount && <div className={style.oldPrice}><span className={style.val}>{ box.price_without_discount }</span></div> }
                <div className={style.price}><span className={style.val}>{ box.price }</span></div>
            </div>
            <div className={style.title}>{ box.title }</div>
        </Link>
    );
}

export default Case;