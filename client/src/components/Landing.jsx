import React, { useContext } from "react";
import style from "../styles/Landing.module.css";
import LangContext from "../styles/language/LangContext";
import langs from "../styles/language/langs.json";

const Landing = () => {
    const { lang } = useContext(LangContext);

    return (
        <section className={style.container} lang={langs[lang]} id="home">
            <div  className={style.banner}>
                <p  className={style.hi}>{langs[lang].lan_salute}</p>
                <div  className={style.bannerInfo}>
                    <p  className={style.welcome}>{langs[lang].lan_welcome}</p>
                    <hr color='#00bedd' width='100%' />
                    <div  className={style.nameAndRole}>
                        <div  className={style.nameCont}>
                            <p  className={style.whiteText}>{langs[lang].lan_myName} &nbsp;</p>
                            <p  className={style.name}>{langs[lang].lan_name}</p>
                        </div>
                        <div  className={style.roleCont}>
                            <p  className={style.whiteText}>{langs[lang].lan_andIm} &nbsp;</p>
                            <p  className={style.roleDev}>{langs[lang].lan_dev}</p>
                        </div>
                        <div  className={style.roleCont}>
                            <p  className={style.whiteText}>{langs[lang].lan_andA} &nbsp;</p>
                            <p  className={style.roleDes}>{langs[lang].lan_des}</p>
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

export default Landing;