import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGithub, faHtml5, faInstagram, faJsSquare, faLinkedinIn, faReact, faTelegram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h4>Связаться со мной</h4>
                <div className={style.connection}>
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                    <FontAwesomeIcon icon={faTelegramPlane} size='2x' />
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </div>
                <h5>© 2020 Все права защищены</h5>
            </div>
        </div>
    )
}

export default Footer;