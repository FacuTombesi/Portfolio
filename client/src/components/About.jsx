import React from "react";
import styled from "styled-components";

const About = () => {
    return (
        <Container id="about">
            
        </Container>
    );
};

/* ---------------------------------------------- STYLES ---------------------------------------------- */

const Container = styled.section `
    background-color: ${props => props.theme.background};
    box-shadow: ${props => props.theme.shadow};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1080px;
`

export default About;