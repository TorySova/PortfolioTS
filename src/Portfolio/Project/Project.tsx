import React from 'react';
import style from './Project.module.css';

type PropsType = {
    title: string
    img: string
    deskription: string
}

const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <img className={style.img} src={props.img} alt="dfg"/>
                <button className={style.button}>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.deskription}>
                {props.deskription}
            </span>
        </div>
    );
}

export default Project;