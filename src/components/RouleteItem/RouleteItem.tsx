import React from "react";

import s from './Item.module.css';

const backblur = <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_0_1035)">
<path d="M18 37.9567C18 36.3242 19.2739 34.9795 20.8979 34.8141C47.7978 32.0737 37.9474 18 51 18C65.0099 18 53.8141 30.6542 79.1992 34.6665C80.7885 34.9177 82 36.2655 82 37.8745C82 39.631 80.5761 41.0549 78.8196 41.0549H21.0983C19.3871 41.0549 18 39.6678 18 37.9567Z" fill="url(#paint0_linear_0_1035)"/>
</g>
<defs>
<filter id="filter0_f_0_1035" x="0" y="0" width="100" height="59.0549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_0_1035"/>
</filter>
<linearGradient id="paint0_linear_0_1035" x1="50" y1="18" x2="50" y2="41.0549" gradientUnits="userSpaceOnUse">
<stop stop-color="#46FF59" stop-opacity="0"/>
<stop offset="0.921875" stop-color="#6BFF46"/>
</linearGradient>
</defs>
</svg>;

const RouleteItem = (props: {color?: string, typeStyle?: any, img?: any, test?:any}) => {
    var color;
    var customStyle;

    switch(props.typeStyle){
        case 'openCase':
            customStyle = s.openCase;
        break;
    }
    return (
        <div className={s.item+(props.typeStyle != null?(' '+customStyle):'')}>
            <div className={s.content}>
                <div className={s.body}>{props.img?<img src={props.img}/>:''}</div>
                <figure className={s.background}>
                    <figure className={s.headLight}></figure>
                    <figure className={s.lowerLight}></figure>
                    <figure className={s.bodyBorder}></figure>
                    {backblur}
                </figure>
            </div>
        </div>
    )
}

export default RouleteItem;