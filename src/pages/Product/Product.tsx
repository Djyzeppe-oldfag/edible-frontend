import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import { getCategories, getCateogory } from "../../actions/categories";

import Boxes from "../../components/Boxes/Default";

import style from "./Product.module.css";

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const category = useSelector((state: AppState) => state.category);
    const categories = useSelector((state: AppState) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    useEffect(() => {
        if (id) dispatch(getCateogory(id));
    }, [id]);

    return (
        <>
            <div className="container">
                <div className={style.title}>{ category.data?.title }</div>
                <div className={style.description}>{ category.data?.description }</div>
                <div className={style.navigation}>
                    { !categories.isLoading && categories.data.map(item => 
                        <Link className={`${style.link} ${(id === item._id) && style.active}`} key={ item._id } to={`/product/${ item._id }`}>{ item.title }</Link>
                    )}
                </div>
            </div>
            
            { category.data?.boxes && <Boxes isLoading={ category.isLoading } data={ category.data.boxes } /> }
        </>
    );  
};

export default Product;