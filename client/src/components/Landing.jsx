import React, { useContext } from "react";
import style from "../styles/Landing.module.css";
import LangContext from "../styles/language/LangContext";

const Landing = () => {
    const { lang } = useContext(LangContext);

    return (
        <section className={style.container} lang={langs[lang]} id="home">
            <div  className={style.banner}>
                <p  className={style.hi}>{langs[lang].salute}</p>
                <div  className={style.bannerInfo}>
                    <p  className={style.welcome}>{langs[lang].welcome}</p>
                    <hr color='#00bedd' width='100%' />
                    <div  className={style.nameAndRole}>
                        <div  className={style.nameCont}>
                            <p  className={style.whiteText}>{langs[lang].myName} &nbsp;</p>
                            <p  className={style.name}>{langs[lang].name}</p>
                        </div>
                        <div  className={style.roleCont}>
                            <p  className={style.whiteText}>{langs[lang].andIm} &nbsp;</p>
                            <p  className={style.roleDev}>{langs[lang].dev}</p>
                        </div>
                        <div  className={style.roleCont}>
                            <p  className={style.whiteText}>{langs[lang].andA} &nbsp;</p>
                            <p  className={style.roleDes}>{langs[lang].des}</p>
                        </div>
                    </div>
                    <div  className={style.btnsCont}>
                        <a href="https://www.linkedin.com/in/facundotombesi/" target="_blank" rel="noreferrer">
                            <button  className={style.buttons}>LinkedIn</button>
                        </a>
                        <a href="https://github.com/FacuTombesi" target="_blank" rel="noreferrer">
                            <button  className={style.buttons}>GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------------------------------- LANGUAGES ---------------------------------- */

const langs = {
    en: {
        salute: "Hi!",
        welcome: "Welcome to my portfolio",
        myName: "My name is",
        name: "Facundo Tombesi",
        andIm: "and I'm a",
        dev: "Full Stack Developer",
        andA: "and a",
        des: "Multimedia Designer",
    },
    es: {
        salute: "Hola!",
        welcome: "Bienvenidos a mi portfolio",
        myName: "Me llamo",
        name: "Facundo Tombesi",
        andIm: "y soy un",
        dev: "Desarrollador Full Stack",
        andA: "y",
        des: "Diseñador Multimedia",
    },
};

export default Landing;