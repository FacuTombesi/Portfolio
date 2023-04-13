import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Projects from "./views/Projects";
import FoodPI from "./projects/FoodPI";
import VoyHenry from "./projects/VoyHenry";
import ThemeContext from "./styles/darkMode/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/foodpi" component={FoodPI} />
          <Route path="/projects/voyhenry" component={VoyHenry} />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
