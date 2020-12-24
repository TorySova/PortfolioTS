import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'
import Skill from './Skill/Skill';
import { skillsType } from '../State/State';
import { Zoom } from "react-awesome-reveal";

type PropsType = {
    skills: skillsType
}

const Skills = (props: PropsType) => {
    let skillElement = props.skills.map(it => <Skill title={it.title} img={it.img} />)
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Технологии</h2>
                
                    <div className={style.skills}>
                        <Zoom>{skillElement}</Zoom>
                    </div>
                
            </div>

        </div>
    );
}

export default Skills;