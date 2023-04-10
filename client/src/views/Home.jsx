import React from "react";
import Typical from "react-typical";
import NavBar from "../components/NavBar";
import style from "../styles/Home.module.css";

const Home = () => {
    return (
        <div>
            <NavBar />
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
                                <p className={style.roleText}>
                                    <Typical
                                        loop={Infinity}
                                        steps={["Full Stack Developer", 2000, "Multimedia Designer", 2000]}
                                        wrapper="p"
                                    />
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
            <section className={style.about} id="about">
                <div>
                    <p className={style.aboutTitle}>ABOUT ME</p>
                    <hr color='#00bedd' width='100%' />
                    <p> 
                        Hi! My name is Facundo Tombesi, from Argentina. By the time of writing (Friday 27 of January of 2023), I'm a Multimedia Designer and currently studying Fullstack 
                        Development at HENRY. I'm at the last stages of my first step as a Fullstack Developer and this project is part of that.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;