import React, { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import style from "../styles/Projects.module.css";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import ThemeContext from "../styles/darkMode/ThemeContext";
import LangContext from "../styles/language/LangContext";
import themes from "../styles/darkMode/themes.json";

/* ---------- PROJECTS ---------- */
import FoodPICard from "../projects/cards/FoodPICard";
import VoyHenryCard from "../projects/cards/VoyHenryCard";
import PortfolioCard from "../projects/cards/PortfolioCard";

const ProjCont = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const Projects = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);

    return (
        <div lang={langs[lang]}>
            <ScrollToTop 
                smooth="true"
                top="60"
                color="white"
                width="22px"
                height="22px"
                style={{ backgroundColor: "#00bedd", borderRadius: "50%" }}
            />
            <NavBar />
            <div className={style.container}>
                <div className={style.banner}>
                    <p className={style.allProjects}>{langs[lang].title1}</p>
                    <p className={style.my}>{langs[lang].title2}</p>
                    <p className={style.allProjects}>{langs[lang].title3}</p>
                </div>
                <ProjCont theme={themes[theme]} lang={langs[lang]} className={style.projCont}>
                    <div className={style.projList}>
                        <PortfolioCard />
                        <hr color='#00bedd' width='90%' />
                        <VoyHenryCard />
                        <hr color='#00bedd' width='90%' />
                        <FoodPICard />
                    </div>
                    <a href="/">
                        <button className={style.buttons}>{langs[lang].button}</button>
                    </a>
                </ProjCont>
            </div>
        </div>
    );
};

/* ---------------------------------- LANGUAGES ---------------------------------- */

const langs = {
    en: {
        title1: "All",
        title2: "My",
        title3: "Projects",
        button: "Back",
    },
    es: {
        title1: "Todos",
        title2: "Mis",
        title3: "Proyectos",
        button: "Atrás",
    },
};

export default Projects;