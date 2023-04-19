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
import bannerImg from "../assets/img/proyecto_VOYHENRY.png";
import screen1 from "../assets/projects/screenshots/VOYHENRY-01.png";
import screen2 from "../assets/projects/screenshots/VOYHENRY-02.png";
import screen3 from "../assets/projects/screenshots/VOYHENRY-03.png";
import screen4 from "../assets/projects/screenshots/VOYHENRY-04.png";
import screen5 from "../assets/projects/screenshots/VOYHENRY-05.png";
import screen6 from "../assets/projects/screenshots/VOYHENRY-06.png";

/* ---------- SKILLS ---------- */
import skillREACT from "../assets/img/skillREACT.png";
import skillREDUX from "../assets/img/skillREDUX.png";
import skillJAVASCRIPT from "../assets/img/skillJAVASCRIPT.png";
import skillNODEJS from "../assets/img/skillNODEJS.png";
import skillEXPRESS from "../assets/img/skillEXPRESS.png";
import skillSEQUELIZE from "../assets/img/skillSEQUELIZE.png";
import skillPOSTGRESQL from "../assets/img/skillPOSTGRESQL.png";
import skillHTML from "../assets/img/skillHTML.png";
import skillCSS from "../assets/img/skillCSS.png";
import skillADOBEXD from "../assets/img/skillADOBEXD.png";
import skillILLUSTRATOR from "../assets/img/skillILLUSTRATOR.png";

const ProjCont = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const VoyHenry = () => {
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
                        alt="voyHenry"
                        title="voyHenry"
                    />
                </div>
                <ProjCont theme={themes[theme]} lang={langs[lang]} className={style.projCont}>
                    <div className={style.projInfo}>
                        <div className={style.nameInfo}>
                            <p className={style.projTitle}>{langs[lang].dtl_name}:&nbsp;</p>
                            <p className={style.projName}>{projects.proj2[lang].name}</p>
                        </div>
                        <hr color="#00bedd" width="10%" />
                        <div className={style.dateInfo}> 
                            <p className={style.projDateTitle}>{langs[lang].prj_realizationDate}&nbsp;</p>
                            <p className={style.projDateDate}>{projects.proj2[lang].date}</p>
                        </div>
                        <div className={style.imgContainer}>
                            <img 
                                className={style.imgOne}
                                src={screen1}
                                alt="Landing"
                                title="Landing"
                            />
                        </div>
                        <p className={style.projTitle}>{langs[lang].dtl_description}</p>
                        <hr color="#00bedd" width="10%" />
                        <p className={style.proj}>
                            {projects.proj2[lang].description.split('. ')[0] + '. '}
                            <br /><br />
                            {projects.proj2[lang].description.split('. ').slice(1, 9).map((sentence, index) => (
                                <React.Fragment key={index}>{sentence}. </React.Fragment>
                            ))}
                            <br /><br />
                            {projects.proj2[lang].description.split('. ').slice(9).join('. ')}
                        </p>
                        <p className={style.projTitle}>{langs[lang].dtl_tech}</p>
                        <hr color="#00bedd" width="10%" />
                        <div className={style.techList}>
                            <img
                                className={style.techIcon}
                                src={skillJAVASCRIPT}
                                alt="Javascript"
                                title="Javascript"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillREACT}
                                alt="React"
                                title="React"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillREDUX}
                                alt="Redux"
                                title="Redux"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillNODEJS}
                                alt="Node.JS"
                                title="Node.JS"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillEXPRESS}
                                alt="Express"
                                title="Express"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillSEQUELIZE}
                                alt="Sequelize"
                                title="Sequelize"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillPOSTGRESQL}
                                alt="PostgreSQL"
                                title="PostgreSQL"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillHTML}
                                alt="HTML"
                                title="HTML"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillCSS}
                                alt="CSS"
                                title="CSS"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillADOBEXD}
                                alt="AdobeXD"
                                title="AdobeXD"
                                loading="lazy"
                            />
                            <img
                                className={style.techIcon}
                                src={skillILLUSTRATOR}
                                alt="Adobe Illustrator"
                                title="Adobe Illustrator"
                                loading="lazy"
                            />
                        </div>
                        <div className={style.imgSubContainer_2}>
                            <img 
                                className={style.images_2}
                                src={screen2}
                                alt="Home"
                                title="Home"
                            />
                            <img 
                                className={style.images_2}
                                src={screen3}
                                alt="Plan Detail"
                                title="Plan Detail"
                            />
                        </div>
                        <div className={style.imgSubContainer}>
                            <img 
                                className={style.images}
                                src={screen4}
                                alt="Blog section"
                                title="Blog section"
                            />
                            <img 
                                className={style.images}
                                src={screen5}
                                alt="Profile page"
                                title="Profile page"
                            />
                        </div>
                        <p className={style.projTitle}>{langs[lang].dtl_team}</p>
                        <hr color="#00bedd" width="10%" />
                        <div className={style.teamList}>
                            <ul className={style.teamColumn}>
                                <li className={style.teamName}>Gabriel Barimboim</li>
                                <li className={style.teamName}>Julián María Castro</li>
                                <li className={style.teamName}>Mauricio Fonseca</li>
                                <li className={style.teamName}>Thomas Federico Liendo</li>
                            </ul>
                            <ul>
                                <li className={style.teamName}>Marcos Hernán Parella</li>
                                <li className={style.teamName}>Lien Silvio Sanchez</li>
                                <li className={style.teamName}>Facundo Martín Tombesi</li>
                                <li className={style.teamName}>Matías Varela</li>
                            </ul>
                        </div>
                        <div className={style.imgSubContainer}>
                            <img 
                                className={style.teamImg}
                                src={screen6}
                                alt="About us"
                                title="About us"
                            />
                        </div>
                        <div className={style.nameInfo}>
                            <p className={style.projTitle}>Deploy:&nbsp;</p>
                            <a href="https://pf-voy-henry.vercel.app/"  target="_blank" rel="noreferrer">
                                <p className={style.deployLink}>{projects.proj2[lang].name}</p>
                            </a>
                        </div>
                    </div>
                    <a href="/projects">
                        <button className={style.buttons}>{langs[lang].dtl_button}</button>
                    </a>
                </ProjCont>
            </div>
        </div>
    );
};

export default VoyHenry;