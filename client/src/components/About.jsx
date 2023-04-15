import React, { useContext } from "react";
import style from "../styles/About.module.css";
import styled from "styled-components";
import ThemeContext from "../styles/darkMode/ThemeContext";
import LangContext from "../styles/language/LangContext";
import themes from "../styles/darkMode/themes.json";
import langs from "../styles/language/langs.json";

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
                <p className={style.aboutTitle}>{langs[lang].abt_title}</p>
                <hr color="#00bedd" width="10%" />
                <p className={style.aboutInfo}> 
                    {langs[lang].abt_textOne}
                </p>
                <p className={style.aboutInfo}> 
                    {langs[lang].abt_textTwo}
                </p>
                <div className={style.btnsCont}>
                    <a href="https://drive.google.com/file/d/1pkibJseU0aO3RKyRZTMpis9VaRs--EfI/view?usp=share_link" target="_blank" rel="noreferrer">
                        <button className={style.buttons}>{langs[lang].abt_downloadEn}</button>
                    </a>
                    <a href="https://drive.google.com/file/d/1pTeX5Vgkf9Z0RuBu6FVKR5F6OmCDIPyj/view?usp=share_link" target="_blank" rel="noreferrer">
                        <button className={style.buttons}>{langs[lang].abt_downloadEs}</button>
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default About;