import React, { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import style from "../styles/ProjectsDetail.module.css";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import ThemeContext from "../styles/darkMode/ThemeContext";
import LangContext from "../styles/language/LangContext";
import themes from "../styles/darkMode/themes.json";
// import langs from "../styles/language/langs.json";
import projects from "../assets/projects/projects.json";

const ProjCont = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const FoodPI = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);

    return (
        <div>
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

                </div>
                <ProjCont theme={themes[theme]} lang={langs[lang]} className={style.projCont}>
                    <div className={style.projInfo}>
                        
                    </div>
                    <a href="/projects">
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
        button: "Back",
    },
    es: {
        title1: "Todos",
        button: "Atrás",
    },
};

export default FoodPI;