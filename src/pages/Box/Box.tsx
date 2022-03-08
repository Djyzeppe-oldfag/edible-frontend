import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import { getBox } from "../../actions/boxes";

import Gallery from "../../components/Gallery/Gallery";
import More from "../../components/More/More";

import style from "./Box.module.css";

const Box = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.box);

    useEffect(() => {
        if (id) dispatch(getBox(id));
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="container">
            <div className={style.header}>
                <div className={style.title}>{ data.data?.title }</div>
                <div className={style.description}>{ data.data?.description }</div>
            </div>
            
            <Gallery data={ data.data?.images } />
            
            <div className={style.membmers}>
                { !data.isLoading && data.data?.members.map(item => 
                    <Link className={style.member} key={ item._id } to={`/profile/${ item.worker._id }`}>
                        <div className={style.role}>{ item.role }</div>
                        <div className={style.name}>{ item.worker.name }</div>
                    </Link>    
                ) }
            </div>

            { data.data?.more && data.data.more.length > 0 && <More data={ data.data.more } /> }
        </div>
    );
};

export default Box;