import React from 'react';
import style from './Project.module.css';


const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.button}>Смотреть</button>
            </div>
            <h3>Название проекта</h3>
            <span className={style.deskription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic error similique voluptate tempora! Distinctio officia at earum totam sit.
            </span>
        </div>
    );
}

export default Project;