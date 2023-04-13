import React, { useState, useContext } from "react";
import style from "../styles/Contact.module.css";
import styled from "styled-components";
import iconGITHUB from "../assets/iconGITHUB.png";
import iconGITHUBwhite from "../assets/iconGITHUB(white).png";
import iconLINKEDIN from "../assets/iconLINKEDIN.png";
import iconLINKEDINwhite from "../assets/iconLINKEDIN(white).png";
import iconMAIL from "../assets/iconMAIL.png";
import iconMAILwhite from "../assets/iconMAIL(white).png";
import ThemeContext from "../styles/darkMode/ThemeContext";
import LangContext from "../styles/language/LangContext";

const Container = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const Contact = () => {
    const [mailSrc, setMailSrc] = useState(iconMAILwhite);
    const [linkedinSrc, setLinkedinSrc] = useState(iconLINKEDINwhite);
    const [githubSrc, setGithubSrc] = useState(iconGITHUBwhite);
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);

    return (
        <Container theme={themes[theme]} lang={langs[lang]} className={style.contact} id="contact">
            <div className={style.contactCont}>
                <p className={style.contactTitle}>{langs[lang].title}</p>
                <hr color="white" width="10%" />
                <div className={style.iconsCont}>
                    <a href="mailto:facundomtombesi@gmail.com" target="_blank" rel="noreferrer">
                        <img
                            className={style.socialIcon}
                            src={mailSrc}
                            alt="Contact me"
                            title="Contact me"
                            loading="lazy"
                            onMouseOver={() => setMailSrc(iconMAIL)}
                            onMouseOut={() => setMailSrc(iconMAILwhite)}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/facundotombesi/" target="_blank" rel="noreferrer">
                        <img
                            className={style.socialIcon}
                            src={linkedinSrc}
                            alt="LinkedIn"
                            title="LinkedIn"
                            loading="lazy"
                            onMouseOver={() => setLinkedinSrc(iconLINKEDIN)}
                            onMouseOut={() => setLinkedinSrc(iconLINKEDINwhite)}
                        />
                    </a>
                    <a href="https://github.com/FacuTombesi" target="_blank" rel="noreferrer">
                        <img
                            className={style.socialIcon}
                            src={githubSrc}
                            alt="GitHub"
                            title="GitHub"
                            loading="lazy"
                            onMouseOver={() => setGithubSrc(iconGITHUB)}
                            onMouseOut={() => setGithubSrc(iconGITHUBwhite)}
                        />
                    </a>
                </div>
            </div>
        </Container>
    );
};

/* ---------------------------------- THEME STYLES ---------------------------------- */

const themes = {
    light: {
        backgroundColor: "#00a7af",
        textColor: "white",
    },
    dark: {
        backgroundColor: "#005257",
        textColor: "white",
    },
};

/* ---------------------------------- LANGUAGES ---------------------------------- */

const langs = {
    en: {
        title: "CONTACT",
    },
    es: {
        title: "CONTACTO",
    },
};

export default Contact;