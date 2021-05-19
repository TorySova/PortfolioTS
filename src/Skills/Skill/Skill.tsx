import React from 'react';
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
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default Skill;