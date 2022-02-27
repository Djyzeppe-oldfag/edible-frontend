import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import { getWorker } from "../../actions/worker";

import Involving from "../../components/Boxes/Involving";

import style from "./Profile.module.css";

const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.worker);

    useEffect(() => {
        if (id) dispatch(getWorker(id));
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={style.header}>
                <img src={`http://edibleworks.ru/${ data.data?.image }`} alt="" />
                <div className={style.wrapper}>
                    <div className={style.information}>
                        <div className={style.role}>{ data.data?.role }</div>
                        <div className={style.name}>{ data.data?.name }</div>
                        <div className={style.description}>{ data.data?.description }</div>
                    </div>
                </div>
            </div>

            { data.data?.boxes && <Involving isLoading={ data.isLoading } boxes={ data.data.boxes } /> }
        </>
    );
};

export default Profile;