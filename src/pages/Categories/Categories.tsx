import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import { getCategories } from "../../actions/categories";

import style from "./Categories.module.css";

const Categories = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="container">
            <div className={style.categories}>
                { !data.isLoading && data.data.map(item => 
                    <Link className={style.unit} to={`/product/${ item._id }`} key={ item._id }>
                        <img src={ item.image } alt="" />
                        <div className={style.title}>{ item.title }</div>
                    </Link>
                ) }
            </div>
        </div>
    );
};

export default Categories;