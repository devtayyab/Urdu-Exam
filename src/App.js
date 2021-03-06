import React, { useEffect } from "react";
import "./App.css";
import Home from "./screen/home";
import { Biography } from "./screen/biography";
import PoetList from "./screen/poetlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./screen/contact";
import About from "./screen/About";
import Notime from "./screen/notime";
import Quizscreen from "./screen/quiz";
import Start from "./screen/start";
import Classscreen from "./screen/class";
import { useDispatch } from "react-redux";
import { Blogget, Lafzsget } from "./store/action/blog";
import Gazal from "./screen/gazzal";
import Nazm from "./screen/nazm";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Lafzsget());
  });

  return (
    <div
      style={{
        maxWidth: "100%",
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/class">
            <Classscreen></Classscreen>
          </Route>
          <Route exact path="/biography/:id?/:data?">
            <Biography />
          </Route>
          <Route exact path="/nazm/:id?/:data?">
            <Nazm />
          </Route>
          <Route exact path="/gazzal/:id?/:data?">
            <Gazal />
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
          <Route exact path="/noclass">
            <Notime></Notime>
          </Route>
          {/* <Route exact path="/nazm">
            </p>
          </Route> */}
          {/* <Route exact path="/gazzal">
            <Gazal />
          </Route> */}
          <Route exact path="/quiz">
            <Quizscreen></Quizscreen>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
