import React from 'react';
import style from './Portfolio.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'
import Project from './Project/Project';


const Portfolio = () => {
    return (
        <div className={style.portfolioBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>Мои работы</h2>
            <div className={style.elements}>
                 <Project />
                 <Project />
                 <Project />
                 <Project />
            </div>
            </div>
        </div>
    );
}

export default Portfolio;