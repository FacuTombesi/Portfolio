import React, { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import style from "../styles/ProjectsDetail.module.css";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import ThemeContext from "../styles/darkMode/ThemeContext";
import LangContext from "../styles/language/LangContext";
import themes from "../styles/darkMode/themes.json";
import langs from "../styles/language/langs.json";
// import projects from "../assets/projects/projects.json";

/* ---------------- IMAGES ---------------- */
// import bannerImg from "../assets/img/{/* BANNER IMG NAME */}.png";

/* ---------- SKILLS ---------- */
//import skillREACT from "../assets/img/skillREACT.png";
// import skillREDUX from "../assets/img/skillREDUX.png";
// import skillJAVASCRIPT from "../assets/img/skillJAVASCRIPT.png";
// import skillNODEJS from "../assets/img/skillNODEJS.png";
// import skillEXPRESS from "../assets/img/skillEXPRESS.png";
// import skillSEQUELIZE from "../assets/img/skillSEQUELIZE.png";
// import skillPOSTGRESQL from "../assets/img/skillPOSTGRESQL.png";
// import skillHTML from "../assets/img/skillHTML.png";
// import skillCSS from "../assets/img/skillCSS.png";
// import skillADOBEXD from "../assets/img/skillADOBEXD.png";
// import skillAFTEREFFECTS from "../assets/img/skillAFTEREFFECTS.png";
// import skillILLUSTRATOR from "../assets/img/skillILLUSTRATOR.png";
// import skillPREMIEREPRO from "../assets/img/skillPREMIEREPRO.png";

const ProjCont = styled.section `
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s, color 0.5s;
`

const DetailTemplate = () => {
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
                    {/* <img 
                        className={style.bannerImg}
                        src={bannerImg}
                        alt="NOMBRE"
                        title="NOMBRE"
                    /> */}
                </div>
                <ProjCont theme={themes[theme]} lang={langs[lang]} className={style.projCont}>
                    <div className={style.projInfo}>
                        <div className={style.nameInfo}>
                            <p className={style.projTitle}>{langs[lang].dtl_name}:&nbsp;</p>
                            <p className={style.projName}>{/* {projects.NUMERODEPROJECTO[lang].name} */}</p>
                        </div>
                        <hr color="#00bedd" width="10%" />
                        <div className={style.dateInfo}> 
                            <p className={style.projDateTitle}>{langs[lang].prj_realizationDate}&nbsp;</p>
                            <p className={style.projDateDate}>{/* {projects.NUMERODEPROJECTO[lang].date} */}</p>
                        </div>
                        <div className={style.imgContainer}>
                            {/* IMAGEN DE INICIO/LANDING */}
                        </div>
                        <p className={style.projTitle}>{langs[lang].dtl_description}</p>
                        <hr color="#00bedd" width="10%" />
                        <p className={style.proj}>
                            {/* DESCRIPCION */}
                        </p>
                        <div className={style.imgSubContainer}>
                            {/* IMAGENES DE SECCIONES */}
                        </div>
                        <p className={style.projTitle}>{langs[lang].dtl_tech}</p>
                        <hr color="#00bedd" width="10%" />
                        <div className={style.techList}>
                            {/* LOGOS DE TECNOLOGIAS */}
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

export default DetailTemplate;