import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import styled from "styled-components";
import darkLogo from "../assets/img/logo(lightMode).png";
import lightLogo from "../assets/img/logo(darkMode).png";
import ThemeContext from "../styles/darkMode/ThemeContext";
import ToggleButton from "../styles/darkMode/ToggleButton";
import LangContext from "../styles/language/LangContext";
import LangButton from "../styles/language/LangButton";
import themes from "../styles/darkMode/themes.json";
import langs from "../styles/language/langs.json";

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
    const location = useLocation();

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };

    const logo = theme === "light" ? darkLogo : lightLogo;
    const isHome = location.pathname === "/";

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
                {isHome && (
                    <>
                        <p className="navLinks" href="#home" onClick={(e) => {handleClick(e, "home"); setIsOpen(false);}}>{langs[lang].nav_home}</p>
                        <p className="navLinks" href="#about" onClick={(e) => {handleClick(e, "about"); setIsOpen(false)}}>{langs[lang].nav_about}</p>
                        <p className="navLinks" href="#projects" onClick={(e) => {handleClick(e, "projects"); setIsOpen(false)}}>{langs[lang].nav_projects}</p>
                        <p className="navLinks" href="#skills" onClick={(e) => {handleClick(e, "skills"); setIsOpen(false)}}>{langs[lang].nav_skills}</p>
                        <p className="navLinks" href="#contact" onClick={(e) => {handleClick(e, "contact"); setIsOpen(false)}}>{langs[lang].nav_contact}</p>
                    </>
                )}
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

export default NavBar;