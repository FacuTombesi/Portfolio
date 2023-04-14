import React, { useContext } from "react";
import style from "../styles/ProjectsSection.module.css";
import LangContext from "../styles/language/LangContext";

/* ---------- PROJECTS ---------- */
import projOne from "../assets/thumbnailsPORTFOLIO.jpg";
import projTwo from "../assets/thumbnailsVOYHENRY.jpg";

/* ---------- SKILLS ---------- */
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

const ProjectsSection = () => {
    const { lang } = useContext(LangContext);

    return (
        <section lang={langs[lang]} className={style.projects} id="projects">
            <div className={style.projCont}>
                <p className={style.projSecTitle}>{langs[lang].title}</p>
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
                            <p className={style.projTitle}>FT Portfolio</p>
                            <hr color='#00bedd' width='10%' />
                            <p className={style.projSummary}>{langs[lang].projOneSummary}</p>
                            <div className={style.projDate}>
                                <p className={style.projDateTitle}>{langs[lang].realizationDate}&nbsp;</p>
                                <p className={style.projDateDate}>{langs[lang].projOneDate}</p>
                            </div>
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
                            alt="Food PI"
                            title="Food PI"
                            loading="lazy"
                        />
                        <div className={style.projInfo}>
                            <p className={style.projTitle}>voyHenry</p>
                            <hr color='#00bedd' width='10%' />
                            <p className={style.projSummary}>{langs[lang].projTwoSummary}</p>
                            <div className={style.projDate}>
                                <p className={style.projDateTitle}>{langs[lang].realizationDate}&nbsp;</p>
                                <p className={style.projDateDate}>{langs[lang].projTwoDate}</p>
                            </div>
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
        projOneSummary: "The one you're browsing right now! I made this portfolio to let people know a little bit about me and what I do. I'll keep updating this as I grow as a professional.",
        projOneDate: "Apr. 2023",
        projTwoSummary: "Group project made for the last instance of the Fullstack Developer course at Henry.",
        projTwoDate: "Feb. - Mar. 2023",
        realizationDate: "Realization date:",
        techUsed: "Tech used:",
        button: "See more",
    },
    es: {
        title: "PROYECTOS RECIENS",
        projOneSummary: "¡El que estás viendo ahora mismo! Hice este portafolio para que la gente sepa un poco sobre mí y lo que hago. Seguiré actualizando esto a medida que crezca como profesional.",
        projOneDate: "Abr. 2023",
        projTwoSummary: "Proyecto grupal realizado para la última instancia del curso Fullstack Developer en Henry.",
        projTwoDate: "Feb. - Mar. 2023",
        realizationDate: "Fecha de realización:",
        techUsed: "Tecnologías usadas:",
        button: "Ver más",
    },
};

export default ProjectsSection;