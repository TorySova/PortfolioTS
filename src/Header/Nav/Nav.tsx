import React from 'react';
import style from './Nav.module.css'
import styleContainer from '../../Common/img/styles/Container.module.css'

const Nav = () => {
  return (
    <div className={style.nav}>
      <a href="#main">Главная</a>
      <a href="#skill">Скилы</a>
      <a href="#project">Проекты</a>
      <a href="#contact">Контакты</a>
    </div>
  );
}

export default Nav