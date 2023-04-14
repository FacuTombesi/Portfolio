import React from "react";
import ScrollToTop from "react-scroll-to-top";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            <ScrollToTop 
                smooth="true"
                color="white"
                width="22px"
                height="22px"
                style={{ backgroundColor: "#00bedd", borderRadius: "50%" }}
            />
            <NavBar />
            <Landing />
            <About />
            <ProjectsSection />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;