import React from "react";

import style from "./Gallery.module.css";

interface Props {
    data?: string[]
};

const Gallery = ({ data }: Props) => {
    return (
        <div className={style.gallery}>
            { data?.map((item, index) => 
                <div className={style.unit} key={ index }>
                    <img src={`http://edibleworks.ru/${ item }`} alt="" />
                </div>
            ) }
        </div>
    );
};

export default Gallery;