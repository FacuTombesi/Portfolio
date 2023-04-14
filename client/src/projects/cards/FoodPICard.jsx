import React, { useContext } from "react";
import style from "../../styles/cards/Cards.module.css";
import styled from "styled-components";
import ThemeContext from "../../styles/darkMode/ThemeContext";
import LangContext from "../../styles/language/LangContext";

import projThumbnail from "../../assets/thumbnailsFOODPI.jpg";

/* ---------- SKILLS ---------- */
import skillREACT from "../../assets/skillREACT.png";
import skillREDUX from "../../assets/skillREDUX.png";
import skillJAVASCRIPT from "../../assets/skillJAVASCRIPT.png";
import skillNODEJS from "../../assets/skillNODEJS.png";
import skillEXPRESS from "../../assets/skillEXPRESS.png";
import skillPOSTGRESQL from "../../assets/skillPOSTGRESQL.png";
import skillHTML from "../../assets/skillHTML.png";
import skillCSS from "../../assets/skillCSS.png";

const Container = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const FoodPICard = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);

    return (
        <Container theme={themes[theme]} lang={langs[lang]}>
            <div className={style.cardCont}>
                <img
                    className={style.projImg}
                    src={projThumbnail}
                    alt="voyHenry"
                    title="voyHenry"
                    loading="lazy"
                />
                <div className={style.projInfo}>
                    <p className={style.projTitle}>Food PI</p>
                    <hr color='#00bedd' width='10%' />
                    <p className={style.projSummary}>{langs[lang].projSummary}</p>
                    <div className={style.projDate}>
                        <p className={style.projDateTitle}>{langs[lang].realizationDate}&nbsp;</p>
                        <p className={style.projDateDate}>{langs[lang].projDate}</p>
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
                    <a href="/projects/foodpi">
                        <button className={style.buttons}>{langs[lang].button}</button>
                    </a>
                </div>
            </div>
        </Container>
    );
};

/* ---------------------------------- THEME STYLES ---------------------------------- */

const themes = {
    light: {
        backgroundColor: "white",
        textColor: "black",
    },
    dark: {
        backgroundColor: "black",
        textColor: "white",
    },
};

/* ---------------------------------- LANGUAGES ---------------------------------- */

const langs = {
    en: {
        projSummary: "PI (Individual Proyect) made for the last instance of the Fullstack Developer course at Henry.",
        projDate: "Feb. 2023",
        realizationDate: "Realization date:",
        techUsed: "Tech used:",
        button: "Read more",
    },
    es: {
        projSummary: "PI (Proyecto Individual) realizado para la última instancia del curso Fullstack Developer en Henry.",
        projDate: "Feb. 2023",
        realizationDate: "Fecha de realización:",
        techUsed: "Tecnologías usadas:",
        button: "Leer más",
    },
};

export default FoodPICard;