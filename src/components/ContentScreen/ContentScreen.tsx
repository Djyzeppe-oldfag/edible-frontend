import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";

import { getList } from "../../actions/boxes";

import CaseList from "../CaseList/CaseList";

import style from './ContentScreen.module.css';

const ContentScreen = () => {
    const boxes = useSelector((state: AppState) => state.boxes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList());
    }, []);

    return (
        <>
            <div className={style.ContentList}>
                { boxes.data.map((item, index) => <CaseList key={ item.category_id } data={ item } index={ index } /> ) }
            </div>
        </>
    );
};

export default ContentScreen;