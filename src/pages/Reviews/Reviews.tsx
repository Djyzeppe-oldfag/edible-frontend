import React from "react";

import image from "../../assets/reviews/1.jpg";

import style from "./Reviews.module.css";

const Reviews = () => {
    return (
        <div className="container">
            <div className={style.reviews}>
                <div className={style.unit}>
                    <img src={ image } alt="" />
                    <div className={style.title}>Аундентик коробочек</div>
                    <div className={style.description}>Синтетическое тестирование в значительной степени обусловливает важность модели развития. Банальные, но неопровержимые выводы, а также многие известные личности представлены в исключительно положительном свете. В рамках спецификации современных стандартов, независимые государства, превозмогая сложившуюся.</div>
                </div>

                <div className={style.unit}>
                    <img src={ image } alt="" />
                    <div className={style.title}>Аундентик коробочек</div>
                    <div className={style.description}>Синтетическое тестирование в значительной степени обусловливает важность модели развития. Банальные, но неопровержимые выводы, а также многие известные личности представлены в исключительно положительном свете. В рамках спецификации современных стандартов, независимые государства, превозмогая сложившуюся.</div>
                </div>

                <div className={style.unit}>
                    <img src={ image } alt="" />
                    <div className={style.title}>Аундентик коробочек</div>
                    <div className={style.description}>Синтетическое тестирование в значительной степени обусловливает важность модели развития. Банальные, но неопровержимые выводы, а также многие известные личности представлены в исключительно положительном свете. В рамках спецификации современных стандартов, независимые государства, превозмогая сложившуюся.</div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;