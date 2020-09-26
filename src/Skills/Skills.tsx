import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'
import Skill from './Skill/Skill';
import { skillsType } from '../State/State';

type PropsType = {
    skills: skillsType
}

const Skills = (props:PropsType) => {
    let skillElement = props.skills.map(it => <Skill title={it.title} img={it.img} deskription={it.deskription}/>)
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    {skillElement}
                </div>
            </div>
            
        </div>
    );
}

export default Skills;