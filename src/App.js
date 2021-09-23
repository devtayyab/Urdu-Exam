import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screen/home";
import { Biography } from "./screen/biography";
import PoetList from "./screen/poetlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./screen/contact";
import About from "./screen/About";
import Quizscreen from "./screen/quiz";
function App() {
  return (
    <div
      style={{
        maxWidth: "100%",
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/biography">
            <Biography />
          </Route>
          <Route exact path="/poetlist">
            <PoetList />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quiz">
            <Quizscreen></Quizscreen>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
