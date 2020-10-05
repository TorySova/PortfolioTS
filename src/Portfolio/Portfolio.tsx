import React from 'react';
import style from './Portfolio.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'
import Project from './Project/Project';
import { projectType } from '../State/State';


type PropsType ={
    project: projectType
}

const Portfolio = (props: PropsType) => {
    let projectElement = props.project.map(it => <Project title={it.title} img={it.img} deskription={it.deskription}/>)
    return (
        <div className={style.portfolioBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>Проекты</h2>
            <div className={style.elements}>
                {projectElement}
            </div>
            </div>
        </div>
    );
}

export default Portfolio;