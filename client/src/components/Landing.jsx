import React, { useContext } from "react";
import styled from "styled-components";
import LangContext from "../styles/language/LangContext";

const Landing = () => {
    const { lang } = useContext(LangContext);

    return (
        <Container lang={langs[lang]} id="home">
            <Banner>
                <Hi>{langs[lang].salute}</Hi>
                <BannerInfo>
                    <Welcome>{langs[lang].welcome}</Welcome>
                    <hr color='#00bedd' width='100%' />
                    <NameAndRole>
                        <NameCont>
                            <WhiteText>{langs[lang].myName} &nbsp;</WhiteText>
                            <Name>{langs[lang].name}</Name>
                        </NameCont>
                        <RoleCont>
                            <WhiteText>{langs[lang].andIm} &nbsp;</WhiteText>
                            <RoleDev>{langs[lang].dev}</RoleDev>
                        </RoleCont>
                        <RoleCont>
                            <WhiteText>{langs[lang].andA} &nbsp;</WhiteText>
                            <RoleDes>{langs[lang].des}</RoleDes>
                        </RoleCont>
                    </NameAndRole>
                    <BtnsCont>
                    <a href="https://www.linkedin.com/in/facundotombesi/" target="_blank" rel="noreferrer">
                        <Buttons>LinkedIn</Buttons>
                    </a>
                    <a href="https://github.com/FacuTombesi" target="_blank" rel="noreferrer">
                        <Buttons>GitHub</Buttons>
                    </a>
                    </BtnsCont>
                </BannerInfo>
            </Banner>
        </Container>
    );
};

/* ---------------------------------------------- STYLES ---------------------------------------------- */

const Container = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Banner = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 70%;
`

const Hi = styled.p `
    color: #00bedd;
    font-weight: 900;
    font-size: 1100%;
    margin-right: 2%;
`

const BannerInfo = styled.div `
    display: flex;
    flex-direction: column;
    width: 35%;
`

const Welcome = styled.p `
    font-weight: 300;
    color: white;
    font-size: 100%;
    margin-bottom: 5px;
`

const NameAndRole = styled.div `
    margin-top: 0px;
`

const WhiteText = styled.p `
    color: white;
    font-weight: 300;
    font-size: 120%;
    margin: 0px;
`

const NameCont = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`

const Name = styled.p `
    color: #00bedd;
    font-weight: 700;
    font-size: 120%;
    margin: 0px;
`

const RoleCont = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 5px;
`

const RoleDev = styled.p `
    background-color: #00bedd;
    color: white;
    font-weight: 700;
    font-size: 120%;
    margin: 0px;
`

const RoleDes = styled.p `
    background-color: white;
    color: #00bedd;
    font-weight: 700;
    font-size: 120%;
    margin: 0px;
`

const BtnsCont = styled.div `
    margin-top: 40px;
`

const Buttons = styled.button `
    background-color: transparent;
    border: 1px solid #00bedd;
    border-radius: 20px;
    color: white;
    padding: 5px 20px;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
        background-color: white;
        border: 1px solid white;
        color: #00bedd;
    }
`

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