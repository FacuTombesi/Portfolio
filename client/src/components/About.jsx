import React from "react";
import style from "../styles/About.module.css";

const About = () => {
    return (
        <section className={style.about} id="about">
            <div className={style.aboutCont}>
                <p className={style.aboutTitle}>ABOUT ME</p>
                <hr color="#00bedd" width="10%" />
                <p className={style.aboutInfo}> 
                    Hi! My name is Facundo Tombesi, from Argentina. I'm a Multimedia Designer and Full Stack Developer. I got my Multimedia Designer degree on 2018 and ever since I've been working as a freelance designer, doing web design, logo design and personal business cards for my clients. But I wanted to grow even more and do more than just design web sites, I wanted to be able to develop them as well.
                </p>
                <p className={style.aboutInfo}> 
                    So, on october 2022, I started studying for Full Stack Developer at SoyHenry and 4 months later I got my Full Stack Developer certificate. Now I'm looking to work in a place where I can put to test my skills both as a designer and a developer. I'm still a junior developer and I'm still learning but with time I'll become a true professional.
                </p>
                <div className={style.btnsCont}>
                    <a href="https://drive.google.com/file/d/1pkibJseU0aO3RKyRZTMpis9VaRs--EfI/view?usp=share_link" target="_blank" rel="noreferrer">
                        <button className={style.buttons}>Download my CV (english)</button>
                    </a>
                    <a href="https://drive.google.com/file/d/1pTeX5Vgkf9Z0RuBu6FVKR5F6OmCDIPyj/view?usp=share_link" target="_blank" rel="noreferrer">
                        <button className={style.buttons}>Download my CV (spanish)</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;