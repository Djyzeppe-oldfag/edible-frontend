import React from "react";
import { Link } from "react-router-dom";

import style from "./More.module.css";

interface Props {
    data: [
        {
            image: string,
            _id: string
        }
    ]
};

const More = ({ data }: Props) => {
    return (
        <div className={style.more}>
            <div className={style.title}>Ещё</div>

            <div className={style.collection}>
                { data.map(item => 
                    <Link className={style.unit} key={ item._id } to={`/box/${ item._id }`}>
                        <img src={ item.image } alt="" />
                    </Link>
                ) }
            </div>
        </div>
    );
};

export default More;