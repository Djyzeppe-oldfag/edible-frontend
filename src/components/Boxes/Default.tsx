import React from "react";
import { Link } from "react-router-dom";
import { BoxMI } from "../../types/store";

import style from "./Boxes.module.css";

interface Props {
    isLoading: boolean,
    data: BoxMI[]
};

const Default = ({ isLoading, data }: Props) => {
    return (
        <div className={`container ${style.conteiner}`}>
            <div className={style.cases}>

                { !isLoading && data.map(item => 
                    <Link className={style.case} to={`/box/${ item._id }`} key={ item._id }>
                        <img src={`http://edibleworks.ru/${ item.image }`} alt="" />
                        <div className={style.description}>{ item.description }</div>
                    </Link>
                ) }

            </div>
        </div>
    );
};

export default Default;