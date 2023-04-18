import React, { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import style from "../styles/ProjectsDetail.module.css";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import ThemeContext from "../styles/darkMode/ThemeContext";
import LangContext from "../styles/language/LangContext";
import themes from "../styles/darkMode/themes.json";
import langs from "../styles/language/langs.json";
import projects from "../assets/projects/projects.json";

/* ---------------- IMAGES ---------------- */
import bannerImg from "../assets/img/proyecto_FOODPI.png";
import screen1 from "../assets/projects/screenshots/FOODPI01.png";
import screen2 from "../assets/projects/screenshots/FOODPI02.png";
import screen3 from "../assets/projects/screenshots/FOODPI03.png";
import screen4 from "../assets/projects/screenshots/FOODPI04.png";
import screen5 from "../assets/projects/screenshots/FOODPI05.png";

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
                    <img 
                        className={style.bannerImg}
                        src={bannerImg}
                        alt="Food PI"
                        title="Food PI"
                    />
                </div>
                <ProjCont theme={themes[theme]} lang={langs[lang]} className={style.projCont}>
                    <div className={style.projInfo}>
                        <div className={style.nameInfo}>
                            <p className={style.projTitle}>{langs[lang].dtl_name}:&nbsp;</p>
                            <p className={style.projName}>{projects.proj1[lang].name}</p>
                        </div>
                        <hr color="#00bedd" width="10%" />
                        <div className={style.dateInfo}> 
                            <p className={style.projDateTitle}>{langs[lang].prj_realizationDate}&nbsp;</p>
                            <p className={style.projDateDate}>{projects.proj1[lang].date}</p>
                        </div>
                        <div className={style.imgContainer}>
                            <img 
                                className={style.imgOne}
                                src={screen1}
                                alt="Project Home"
                                title="Project Home"
                            />
                        </div>
                        <p className={style.projTitle}>{langs[lang].dtl_description}</p>
                        <hr color="#00bedd" width="10%" />
                        <p className={style.proj}>
                            {projects.proj1[lang].description.split('. ')[0] + '. '}
                            <br/>
                            <br/>
                            {projects.proj1[lang].description.split('. ')[1] + '. '}
                            {projects.proj1[lang].description.split('. ')[2] + '. '}
                            {projects.proj1[lang].description.split('. ')[3] + '. '}
                            {projects.proj1[lang].description.split('. ')[4] + '. '}
                            <br/>
                            <br/>
                            {projects.proj1[lang].description.split('. ')[5] + '. '}
                            {projects.proj1[lang].description.split('. ')[6] + '. '}
                        </p>
                    </div>
                    <a href="/projects">
                        <button className={style.buttons}>{langs[lang].dtl_button}</button>
                    </a>
                </ProjCont>
            </div>
        </div>
    );
};

export default FoodPI;