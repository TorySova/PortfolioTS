import React from 'react';
import style from './Greeting.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'

const Greeting = () => {
    return (
        <div className={style.block1}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Привет, меня зовут</span>
                    <h1>Виктория Некрасова</h1>
                    <p>и я front-end разработчик!</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Greeting;