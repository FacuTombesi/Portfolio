import React, { useContext } from "react";
import style from "../../styles/cards/Cards.module.css";
import styled from "styled-components";
import ThemeContext from "../../styles/darkMode/ThemeContext";
import LangContext from "../../styles/language/LangContext";

import projThumbnail from "../../assets/thumbnailsPORTFOLIO.jpg";

/* ---------- SKILLS ---------- */
import skillREACT from "../../assets/skillREACT.png";
import skillJAVASCRIPT from "../../assets/skillJAVASCRIPT.png";
import skillHTML from "../../assets/skillHTML.png";
import skillCSS from "../../assets/skillCSS.png";
import skillADOBEXD from "../../assets/skillADOBEXD.png";
import skillILLUSTRATOR from "../../assets/skillILLUSTRATOR.png";

const Container = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const PortfolioCard = () => {
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
                    <p className={style.projTitle}>FT Portfolio</p>
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
                            alt="Adobe XD"
                            title="Adobe XD"
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
                    <a href="/projects/portfolio">
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
        projSummary: "The one you're browsing right now! I made this portfolio to let people know a little bit about me and what I do. I'll keep updating this as I grow as a professional.",
        projDate: "Apr. 2023",
        realizationDate: "Realization date:",
        techUsed: "Tech used:",
        button: "Read more",
    },
    es: {
        projSummary: "¡El que estás viendo ahora mismo! Hice este portafolio para que la gente sepa un poco sobre mí y lo que hago. Seguiré actualizando esto a medida que crezca como profesional.",
        projDate: "Abr. 2023",
        realizationDate: "Fecha de realización:",
        techUsed: "Tecnologías usadas:",
        button: "Leer más",
    },
};

export default PortfolioCard;