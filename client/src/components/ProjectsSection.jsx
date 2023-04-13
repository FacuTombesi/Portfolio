import React, { useContext } from "react";
import style from "../styles/ProjectsSection.module.css";
import projOne from "../assets/thumbnailsVOYHENRY.jpg";
import projTwo from "../assets/thumbnailsFOODPI.jpg";
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
import skillILLUSTRATOR from "../assets/skillILLUSTRATOR.png";
import LangContext from "../styles/language/LangContext";

const ProjectsSection = () => {
    const { lang } = useContext(LangContext);

    return (
        <section lang={langs[lang]} className={style.projects} id="projects">
            <div className={style.projCont}>
                <p className={style.projSecTitle}>{langs[lang].title}</p>
                <hr color='#00bedd' width='10%' />
                {/* ------------- PROJECT 1 ------------- */}
                <a href="/projects/voyhenry">
                    <div className={style.latestProj}>
                        <img
                            className={style.projImg}
                            src={projOne}
                            alt="voyHenry"
                            title="voyHenry"
                            loading="lazy"
                        />
                        <div className={style.projInfo}>
                            <p className={style.projTitle}>voyHenry</p>
                            <hr color='#00bedd' width='10%' />
                            <p className={style.projSummary}>{langs[lang].projOneSummary}</p>
                            <p className={style.projTech}>{langs[lang].techUsed}&nbsp;</p>
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
                {/* ------------- PROJECT 2 ------------- */}
                <a href="/projects/foodpi">
                    <div className={style.latestProj}>
                        <img
                            className={style.projImg}
                            src={projTwo}
                            alt="Food PI"
                            title="Food PI"
                            loading="lazy"
                        />
                        <div className={style.projInfo}>
                            <p className={style.projTitle}>Food PI</p>
                            <hr color='#00bedd' width='10%' />
                            <p className={style.projSummary}>{langs[lang].projTwoSummary}</p>
                            <p className={style.projTech}>{langs[lang].techUsed}&nbsp;</p>
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
                            </div>
                        </div>
                    </div>
                </a>
                {/* ------------------------------------- */}
                <a href="/projects" style={{ textAlign: "center" }}>
                    <button className={style.projBtn}>{langs[lang].button}</button>
                </a>
            </div>
        </section>
    );
};

/* ---------------------------------- LANGUAGES ---------------------------------- */

const langs = {
    en: {
        title: "LATEST PROJECTS",
        projOneSummary: "Group project made for the last instance of the Fullstack Developer course at Henry.",
        projTwoSummary: "PI (Individual Proyect) made for the last instance of the Fullstack Developer course at Henry.",
        techUsed: "Tech used:",
        button: "See more",
    },
    es: {
        title: "PROYECTOS RECIENS",
        projOneSummary: "Proyecto grupal realizado para la última instancia del curso Fullstack Developer en Henry.",
        projTwoSummary: "PI (Proyecto Individual) realizado para la última instancia del curso Fullstack Developer en Henry.",
        techUsed: "Tecnologías usadas:",
        button: "Ver más",
    },
};

export default ProjectsSection;