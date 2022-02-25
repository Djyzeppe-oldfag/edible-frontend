import React from "react";
import { Group } from "../../types/store";

import Case from "../Case/Case";

import style from './CaseList.module.css';

interface Props {
    data: Group,
    index: number
};

const CaseList = ({ data, index }: Props) => {
    return (
        <div className={style.CaseList}>
            <h1 tape-type={ index } className={style.title}>{ data.title }</h1>
            <div className={style.content}>
                { data.boxes.map(item => <Case key={ item.case_id } box={ item } /> ) }
            </div>
        </div>
    );
}

export default CaseList;