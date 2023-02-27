import React from "react";
import About from "./componets/About/about";
import Intro from "./componets/intro/Intro";
import Portfoliolist from "./componets/PortfolioList/portfoliolist";
import Skillist from "./componets/SkilsList/skillist";
import Contact from "./componets/Contact/contact";
import Toggle from "./componets/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <About />
      <Portfoliolist />
      <Skillist />
      <Contact />
      <Toggle />
    </div>
  );
}

export default App;
