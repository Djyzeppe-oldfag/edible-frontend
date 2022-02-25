import React, { useEffect } from "react";
import SimpleBar from "simplebar-react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store"

import { getProfile } from "../../actions/profile";

import History from "../../components/Account/History";
import Beat from "../../components/Account/Beat";

import style from "./Profile.module.css";

import avatar_img from "../../assets/Account/images/avatar.jpg";

import "./scroll.css";

const Profile = () => {
    const data = useSelector((state: AppState) => state.profile.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <div className={style.account}>
            <div className={style.title}>
                <span>Личный кабинет</span>
            </div>
            <div className={style.content}>
                <div className={style.profile}>
                    <div className={style.header}>
                        <div className={style.avatar}>
                            <img src={ avatar_img } alt="" />
                        </div>
                        <span className={style.name}>{ data?.name }</span>
                        <div className={style.label}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.7183 5.4775H14.1806C13.6486 6.0095 13.1227 6.5415 12.5907 7.0735L10.7562 8.91411H3.43049V26.5497H21.066V19.2178C22.2095 18.0743 23.353 16.9308 24.4965 15.7873V28.2618C24.4965 29.2097 23.7261 29.9801 22.7782 29.9801H1.7183C0.770485 29.9801 0 29.2097 0 28.2618V7.18969C0 6.24187 0.770485 5.4775 1.7183 5.4775ZM29.6514 4.43184C29.8349 4.84766 29.8838 5.31851 30 5.7649C29.9694 6.11957 29.8471 6.39474 29.5964 6.63934C24.5332 11.6964 19.47 16.7535 14.413 21.8228C14.2173 22.0185 14.0033 22.1285 13.7403 22.1836C11.5573 22.6422 9.37424 23.1008 7.19119 23.5656C6.67754 23.6756 6.2923 23.2904 6.40236 22.7767C6.8671 20.5753 7.32572 18.3739 7.80881 16.1787C7.85772 15.9647 7.98614 15.7384 8.13901 15.5794C9.58826 14.1118 11.0497 12.6565 12.5051 11.2011C16.1068 7.59939 19.7085 3.99768 23.3041 0.389849C23.5671 0.120791 23.8606 -0.0137384 24.2152 0.0290663C24.6188 0.077986 25.0408 0.120791 25.4138 0.273665C27.3889 1.07472 28.7954 2.48728 29.6514 4.43184ZM13.0004 20.8077C12.9026 20.4836 12.8475 20.1351 12.6885 19.8415C12.0709 18.698 11.1843 17.8175 10.0163 17.2366C9.6861 17.0715 9.33755 16.9675 8.93396 17.0042C8.73828 17.9276 8.53649 18.8265 8.35915 19.7315C8.35915 19.7315 8.9095 17.8725 8.35915 19.7376C7.80881 21.6026 8.35915 21.8228 10.2731 21.6026C12.1871 21.3825 11.967 21.2419 12.817 21.0706C12.9821 21.0401 13.0432 20.9606 13.0004 20.8077Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div className={style.money}>
                        <button className={style.deposite}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="7.20264" y="0.243286" width="2.44865" height="16.3243" fill="white"/>
                                <rect x="16.5889" y="7.18103" width="2.44865" height="16.3243" transform="rotate(90 16.5889 7.18103)" fill="white"/>
                            </svg>
                            пополнить
                        </button>
                        <div className={style.balance}>{ data?.balance }</div>
                    </div>
                    <div className={style.body}>
                        <span className={style.id}>{`id ${data?.user_id}`}</span>
                        <p className={style.msg}>
                            Сообщите id пользователя при обращении в поддержку
                        </p>
                    </div>
                </div>
                <div className={`history-scroll ${ style.history }`}>
                    <div className={style.header}>История пополнений</div>
                    <div className={style.body}>
                        <SimpleBar>
                            <History sum={"500р"} date="16.07.21" />
                        </SimpleBar>
                    </div>
                </div>
                <div className={style.openCases}>
                    <div className={style.header}>Кейсов открыто</div>
                    <div className={style.body}>
                        <span className={style.value}>{ data?.cases_opened }</span>
                        <span className={style.desc}>штук</span>
                    </div>
                </div>
                <div className={style.dropBeats}>
                    <div className={style.header}>Битов дропнуто</div>
                    <div className={style.body}>
                        <span className={style.value}>{ data?.bits_dropped }</span>
                        <span className={style.desc}>штук</span>
                    </div>
                </div>
                <div className={`beats-scroll ${style.beats}`}>
                    <div className={style.header}>Все выпавшие биты</div>
                    <div className={style.body}>
                        <SimpleBar>
                            <table>
                                {data?.bits_histories && data.bits_histories.map(record =>
                                    <Beat 
                                        key={ record.bits_history_id }
                                        avatar={require('../../assets/Account/images/slava.png')}
                                        name="asdfasdfasdfasdf"
                                        date={ record.date }
                                        company="MP3 LEASING"
                                    /> 
                                )}
                            </table>
                        </SimpleBar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;