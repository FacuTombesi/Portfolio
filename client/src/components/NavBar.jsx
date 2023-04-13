import React, { useContext } from "react";
import styled from "styled-components";
import darkLogo from "../assets/logo(lightMode).png";
import lightLogo from "../assets/logo(darkMode).png";
import ThemeContext from "../styles/darkMode/ThemeContext";
import ToggleButton from "../styles/darkMode/ToggleButton";

const NavBar = () => {
    const { theme } = useContext(ThemeContext);

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: "smooth" })
    };

    const logo = theme === "light" ? darkLogo : lightLogo;

    return (
        <NavCont theme={themes[theme]}>
            <a href="/" title="Facundo Tombesi">
                <Logo 
                    src={logo}
                    alt="Facundo Tombesi"
                    loading="lazy"
                />
            </a>
            <BtnsCont>
                <NavLinksCont>
                    <NavLinks href="#home" onClick={(e) => handleClick(e, "home")}>HOME</NavLinks>
                    <NavLinks href="#about" onClick={(e) => handleClick(e, "about")}>ABOUT</NavLinks>
                    <NavLinks href="#projects" onClick={(e) => handleClick(e, "projects")}>PROJECTS</NavLinks>
                    <NavLinks href="#skills" onClick={(e) => handleClick(e, "skills")}>SKILLS</NavLinks>
                    <NavLinks href="#contact" onClick={(e) => handleClick(e, "contact")}>CONTACT</NavLinks>
                </NavLinksCont>
                <ToggleButton />
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
`

const NavLinksCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    margin-right: 30px;
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

export default NavBar;