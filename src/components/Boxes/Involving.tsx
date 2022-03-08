import React from "react";
import { Link } from "react-router-dom";

import style from "./Boxes.module.css";

interface Props {
    isLoading: boolean,
    boxes: [{
        box: {
            _id: string,
            image: string, 
            description: string
        },
        role: string,
        _id: string
    }]
};

const Involving = ({ isLoading, boxes }: Props) => {
    return (
        <div className={`container ${style.conteiner}`}>
            <div className={style.cases}>
                { !isLoading && boxes?.map(item => 
                    <Link className={style.case} to={`/box/${ item.box._id }`} key={ item._id }>
                        <div className={style.die}>
                            <div className={style.title}>{ item.role }</div>
                        </div>
                        <img src={ item.box.image } alt="" />
                        <div className={style.description}>{ item.box.description }</div>
                    </Link>
                ) }
            </div>
        </div>
    );
};

export default Involving;