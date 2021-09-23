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
import { Provider } from "react-redux";
import {store} from "./store/store";
import Start from "./screen/start";
import Classscreen from "./screen/class";
function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          maxWidth: "100%",
        }}
      >
        <Router>
          <Switch>
          <Route exact path="/start">
              <Start></Start>
            </Route>
            <Route exact path="/class">
           <Classscreen></Classscreen>
            </Route>
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
    </Provider>
  );
}

export default App;
