import React, { useContext } from "react";
import style from "../styles/ProjectsSection.module.css";
import LangContext from "../styles/language/LangContext";
import langs from "../styles/language/langs.json";
import projects from "../assets/projects/projects.json";

/* ---------- PROJECTS ---------- */
import projOne from "../assets/img/thumbnailsPORTFOLIO.jpg";
import projTwo from "../assets/img/thumbnailsVOYHENRY.jpg";

/* ---------- SKILLS ---------- */
import skillREACT from "../assets/img/skillREACT.png";
import skillREDUX from "../assets/img/skillREDUX.png";
import skillJAVASCRIPT from "../assets/img/skillJAVASCRIPT.png";
import skillNODEJS from "../assets/img/skillNODEJS.png";
import skillEXPRESS from "../assets/img/skillEXPRESS.png";
import skillSEQUELIZE from "../assets/img/skillSEQUELIZE.png";
import skillPOSTGRESQL from "../assets/img/skillPOSTGRESQL.png";
import skillHTML from "../assets/img/skillHTML.png";
import skillCSS from "../assets/img/skillCSS.png";
import skillADOBEXD from "../assets/img/skillADOBEXD.png";
import skillILLUSTRATOR from "../assets/img/skillILLUSTRATOR.png";

const ProjectsSection = () => {
    const { lang } = useContext(LangContext);

    return (
        <section lang={langs[lang]} className={style.projects} id="projects">
            <div className={style.projCont}>
                <p className={style.projSecTitle}>{langs[lang].prj_title}</p>
                <hr color='#00bedd' width='10%' />
                {/* ------------- PROJECT 1 ------------- */}
                <a href="/projects/portfolio">
                    <div className={style.latestProj}>
                        <img
                            className={style.projImg}
                            src={projOne}
                            alt="voyHenry"
                            title="voyHenry"
                            loading="lazy"
                        />
                        <div className={style.projInfo}>
                            <p className={style.projTitle}>{projects.portfolio[lang].name}</p>
                            <hr color='#00bedd' width='10%' />
                            <p className={style.projSummary}>{projects.portfolio[lang].summary}</p>
                            <div className={style.projDate}>
                                <p className={style.projDateTitle}>{langs[lang].prj_realizationDate}&nbsp;</p>
                                <p className={style.projDateDate}>{projects.portfolio[lang].date}</p>
                            </div>
                            <p className={style.projTech}>{langs[lang].prj_techUsed}&nbsp;</p>
                            <div className={style.projTechList}>
                                <img
                                    className={style.projTechIcon}
                                    src={skillJAVASCRIPT}
                                    alt="Javascript"
                                    title="Javascript"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillREACT}
                                    alt="React"
                                    title="React"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillHTML}
                                    alt="HTML"
                                    title="HTML"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillCSS}
                                    alt="CSS"
                                    title="CSS"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillADOBEXD}
                                    alt="AdobeXD"
                                    title="AdobeXD"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillILLUSTRATOR}
                                    alt="Adobe Illustrator"
                                    title="Adobe Illustrator"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </a>
                {/* ------------------------------------- */}
                {/* ------------- PROJECT 2 ------------- */}
                <a href="/projects/voyhenry">
                    <div className={style.latestProj}>
                        <img
                            className={style.projImg}
                            src={projTwo}
                            alt={projects.voyhenry[lang].name}
                            title={projects.voyhenry[lang].name}
                            loading="lazy"
                        />
                        <div className={style.projInfo}>
                            <p className={style.projTitle}>{projects.voyhenry[lang].name}</p>
                            <hr color='#00bedd' width='10%' />
                            <p className={style.projSummary}>{projects.voyhenry[lang].summary}</p>
                            <div className={style.projDate}>
                                <p className={style.projDateTitle}>{langs[lang].prj_realizationDate}&nbsp;</p>
                                <p className={style.projDateDate}>{projects.voyhenry[lang].date}</p>
                            </div>
                            <p className={style.projTech}>{langs[lang].prj_techUsed}&nbsp;</p>
                            <div className={style.projTechList}>
                            <img
                                    className={style.projTechIcon}
                                    src={skillJAVASCRIPT}
                                    alt="Javascript"
                                    title="Javascript"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillREACT}
                                    alt="React"
                                    title="React"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillREDUX}
                                    alt="Redux"
                                    title="Redux"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillNODEJS}
                                    alt="Node.JS"
                                    title="Node.JS"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillEXPRESS}
                                    alt="Express"
                                    title="Express"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillSEQUELIZE}
                                    alt="Sequelize"
                                    title="Sequelize"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillPOSTGRESQL}
                                    alt="PostgreSQL"
                                    title="PostgreSQL"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillHTML}
                                    alt="HTML"
                                    title="HTML"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillCSS}
                                    alt="CSS"
                                    title="CSS"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillADOBEXD}
                                    alt="AdobeXD"
                                    title="AdobeXD"
                                    loading="lazy"
                                />
                                <img
                                    className={style.projTechIcon}
                                    src={skillILLUSTRATOR}
                                    alt="Adobe Illustrator"
                                    title="Adobe Illustrator"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </a>
                {/* ------------------------------------- */}
                <a href="/projects" style={{ textAlign: "center" }}>
                    <button className={style.projBtn}>{langs[lang].prj_button}</button>
                </a>
            </div>
        </section>
    );
};

export default ProjectsSection;