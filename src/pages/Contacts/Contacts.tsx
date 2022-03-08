import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import { getCategories } from "../../actions/categories";

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

    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="container" ref={refs.menuRef}>
            <div className={style.telephone}>+7 960 683 90 30</div>

            <div className={style.social}>
                <div className={style.link}>Behance</div>
                <div className={style.link}>ВКонтакте</div>
                <div className={style.link}>Instagram</div>
            </div>  

            <div className={style.tags}>
                { !data.isLoading && data.data.map(item => 
                    <Link className={style.tag} key={ item._id } to={`/product/${ item._id }`}>{ item.title }</Link>
                ) }
            </div>

            <div className={style.title}>Расскажите о задачах, мы оперативно ответим</div>

            <div className={style.fields}>
                <div className={`${style.input} ${ (fields.name.length > 0) && style.filled}`}>
                    <input 
                        type="text" 
                        placeholder="Edible@work.ru"
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
                            placeholder="Александр"
                            name="name"
                            value={ fields.name }
                            onChange={ onChangeEvent }
                        />
                        <div className={style.placeholder}>имя</div>
                    </div>

                    <div className={`${style.input} ${ (fields.name.length > 0) && style.filled}`}>
                        <input 
                            type={ (selected === 0 || selected === 3) ? "text" : "number" }
                            placeholder={ (selected === 0 || selected === 3) ? "alex74737" : "88005553535" }
                            name="contact"
                            value={ fields.contact }
                            onChange={ onChangeEvent }
                            min="1"
                        />
                        <div className={style.placeholder}>{ (selected === 0 || selected === 3) ? "страница" : "номер" }</div>

                        <div className={style.arrow} onClick={ () => setMenu(prev => !prev) }>
                            <svg className={`${ menu && style.rotate }`}width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        placeholder="Я бы хотел расчитать стоимость дизайна"
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