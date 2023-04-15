import React, { useContext } from "react";
import styled from "styled-components";
import iconLight from "../../assets/img/siteLIGHT.png";
import iconDark from "../../assets/img/siteDARK.png";
import ThemeContext from "./ThemeContext";

const ToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <ToggleBtn onClick={toggleTheme}>
            {theme === "light" 
                ? <ToggleIcon src={iconLight} alt="Light Mode" />
                : <ToggleIcon src={iconDark} alt="Dark Mode" />
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
`

export default ToggleButton;