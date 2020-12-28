import React from 'react';
import style from './Greeting.module.css';
import styleContainer from '../Common/img/styles/Container.module.css';
import photo from '../Common/img/styles/photo.jpg';
import Particles from 'react-particles-js';




const particlesOptions = {  
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        },
        color: {
            value: '#000000'
          },
          line_linked: {
            color: '#000000',
            
          }
    },
    
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};

const Greeting = () => {
    return (
        <div className={style.block1} id="main">
           <Particles className={style.particles}  params={particlesOptions}/>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hello, I am </span>
                    <h2>Victoriia Nekrasova</h2>
                    <p>I am React developer!</p>
                </div>
                {/* <div className={style.photo}></div> */}
                <div className={style.photoContainer}>
                    <img className={style.photo} src={photo} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Greeting;