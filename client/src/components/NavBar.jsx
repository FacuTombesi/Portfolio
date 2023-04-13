import React, { useContext } from "react";
import styled from "styled-components";
import darkLogo from "../assets/logo(lightMode).png";
import lightLogo from "../assets/logo(darkMode).png";
import ThemeContext from "../styles/darkMode/ThemeContext";
import ToggleButton from "../styles/darkMode/ToggleButton";
import LangContext from "../styles/language/LangContext";
import LangButton from "../styles/language/LangButton";

const NavBar = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: "smooth" })
    };

    const logo = theme === "light" ? darkLogo : lightLogo;

    return (
        <NavCont theme={themes[theme]} lang={langs[lang]}>
            <a href="/" title="Facundo Tombesi">
                <Logo 
                    src={logo}
                    alt="Facundo Tombesi"
                    loading="lazy"
                />
            </a>
            <BtnsCont>
                <NavLinksCont>
                    <NavLinks href="#home" onClick={(e) => handleClick(e, "home")}>{langs[lang].home}</NavLinks>
                    <NavLinks href="#about" onClick={(e) => handleClick(e, "about")}>{langs[lang].about}</NavLinks>
                    <NavLinks href="#projects" onClick={(e) => handleClick(e, "projects")}>{langs[lang].projects}</NavLinks>
                    <NavLinks href="#skills" onClick={(e) => handleClick(e, "skills")}>{langs[lang].skills}</NavLinks>
                    <NavLinks href="#contact" onClick={(e) => handleClick(e, "contact")}>{langs[lang].contact}</NavLinks>
                </NavLinksCont>
                <ToggleCont>
                    <ToggleButton />
                    <LangButton />
                </ToggleCont>
            </BtnsCont>
        </NavCont>
    );
};

/* ---------------------------------------------- STYLES ---------------------------------------------- */

const NavCont = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    box-shadow: 0px 0px 9px 2px #00bedd;
    padding: 10px 40px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const Logo = styled.img `
    height: 2.5em;
`

const BtnsCont = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 75%;
`

const NavLinksCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
`

const NavLinks = styled.p `
    padding-inline: 5px 5px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 90%;
    font-weight: 600;
    margin-right: 30px;
    cursor: pointer;

    &:hover {
        color: #00bedd;
    }
`

const ToggleCont = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 12%;
`

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
        home: "HOME",
        about: "ABOUT",
        projects: "PROJECTS",
        skills: "SKILLS",
        contact: "CONTACT",
    },
    es: {
        home: "INICIO",
        about: "SOBRE MÍ",
        projects: "PROYECTOS",
        skills: "HABILIDADES",
        contact: "CONTACTO",
    },
};

export default NavBar;