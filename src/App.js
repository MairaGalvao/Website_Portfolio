import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { DetailsArticles } from "./Components/DetailsArticles";
import { DetailsPortfolio } from "./Components/DetailsPortfolio";
import "./css/App.css";
import { useHistory as history } from "react-router-dom";
import { Home } from "./Components/Home";

function App() {
  return (
    <>
      <Router history={history}>
        <>
          <NavBar />
          <Home />
          <DetailsPortfolio />
          <DetailsArticles />
          <Contact />
          <Footer />
        </>

        <Switch>
          <Route path={"/"} />
          <Route path={"/portfolio"} />
          <Route path={"/extras"} />
          <Route path={"/contact"} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
