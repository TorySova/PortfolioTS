import React, { useEffect, useState } from 'react';
import style from './Greeting.module.css';
import styleContainer from '../Common/img/styles/Container.module.css';
import photo from '../Common/img/styles/photo.jpg';
import Particles from 'react-particles-js';

const particlesOptions = {  
    "particles": {
        "number": {
            "value": 150
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

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({width: 0});

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    const size = useWindowSize();
    
    return (
        <div className={style.block1} id="main">
            {
                size.width < 1000
                ? null
                : <Particles className={style.particles}  params={particlesOptions}/>
            }
           
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hello, I am </span>
                    <h2>Victoriia Nekrasova</h2>
                    <p>I`m a React developer!</p>
                </div>
                <div className={style.photoContainer}>
                    <img className={style.photo} src={photo} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Greeting;