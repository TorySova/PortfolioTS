import React from 'react';
import style from './Skill.module.css';

type PropsType = {
    title: string
    deskription: string
}

const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <img alt="js" className={style.icon}/>
            {/* <div className={style.icon}>{props.img}</div> */}
            <h3>{props.title}</h3>
            <span className={style.deskription}>
                {props.deskription}
            </span>
        </div>
    );
}

export default Skill;