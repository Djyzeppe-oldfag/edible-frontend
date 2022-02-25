import React, { useState, useEffect } from "react";

import s from './beat.module.css';

const dollar_icon = <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.0596 9.99368C8.19629 9.51659 7.27846 9.15309 6.36971 8.77596C5.84264 8.55786 5.33829 8.30341 4.893 7.949C4.01606 7.24926 4.18418 6.11333 5.21106 5.6635C5.50186 5.53628 5.80629 5.49539 6.11527 5.47721C7.30572 5.4136 8.43711 5.6317 9.51397 6.14968C10.0501 6.40868 10.2273 6.32689 10.4091 5.76801C10.5999 5.17733 10.759 4.57755 10.9362 3.98232C11.0543 3.58248 10.9089 3.31894 10.5318 3.15082C9.84112 2.84639 9.1323 2.62829 8.38713 2.51016C7.41477 2.36021 7.41477 2.35567 7.41023 1.37877C7.40568 0.00201946 7.40568 0.00201943 6.02439 0.00201943C5.82447 0.00201943 5.62454 -0.00252429 5.42462 0.00201943C4.77941 0.0201943 4.67036 0.133787 4.65218 0.783541C4.6431 1.07434 4.65218 1.36514 4.64764 1.66048C4.6431 2.52379 4.63855 2.51016 3.81159 2.81004C1.81235 3.53704 0.576461 4.90016 0.444693 7.08115C0.326556 9.01223 1.33526 10.3163 2.92102 11.2659C3.89793 11.8521 4.97933 12.1974 6.0153 12.6563C6.41969 12.8335 6.80591 13.038 7.14215 13.3197C8.13722 14.1421 7.95547 15.5098 6.77411 16.0277C6.14253 16.3049 5.4746 16.3731 4.7885 16.2867C3.72981 16.155 2.71656 15.8778 1.76237 15.3825C1.2035 15.0917 1.03992 15.169 0.849085 15.7733C0.685511 16.2958 0.540112 16.8229 0.394712 17.35C0.199332 18.0588 0.272031 18.2269 0.949047 18.5586C1.81235 18.9766 2.73473 19.1902 3.67528 19.3401C4.41137 19.4583 4.43409 19.4901 4.44317 20.2534C4.44772 20.5987 4.44772 20.9486 4.45226 21.2939C4.4568 21.7301 4.66582 21.9846 5.11564 21.9937C5.62454 22.0028 6.13798 22.0027 6.64688 21.9891C7.0649 21.98 7.27846 21.7528 7.27846 21.3303C7.27846 20.8577 7.30118 20.3806 7.283 19.9081C7.26028 19.4265 7.4693 19.1811 7.93276 19.0539C9.00053 18.7631 9.90928 18.1906 10.609 17.3363C12.5537 14.9736 11.8131 11.5158 9.0596 9.99368Z" fill="black"/>
</svg>;
const download_icon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4494 8.20463C13.3583 8.00325 13.1581 7.875 12.9376 7.875H10.6876V0.5625C10.6876 0.252 10.4356 0 10.1251 0H7.87507C7.56457 0 7.31257 0.252 7.31257 0.5625V7.875H5.06257C4.84207 7.875 4.64182 8.00438 4.55069 8.20463C4.45844 8.406 4.49444 8.64112 4.63957 8.80762L8.57707 13.3076C8.68394 13.4303 8.83807 13.5 9.00007 13.5C9.16207 13.5 9.31619 13.4291 9.42307 13.3076L13.3606 8.80762C13.5068 8.64225 13.5406 8.406 13.4494 8.20463Z" fill="black"/>
<path d="M15.1875 12.375V15.75H2.8125V12.375H0.5625V16.875C0.5625 17.4971 1.0665 18 1.6875 18H16.3125C16.9346 18 17.4375 17.4971 17.4375 16.875V12.375H15.1875Z" fill="black"/>
</svg>;

const Beat = (props: {avatar?: any, name?: string, date?: string, company?: string}) => {
    return (
        <tr className={s.beat}>
            <td><img src={props.avatar} className={s.avatar}/></td>
            <td className={s.name}>{props.name}</td>
            <td className={s.date}>{props.date}</td>
            <td className={s.company}>{props.company}</td>
            <td className={s.buttons}>
                <button className={s.buy}>{dollar_icon}Купить</button>
                <button className={s.download}>{download_icon}Скачать</button>
            </td>
        </tr>
    )
}

export default Beat;