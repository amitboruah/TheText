import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#404040";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>

    <div>
      <Navbar
        title="TheText"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
        />


{/* react router  */}
{/* use exact for strictly match  */}
      <Switch>
        <Route exact path="/about">
          <About mode={mode}  />
        </Route>
        <Route exact path="/">
          <Textbox heading="Text Box" mode={mode} />
        </Route>
      </Switch>

    </div>
        </Router>
  );
}

export default App;
