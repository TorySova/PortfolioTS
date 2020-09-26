import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Виктория Некрасова</h3>
                <div className={style.connection}>
                    <img src={'https://image.flaticon.com/icons/png/512/87/87390.png'} className={style.item}/>
                    <img src={'https://www.flaticon.com/svg/static/icons/svg/25/25231.svg'} className={style.item}/>
                    <img src={'https://www.pinclipart.com/picdir/big/81-815589_facebook-comments-black-fb-logo-png-clipart.png'} className={style.item}/>
                    <img src={'https://image.flaticon.com/icons/png/512/16/16066.png'} className={style.item}/>
                </div>
                <h4>© 2020 Все права защищены</h4>
            </div>
        </div>
    )
}

export default Footer;