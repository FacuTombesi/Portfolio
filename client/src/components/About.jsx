import React, { useContext } from "react";
import style from "../styles/About.module.css";
import styled from "styled-components";
import ThemeContext from "../styles/darkMode/ThemeContext";
import LangContext from "../styles/language/LangContext";

const Container = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const About = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LangContext);

    return (
        <Container theme={themes[theme]} lang={langs[lang]} className={style.about} id="about">
            <div className={style.aboutCont}>
                <p className={style.aboutTitle}>{langs[lang].title}</p>
                <hr color="#00bedd" width="10%" />
                <p className={style.aboutInfo}> 
                    {langs[lang].textOne}
                </p>
                <p className={style.aboutInfo}> 
                    {langs[lang].textTwo}
                </p>
                <div className={style.btnsCont}>
                    <a href="https://drive.google.com/file/d/1pkibJseU0aO3RKyRZTMpis9VaRs--EfI/view?usp=share_link" target="_blank" rel="noreferrer">
                        <button className={style.buttons}>{langs[lang].downloadEn}</button>
                    </a>
                    <a href="https://drive.google.com/file/d/1pTeX5Vgkf9Z0RuBu6FVKR5F6OmCDIPyj/view?usp=share_link" target="_blank" rel="noreferrer">
                        <button className={style.buttons}>{langs[lang].downloadEs}</button>
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
        title: "ABOUT ME",
        textOne: "Hi! My name is Facundo Tombesi, from Argentina. I'm a Multimedia Designer and Full Stack Developer. I got my Multimedia Designer degree on 2018 and ever since I've been working as a freelance designer, doing web design, logo design and personal business cards for my clients. But I wanted to grow even more and do more than just design web sites, I wanted to be able to develop them as well.",
        textTwo: "So, on october 2022, I started studying for Full Stack Developer at SoyHenry and 4 months later I got my Full Stack Developer certificate. Now I'm looking to work in a place where I can put to test my skills both as a designer and a developer. I'm still a junior developer and I'm still learning but with time I'll become a true professional.",
        downloadEn: "Download my CV (english)",
        downloadEs: "Download my CV (spanish)",
    },
    es: {
        title: "SOBRE MÍ",
        textOne: "¡Hola! Mi nombre es Facundo Tombesi, de Argentina. Soy Diseñador Multimedia y Desarrollador Full Stack. Obtuve mi título de Diseñador Multimedia en 2018 y desde entonces he estado trabajando como diseñador independiente, haciendo diseño web, diseño de logotipos y tarjetas de presentación personales para mis clientes. Pero quería crecer aún más y hacer algo más que diseñar sitios web, quería poder desarrollarlos también.",
        textTwo: "Entonces, en octubre de 2022, comencé a estudiar para Desarrollador Full Stack en SoyHenry y 4 meses después obtuve mi certificado de Desarrollador Full Stack. Ahora busco trabajar en un lugar donde pueda poner a prueba mis habilidades como diseñador y desarrollador. Todavía soy un desarrollador junior y sigo aprendiendo, pero con el tiempo me convertiré en un verdadero profesional.",
        downloadEn: "Descarga mi CV (inglés)",
        downloadEs: "Descarga mi CV (español)",
    },
};

export default About;