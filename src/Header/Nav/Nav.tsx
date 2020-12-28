import React from 'react';
import style from './Nav.module.css'
import styleContainer from '../../Common/img/styles/Container.module.css'

const Nav = () => {
  return (
    <div className={style.nav}>
      <a href="#main">Main</a>
      <a href="#skill">Skills</a>
      <a href="#project">Project</a>
      <a href="#contact">Contacts</a>
    </div>
  );
}

export default Nav