import React, { useContext } from "react";
import styled from "styled-components";
import langENG from "../../assets/img/langENG.png";
import langESP from "../../assets/img/langESP.png";
import LangContext from "./LangContext";

const LangButton = () => {
    const { lang, toggleLang } = useContext(LangContext);

    return (
        <ToggleBtn onClick={toggleLang}>
            {lang === "en" 
                ? <ToggleIcon src={langENG} alt="English" />
                : <ToggleIcon src={langESP} alt="Spanish" />
            }
        </ToggleBtn>
    );
};

/* ---------------------------------- STYLES ---------------------------------- */

const ToggleBtn = styled.button `
    border: none;
    background: transparent;
    cursor: pointer;
    margin: 15px;
`

const ToggleIcon = styled.img `
    width: 25px;

    @media (max-width: 768px) {
        width: 45px;
    }
`

export default LangButton;