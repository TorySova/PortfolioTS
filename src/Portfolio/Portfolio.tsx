import React from 'react';
import style from './Portfolio.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'
import Project from './Project/Project';
import { projectType } from '../State/State';
import { Slide } from "react-awesome-reveal";

type PropsType ={
    project: projectType
}

const Portfolio = (props: PropsType) => {
    let projectElement = props.project.map((it, index) => <Project key={index} title={it.title} img={it.img} deskription={it.deskription}/>)
    return (
        <div className={style.portfolioBlock} id="project">
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>My project</h2>
            <div className={style.elements}>
                <Slide direction='up'>{projectElement}</Slide>
            </div>
            </div>
        </div>
    );
}

export default Portfolio;