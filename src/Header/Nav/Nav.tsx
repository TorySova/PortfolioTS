import React from 'react';
import style from './Nav.module.css'
import styleContainer from '../../Common/img/styles/Container.module.css'

const Nav = () => {
  return (
    <div className={style.nav}>
      <a href="">Главная</a>
      <a href="">Скилы</a>
      <a href="">Проекты</a>
      <a href="">Контакты</a>
    </div>
  );
}

export default Nav