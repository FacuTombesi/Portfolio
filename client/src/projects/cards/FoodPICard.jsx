import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import style from "../../styles/cards/Cards.module.css";
import styled from "styled-components";
import ThemeContext from "../../styles/darkMode/ThemeContext";
import LangContext from "../../styles/language/LangContext";
import themes from "../../styles/darkMode/themes.json";
import langs from "../../styles/language/langs.json";
import projects from "../../assets/projects/projects.json";

import projThumbnail from "../../assets/img/thumbnailsFOODPI.jpg";

/* ---------- SKILLS ---------- */
import skillREACT from "../../assets/img/skillREACT.png";
import skillREDUX from "../../assets/img/skillREDUX.png";
import skillJAVASCRIPT from "../../assets/img/skillJAVASCRIPT.png";
import skillNODEJS from "../../assets/img/skillNODEJS.png";
import skillEXPRESS from "../../assets/img/skillEXPRESS.png";
import skillPOSTGRESQL from "../../assets/img/skillPOSTGRESQL.png";
import skillHTML from "../../assets/img/skillHTML.png";
import skillCSS from "../../assets/img/skillCSS.png";

let Container = styled.section;

const FoodPICard = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);
    const location = useLocation();

    const isHome = location.pathname === "/";

    isHome 
        ? Container = styled.section `
            background-color: transparent;
            color: white;
        `
        : Container = styled.section `
            background-color: ${({ theme }) => theme.backgroundColor};
            color: ${({ theme }) => theme.textColor};
            transition: background-color 0.5s, color 0.5s;
        `

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
                    <p className={style.projTitle}>{projects.proj1[lang].name}</p>
                    <hr color='#00bedd' width='10%' />
                    <p className={style.projSummary}>{projects.proj1[lang].summary}</p>
                    <div className={style.projDate}>
                        <p className={style.projDateTitle}>{langs[lang].prj_realizationDate}&nbsp;</p>
                        <p className={style.projDateDate}>{projects.proj1[lang].date}</p>
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
                    {!isHome && (
                        <a href="/projects/foodpi">
                            <button className={style.buttons}>{langs[lang].crd_button}</button>
                        </a>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default FoodPICard;