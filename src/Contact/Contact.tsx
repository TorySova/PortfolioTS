import React from 'react';
import style from './Contact.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'

const Contact = () => {
    return (
        <div className={style.contactBlock} id='contact'>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Ваши контакты</h2>
                <div className={style.form}>
                    <form className={style.elem} action="">
                        <input className={style.input} type="text" name="" id="" placeholder="Ваше имя..."/>
                        <input className={style.input} type="text" name="" id="" placeholder="Ваш номер..."/>
                        <textarea className={style.textarea} name="" id="" cols={20} rows={5} placeholder="Коментарии..."></textarea>
                    </form>
                </div>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    )
}

export default Contact