import React from 'react';
import { skillsType } from '../../State/State';
import style from './Skill.module.css';

type PropsType = {
    title: string
    img: string
}

const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <img alt="js" className={style.icon} src={props.img}/>
            {/* <div className={style.icon}>{props.img}</div> */}
            <h3>{props.title}</h3>
            
        </div>
    );
}

export default Skill;