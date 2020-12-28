import React from 'react';
import { skillsType } from '../../State/State';
import style from './Skill.module.css';

type PropsType = {
    title: string
    img: string
}

const Skill = (props: PropsType) => {
    return (
        <div>
            <div className={style.skill}>
                <img alt="js" className={style.icon} src={props.img} />
            </div>
            <div className={style.title}>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default Skill;