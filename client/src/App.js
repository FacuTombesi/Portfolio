import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Projects from "./views/Projects";
import FoodPI from "./projects/FoodPI";
import VoyHenry from "./projects/VoyHenry";
import ThemeContext from "./styles/darkMode/ThemeContext";
import LangContext from "./styles/language/LangContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, toggleLang }}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/foodpi" component={FoodPI} />
            <Route path="/projects/voyhenry" component={VoyHenry} />
          </Switch>
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
