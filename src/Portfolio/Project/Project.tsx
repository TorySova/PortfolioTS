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
                <img className={style.img} src={props.img} alt="project" />
                <a className={style.button} href={props.deskription} rel='noopener' target={'blank'}>
                {props.title}
                </a>
            </div>
        </div>
    );
}

export default Project;