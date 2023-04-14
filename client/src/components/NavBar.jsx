import React, { useContext, useState } from "react";
import "../styles/NavBar.css";
import styled from "styled-components";
import darkLogo from "../assets/logo(lightMode).png";
import lightLogo from "../assets/logo(darkMode).png";
import ThemeContext from "../styles/darkMode/ThemeContext";
import ToggleButton from "../styles/darkMode/ToggleButton";
import LangContext from "../styles/language/LangContext";
import LangButton from "../styles/language/LangButton";

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    box-shadow: 0px 0px 9px 2px #00bedd;
    padding: 10px 40px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const NavBar = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: "smooth" })
    };

    const logo = theme === "light" ? darkLogo : lightLogo;

    return (
        <Container theme={themes[theme]} lang={langs[lang]}>
            <a href="/" title="Facundo Tombesi">
                <img 
                    className="logo"
                    src={logo}
                    alt="Facundo Tombesi"
                    loading="lazy"
                />
            </a>
            <div className={`navLinksCont ${isOpen && "open"}`}>
                <p className="navLinks" href="#home" onClick={(e) => handleClick(e, "home")}>{langs[lang].home}</p>
                <p className="navLinks" href="#about" onClick={(e) => handleClick(e, "about")}>{langs[lang].about}</p>
                <p className="navLinks" href="#projects" onClick={(e) => handleClick(e, "projects")}>{langs[lang].projects}</p>
                <p className="navLinks" href="#skills" onClick={(e) => handleClick(e, "skills")}>{langs[lang].skills}</p>
                <p className="navLinks" href="#contact" onClick={(e) => handleClick(e, "contact")}>{langs[lang].contact}</p>
                <div className="toggleCont">
                    <ToggleButton />
                    <LangButton />
                </div>
            </div>
            <div className={`navBurger ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
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