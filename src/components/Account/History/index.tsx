import React, { useState, useEffect } from "react";

import s from './history.module.css';

const History = (props: {date?: string, sum?: string}) => {
    return (
        <div className={s.unit}>
            <div className={s.date}>{props.date}</div>
            <div className={s.sum}>{props.sum}</div>
        </div>
    )
}

export default History;