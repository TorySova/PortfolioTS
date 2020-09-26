import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../Common/img/styles/Container.module.css'
import Skill from './Skill/Skill';


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS/TS"}
                        deskription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?"}
                        />
                    <Skill title={"CSS"}
                        deskription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?"}/>
                    <Skill title={"HTML"}
                        deskription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?"}/>
                    <Skill title={"HTML"} 
                        deskription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?"}/>
                    <Skill title={"HTML"} 
                        deskription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?"}/>
                    <Skill title={"HTML"} 
                        deskription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus quod ipsa incidunt nostrum ut, nulla a tempora non consectetur?"}/>
                </div>
            </div>
            
        </div>
    );
}

export default Skills;