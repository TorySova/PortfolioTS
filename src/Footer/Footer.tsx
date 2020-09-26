import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Имя Имя</h3>
                <div className={style.connection}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <h3>Права бла бла</h3>
            </div>
        </div>
    )
}

export default Footer;