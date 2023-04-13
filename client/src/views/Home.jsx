import React from "react";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
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