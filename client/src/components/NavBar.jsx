import React from "react";
import styled from "styled-components";
import lightLogo from "../assets/logo(base).png";

const NavBar = () => {
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId)
        section.scrollIntoView({ behavior: "smooth" })
    };

    return (
        <NavCont>
            <a href="/" title="Facundo Tombesi">
                <Logo 
                    src={lightLogo}
                    alt="Facundo Tombesi"
                    loading="lazy"
                />
            </a>
            <NavLinksCont>
                <NavLinks href='#home' onClick={(e) => handleClick(e, 'home') }>HOME</NavLinks>
                <NavLinks href='#about' onClick={(e) => handleClick(e, 'about') }>ABOUT</NavLinks>
                <NavLinks href='#projects' onClick={(e) => handleClick(e, 'projects') }>PROJECTS</NavLinks>
                <NavLinks href='#skills' onClick={(e) => handleClick(e, 'skills') }>SKILLS</NavLinks>
                <NavLinks href='#contact' onClick={(e) => handleClick(e, 'contact') }>CONTACT</NavLinks>
            </NavLinksCont>
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
    background-color: white;
    box-shadow: 0px 0px 9px 2px #00bedd;
    padding: 10px 40px;
`

const Logo = styled.img `
    height: 2.5em;
`

const NavLinksCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    margin-right: 60px;
`

const NavLinks = styled.a `
    padding-inline: 5px 5px;
    color: black;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 90%;
    font-weight: 600;

    &:hover {
        color: #00bedd;
    }
`

export default NavBar;