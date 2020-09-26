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
                {/* <div className={style.photo}></div> */}
                <img className={style.photo} src={"https://sun9-10.userapi.com/c623924/v623924423/13d8c/CbipZ1ZdFpM.jpg"} alt=""/>
            </div>
        </div>
    );
}

export default Greeting;