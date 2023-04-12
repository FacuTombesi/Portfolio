import React from "react";
import style from "../styles/Skills.module.css";
import skillREACT from "../assets/skillREACT.png";
import skillREDUX from "../assets/skillREDUX.png";
import skillJAVASCRIPT from "../assets/skillJAVASCRIPT.png";
import skillNODEJS from "../assets/skillNODEJS.png";
import skillEXPRESS from "../assets/skillEXPRESS.png";
import skillSEQUELIZE from "../assets/skillSEQUELIZE.png";
import skillPOSTGRESQL from "../assets/skillPOSTGRESQL.png";
import skillHTML from "../assets/skillHTML.png";
import skillCSS from "../assets/skillCSS.png";
import skillADOBEXD from "../assets/skillADOBEXD.png";
import skillAFTEREFFECTS from "../assets/skillAFTEREFFECTS.png";
import skillILLUSTRATOR from "../assets/skillILLUSTRATOR.png";
import skillPREMIEREPRO from "../assets/skillPREMIEREPRO.png";

const Skills = () => {
    return (
        <section className={style.skills} id="skills">
            <div className={style.skillsCont}>
                <p className={style.skillsTitle}>TECH SKILLS</p>
                <hr color='#00bedd' width='10%' />
                <div className={style.skillsIconCont}>
                    <div className={style.skillsIconColumn}>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillJAVASCRIPT}
                                alt="Javascript"
                                title="Javascript"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Javascript</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillREACT}
                                alt="React"
                                title="React"
                                loading="lazy"
                            />
                            <p className={style.skillName}>React</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillREDUX}
                                alt="Redux"
                                title="Redux"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Redux</p>
                        </div>
                    </div>
                    <div className={style.skillsIconColumn}>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillNODEJS}
                                alt="Node.JS"
                                title="Node.JS"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Node.JS</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillEXPRESS}
                                alt="Express"
                                title="Express"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Express</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillSEQUELIZE}
                                alt="Sequelize"
                                title="Sequelize"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Sequelize</p>
                        </div>
                    </div>
                    <div className={style.skillsIconColumn}>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillPOSTGRESQL}
                                alt="PostgreSQL"
                                title="PostgreSQL"
                                loading="lazy"
                            />
                            <p className={style.skillName}>PostgreSQL</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillHTML}
                                alt="HTML"
                                title="HTML"
                                loading="lazy"
                            />
                            <p className={style.skillName}>HTML</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillCSS}
                                alt="CSS"
                                title="CSS"
                                loading="lazy"
                            />
                            <p className={style.skillName}>CSS</p>
                        </div>
                    </div>
                </div>
                <p className={style.skillsTitle}>DESIGN SKILLS</p>
                <hr color='#00bedd' width='10%' />
                <div className={style.skillsIconCont}>
                    <div className={style.skillsIconColumn}>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillAFTEREFFECTS}
                                alt="After Effects"
                                title="After Effects"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Adobe After Effects</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillILLUSTRATOR}
                                alt="Adobe Illustrator"
                                title="Adobe Illustrator"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Adobe Illustrator</p>
                        </div>
                    </div>
                    <div className={style.skillsIconColumn}>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillPREMIEREPRO}
                                alt="Adobe Premiere Pro"
                                title="Adobe Premiere Pro"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Adobe Premiere Pro</p>
                        </div>
                        <div className={style.skillInfo}>
                            <img
                                className={style.skillIcon}
                                src={skillADOBEXD}
                                alt="Adobe XD"
                                title="Adobe XD"
                                loading="lazy"
                            />
                            <p className={style.skillName}>Adobe XD</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Skills;