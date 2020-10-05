import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h4>Связаться со мной</h4>
                <div className={style.connection}>
                    <img src={'https://image.flaticon.com/icons/png/512/87/87390.png'} alt="instagram" className={style.item}/>
                    <img src={'https://www.flaticon.com/svg/static/icons/svg/25/25231.svg'} alt="gitHub" className={style.item}/>
                    <img src={'https://cdn.iconscout.com/icon/free/png-256/telegram-1867901-1580057.png'} alt="telegram" className={style.item}/>
                    <img src={'https://www.nicepng.com/png/detail/19-198727_png-file-linkedin-icon-png-black.png'} alt="linkedin" className={style.item}/>
                </div>
                <h5>© 2020 Все права защищены</h5>
            </div>
        </div>
    )
}

export default Footer;