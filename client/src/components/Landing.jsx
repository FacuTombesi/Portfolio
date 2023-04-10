import React from "react";
import styled from "styled-components";

const Landing = () => {
    return (
        <Container id="home">
            <Banner>
                <Hi>Hi!</Hi>
                <div>
                    <Welcome>Welcome to my portfolio</Welcome>
                    <hr color='#00bedd' width='100%' />
                    <NameAndRole>
                        <NameCont>
                            <WhiteText>My name is &nbsp;</WhiteText>
                            <Name>Facundo Tombesi</Name>
                        </NameCont>
                        <RoleCont>
                            <WhiteText>and I'm a &nbsp;</WhiteText>
                            <RoleDev>Full Stack Developer</RoleDev>
                        </RoleCont>
                        <RoleCont>
                            <WhiteText>and &nbsp;</WhiteText>
                            <RoleDes>Multimedia Designer</RoleDes>
                        </RoleCont>
                    </NameAndRole>
                    <BtnsCont>
                    <a href="https://www.linkedin.com/in/facundotombesi/" target="_blank">
                        <Buttons>LinkedIn</Buttons>
                    </a>
                    <a href="https://github.com/FacuTombesi" target="_blank">
                        <Buttons>GitHub</Buttons>
                    </a>
                    </BtnsCont>
                </div>
            </Banner>
        </Container>
    );
};

/* ---------------------------------------------- STYLES ---------------------------------------------- */

const Container = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1080px;
`

const Banner = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    width: 50%;
`

const Hi = styled.p `
    font-family: 'Roboto', sans-serif;
    color: #00bedd;
    font-weight: 900;
    font-size: 1100%;
    margin-right: 2%;
`

const Welcome = styled.p `
    font-weight: 300;
    font-size: 120%;
    margin-bottom: 0px;
`

const NameAndRole = styled.div `
    margin-top: 15px;
`

const WhiteText = styled.p `
    font-weight: 300;
    font-size: 130%;
`

const NameCont = styled.div `
    display: flex;
    flex-direction: row;
`

const Name = styled.p `
    color: #00bedd;
    font-weight: 600;
    font-size: 130%;
`

const RoleCont = styled.div `
    display: flex;
    flex-direction: row;
    margin: 2px 0px;
`

const RoleDev = styled.p `
    background-color: #00bedd;
    font-weight: 600;
    font-size: 130%;
`

const RoleDes = styled.p `
    background-color: white;
    color: #00bedd;
    font-weight: 600;
    font-size: 130%;
`

const BtnsCont = styled.div `
    margin-top: 20px;
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

export default Landing;