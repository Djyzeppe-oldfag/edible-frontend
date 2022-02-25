import React, { useState, useEffect } from "react";

import style from "./Contacts.module.css";

const Contacts = () => {
    const [fields, setFields] = useState({
        email: "",
        name: "",
        contact: "",
        question: ""
    });
    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        setFields({ ...fields, [e.currentTarget.name]: e.currentTarget.value });

    const [menu, setMenu] = useState(false);
    const [selected, setSelected] = useState(0);
    const list = ["ВКонтакте", "Telegram", "Whatsapp", "Instagram"];

    const refs = { menuRef: React.useRef<HTMLDivElement>(null) };

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (e.target === refs.menuRef.current) setMenu(false);
        });
    }, []);

    const onSelectEvent = (index: number) => {
        setSelected(index); 
        setMenu(false); 
        setFields({ ...fields, contact: "" });
    };

    return (
        <div className="container" ref={refs.menuRef}>
            <div className={style.telephone}>+7 960 683 90 30</div>

            <div className={style.social}>
                <div className={style.link}>Behance</div>
                <div className={style.link}>ВКонтакте</div>
                <div className={style.link}>Instagram</div>
            </div>  

            <div className={style.tags}>
                <div className={style.tag}>Логотип</div>
                <div className={style.tag}>Интерфейс</div>
                <div className={style.tag}>Айдентика</div>
                <div className={style.tag}>Сайт</div>
                <div className={style.tag}>Арт</div>
                <div className={style.tag}>3D графика</div>
                <div className={style.tag}>Приложение</div>
                <div className={style.tag}>Маркетинг</div>
                <div className={style.tag}>Менеджмент</div>
            </div>

            <div className={style.title}>Расскажите о задачах, мы оперативно ответим</div>

            <div className={style.fields}>
                <div className={`${style.input} ${ (fields.name.length > 0) && style.filled}`}>
                    <input 
                        type="text" 
                        placeholder="Пусто"
                        name="email"
                        value={ fields.email }
                        onChange={ onChangeEvent }
                    />
                    <div className={style.placeholder}>почта</div>
                </div>

                <div className={style.wrapper}>
                    <div className={`${style.input} ${ (fields.name.length > 0) && style.filled}`}>
                        <input 
                            type="text" 
                            placeholder="Пусто"
                            name="name"
                            value={ fields.name }
                            onChange={ onChangeEvent }
                        />
                        <div className={style.placeholder}>имя</div>
                    </div>

                    <div className={`${style.input} ${ (fields.name.length > 0) && style.filled}`}>
                        <input 
                            type={ (selected === 0 || selected === 3) ? "text" : "number" }
                            placeholder="Пусто"
                            name="contact"
                            value={ fields.contact }
                            onChange={ onChangeEvent }
                        />
                        <div className={style.placeholder}>{ (selected === 0 || selected === 3) ? "страница" : "номер" }</div>

                        <div className={style.arrow} onClick={ () => setMenu(prev => !prev) }>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8L6.5 2L1 8" stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>  

                        { menu && <div className={style.menu}>
                            { list.map((item, index) => 
                                <button className={`${ style.option } ${ selected === index && style.active }`} key={ index } onClick={ () => onSelectEvent(index) }>
                                    { item }
                                </button>
                            ) }
                        </div> }
                    </div>
                </div>
                <div className={`${style.input} ${ (fields.name.length > 0) && style.filled}`}>
                    <input 
                        type="text" 
                        placeholder="Пусто"
                        name="question"
                        value={ fields.question }
                        onChange={ onChangeEvent }
                    />
                    <div className={style.placeholder}>несколько слов о проекте</div>
                </div>
            </div>

            <button className={style.send}>Отправить</button>

            <div className={style.information}>Нажав на кнопку, я соглашаюсь на обработку <span>персональных данных</span></div>
        </div>
    );
};

export default Contacts;