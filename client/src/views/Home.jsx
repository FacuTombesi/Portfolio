import React from "react";
// import Typical from "react-typical";
import NavBar from "../components/NavBar";
import style from "../styles/Home.module.css";
import projOne from "../assets/thumbnailsVOYHENRY.jpg";
import projTwo from "../assets/thumbnailsFOODPI.jpg";
import skillREACT from "../assets/skillREACT.png";
import skillREDUX from "../assets/skillREDUX.png";
import skillJAVASCRIPT from "../assets/skillJAVASCRIPT.png";
import skillNODEJS from "../assets/skillNODEJS.png";
import skillEXPRESS from "../assets/skillEXPRESS.png";
import skillSEQUELIZE from "../assets/skillSEQUELIZE.png";
import skillPOSTGRESQL from "../assets/skillPOSTGRESQL.png";
import skillHTML from "../assets/skillHTML.png";
import skillCSS from "../assets/skillCSS.png";
import skillADOBEXD from "../assets/skillADOBEXD.png";
import skillILLUSTRATOR from "../assets/skillILLUSTRATOR.png";

const Home = () => {
    return (
        <div>
            <NavBar />
            {/* -------------------------- HOME -------------------------- */}
            <section className={style.landing} id="home">
                <div className={style.banner}>
                    <p className={style.hi}>Hi!</p>
                    <div className={style.bannerInfo}>
                        <p className={style.welcome}>Welcome to my portfolio</p>
                        <hr color='#00bedd' width='100%' />
                        <div className={style.nameAndRole}>
                            <div className={style.nameCont}>
                                <p className={style.whiteText}>My name is &nbsp;</p>
                                <p className={style.name}>Facundo Tombesi</p>
                            </div>
                            <div className={style.roleCont}>
                                <p className={style.whiteText}>and I'm a &nbsp;</p>
                                <p className={style.dev}>
                                    {/* <Typical
                                        loop={Infinity}
                                        steps={["Full Stack Developer", 2000, "Multimedia Designer", 2000]}
                                        wrapper="p"
                                    /> */}
                                    &nbsp;Full Stack Developer&nbsp;
                                </p>
                            </div>
                            <div className={style.roleCont}>
                                <p className={style.whiteText}>and a &nbsp;</p>
                                <p className={style.des}>
                                    &nbsp;Multimedia Designer&nbsp;
                                </p>
                            </div>
                        </div>
                        <div className={style.btnsCont}>
                            <a href="https://www.linkedin.com/in/facundotombesi/" target="_blank" rel="noreferrer">
                                <button className={style.buttons}>LinkedIn</button>
                            </a>
                            <a href="https://github.com/FacuTombesi" target="_blank" rel="noreferrer">
                                <button className={style.buttons}>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------- ABOUT -------------------------- */}
            <section className={style.about} id="about">
                <div className={style.aboutCont}>
                    <p className={style.aboutTitle}>ABOUT ME</p>
                    <hr color='#00bedd' width='10%' />
                    <p className={style.aboutInfo}> 
                        Hi! My name is Facundo Tombesi, from Argentina. I got my Multimedia Designer degree on 2018 and ever since I've been working as a freelance designer, doing web design, logo design and personal business cards for my clients. But I wanted to grow even more and do more than just design web sites, I wanted to be able to develop them as well.
                    </p>
                    <p className={style.aboutInfo}> 
                        So, on october 2022, I started studying for Full Stack Developer at SoyHenry and 4 months later I got my Full Stack Developer certificate. Now I'm looking to work in a place where I can put to test my skills both as a designer and a developer. I'm still a junior developer and I'm still learning but with time I'll become a true professional.
                    </p>
                </div>
            </section>
            {/* -------------------------- PROJECTS -------------------------- */}
            <section className={style.projects} id="projects">
                <div className={style.projCont}>
                    <p className={style.projSecTitle}>LATEST PROJECTS</p>
                    <hr color='#00bedd' width='10%' />
                    {/* ------------- PROJECT 1 ------------- */}
                    <a href="/projects/voyhenry">
                        <div className={style.latestProj}>
                            <img
                                className={style.projImg}
                                src={projOne}
                                alt="voyHenry"
                                title="voyHenry"
                                loading="lazy"
                            />
                            <div className={style.projInfo}>
                                <p className={style.projTitle}>voyHenry</p>
                                <hr color='#00bedd' width='10%' />
                                <p className={style.projSummary}>
                                    Group project made for the last instance of the Fullstack Developer course at Henry.
                                </p>
                                <p className={style.projTech}>Tech used:&nbsp;</p>
                                <div className={style.projTechList}>
                                    <img
                                        className={style.projTechIcon}
                                        src={skillJAVASCRIPT}
                                        alt="Javascript"
                                        title="Javascript"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillREACT}
                                        alt="React"
                                        title="React"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillREDUX}
                                        alt="Redux"
                                        title="Redux"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillNODEJS}
                                        alt="Node.JS"
                                        title="Node.JS"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillEXPRESS}
                                        alt="Express"
                                        title="Express"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillSEQUELIZE}
                                        alt="Sequelize"
                                        title="Sequelize"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillPOSTGRESQL}
                                        alt="PostgreSQL"
                                        title="PostgreSQL"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillHTML}
                                        alt="HTML"
                                        title="HTML"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillCSS}
                                        alt="CSS"
                                        title="CSS"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillADOBEXD}
                                        alt="AdobeXD"
                                        title="AdobeXD"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillILLUSTRATOR}
                                        alt="Adobe Illustrator"
                                        title="Adobe Illustrator"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* ------------------------------------- */}
                    {/* ------------- PROJECT 2 ------------- */}
                    <a href="/projects/foodpi">
                        <div className={style.latestProj}>
                            <img
                                className={style.projImg}
                                src={projTwo}
                                alt="Food PI"
                                title="Food PI"
                                loading="lazy"
                            />
                            <div className={style.projInfo}>
                                <p className={style.projTitle}>Food PI</p>
                                <hr color='#00bedd' width='10%' />
                                <p className={style.projSummary}>
                                    PI (Individual Proyect) made for the last instance of the Fullstack Developer course at Henry.
                                </p>
                                <p className={style.projTech}>Tech used:&nbsp;</p>
                                <div className={style.projTechList}>
                                    <img
                                        className={style.projTechIcon}
                                        src={skillJAVASCRIPT}
                                        alt="Javascript"
                                        title="Javascript"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillREACT}
                                        alt="React"
                                        title="React"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillREDUX}
                                        alt="Redux"
                                        title="Redux"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillNODEJS}
                                        alt="Node.JS"
                                        title="Node.JS"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillEXPRESS}
                                        alt="Express"
                                        title="Express"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillPOSTGRESQL}
                                        alt="PostgreSQL"
                                        title="PostgreSQL"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillHTML}
                                        alt="HTML"
                                        title="HTML"
                                        loading="lazy"
                                    />
                                    <img
                                        className={style.projTechIcon}
                                        src={skillCSS}
                                        alt="CSS"
                                        title="CSS"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* ------------------------------------- */}
                    <a href="/projects" style={{ textAlign: "center" }}>
                        <button className={style.projBtn}>See more</button>
                    </a>
                </div>
            </section>
            {/* -------------------------- SKILLS -------------------------- */}
            <section className={style.skills} id="skills">

            </section>
        </div>
    );
};

export default Home;