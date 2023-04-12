import React from "react";
// import Typical from "react-typical";
import NavBar from "../components/NavBar";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import style from "../styles/Home.module.css";

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
            <About />
            <ProjectsSection />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;