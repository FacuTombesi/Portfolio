import React, { useContext } from "react";
import styled from "styled-components";
import iconLight from "../../assets/img/siteLIGHT.png";
import iconDark from "../../assets/img/siteDARK.png";
import iconDarkMobile from "../../assets/img/siteDARK(mobile).png";
import ThemeContext from "./ThemeContext";

const ToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <ToggleBtn onClick={toggleTheme}>
            {theme === "light" 
                ? (<ToggleIcon src={iconLight} alt="Light Mode" />)
                : (
                    <ToggleIcon 
                        src={window.innerWidth <= 768 
                            ? iconDarkMobile
                            : iconDark
                        } 
                        alt="Dark Mode" 
                    />
                )
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
        width: 50px;
    }
`

export default ToggleButton;