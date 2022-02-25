import React, {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { useParams } from 'react-router-dom';

import { get, openCase } from "../../actions/boxes";


import RouleteItem from "../../components/RouleteItem/RouleteItem";
import WObject from "../../components/WObject/WObject";

import style from "./Box.module.css";
import useCase from "../../hooks/useCase";

const Box = () => {
    const [offset, setOffset] = useState(0);
    const { case_id } = useParams();
    const { getCases, openCase, content, ratio, target } = useCase();
    const caseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getCases(Number(case_id));
    }, []);

    console.log(offset);

    useEffect(() => {
        const width = caseRef?.current?.offsetWidth;
        if (width && ratio)
        {
            let caseOffset = 0;
            const tile_size = 100 / 5;
            //Сдвиг по первому списку кейсов
            caseOffset += tile_size * content.length;
            //Сдвиг до выигранного кейса
            console.log(Math.floor(content.length * ratio), content.length, ratio);
            caseOffset += Math.floor(content.length * ratio) * tile_size;
            //Отцентровка левого края кейса по центру экрана
            caseOffset -= 50;
            //Финальная отцентровка
            caseOffset += tile_size / 2;
            setOffset(caseOffset);
        }
    }, [ratio]);

    const onOpenCase = () => {
        openCase(Number(case_id));
    }

    console.log(content, target);

    return (
        <div className={style.cases}>
            <div className={style.title}><span>Открыть кейс</span></div>
            <div className={style.content}>
                <div className={style.roulete}>
                    <figure className={style.selectArrow}/>
                    <div className={style.body} ref={caseRef}>
                        <div className={style.listcases} style={{transform: `translateX(-${offset}%)`, transition: "transform 5s ease-out"}}>
                            { content.map((item, index) => <RouleteItem key={ index } typeStyle="openCase" img={require(`../../assets/Cases/images/cs20.png`)} color="red"/> ) }
                            { content.map((item, index) => <RouleteItem key={ index } typeStyle="openCase" img={require(`../../assets/Cases/images/cs20.png`)} color="red"/> ) }
                            { content.map((item, index) => <RouleteItem key={ index } typeStyle="openCase" img={require(`../../assets/Cases/images/cs20.png`)} color="red"/> ) }
                        </div>
                    </div>
                </div>
                <button className={style.submit} onClick={onOpenCase}>Открыть</button>
                <div className={style.possiblePrize}>
                    <div className={style.title}><span>Что может выпасть?</span></div>
                    <div className={style.body}>
                        { content.map((item, index) => <WObject key={ index } data={ item } />) }
                    </div>
                </div>
            </div>
            <figure className={style.bg}/>
        </div>
    );
};

export default Box;