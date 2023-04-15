import React, { useContext } from "react";
import style from "../styles/ProjectsSection.module.css";
import LangContext from "../styles/language/LangContext";
import langs from "../styles/language/langs.json";

/* ---------- PROJECTS ---------- */
import PortfolioCard from "../projects/cards/PortfolioCard";
import VoyHenryCard from "../projects/cards/VoyHenryCard";

const ProjectsSection = () => {
    const { lang } = useContext(LangContext);

    return (
        <section lang={langs[lang]} className={style.projects} id="projects">
            <div className={style.projCont}>
                <p className={style.projSecTitle}>{langs[lang].prj_title}</p>
                <hr color='#00bedd' width='10%' />
                {/* ------------- PROJECT 1 ------------- */}
                <a href="/projects/portfolio">
                    <PortfolioCard />
                </a>
                {/* ------------- PROJECT 2 ------------- */}
                <a href="/projects/voyhenry">
                    <VoyHenryCard />
                </a>
                <a href="/projects" style={{ textAlign: "center" }}>
                    <button className={style.projBtn}>{langs[lang].prj_button}</button>
                </a>
            </div>
        </section>
    );
};

export default ProjectsSection;