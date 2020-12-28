import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock} id="contact">
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h4>Contact with me</h4>
                <div className={style.connection}>
                    <a href="https://www.instagram.com/nekrsova/" target="_blank">
                        <img src={'https://image.flaticon.com/icons/png/512/87/87390.png'} className={style.connectionElem} />
                    </a>
                    <a href="https://github.com/TorySova" target="_blank">
                        <img src={'https://www.flaticon.com/svg/static/icons/svg/25/25231.svg'} className={style.connectionElem} />
                    </a>
                    <a href="https://t.me/TorySova" target="_blank">
                        <img src={'https://cdn.iconscout.com/icon/free/png-256/telegram-1867901-1580057.png'} className={style.connectionElem} />
                    </a>
                    <a href="https://www.linkedin.com/in/viktoriia-nekrasova-090705193/" target="_blank">
                        <img src={'https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/linkedin-512.png'} className={style.connectionElem} />
                    </a>
                </div>
                <h5>© 2020 All rights reserved</h5>
            </div>
        </div>
    )
}

export default Footer;