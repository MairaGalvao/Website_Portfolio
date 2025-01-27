import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { About } from "./Components/About";
import { DetailsArticles } from "./Components/DetailsArticles";
import { DetailsPortfolio } from "./Components/DetailsPortfolio";
import "./css/App.css";
import { useHistory as history } from "react-router-dom";
import { Home } from "./Components/Home";


function App() {
  // init loading as true
  const [isLoading, setIsLoading] = useState(true);
  const loadingTimeMS = 3000;

  useEffect(() => {
    // this code runs once, when the component mounts
    if (isLoading) {
      setTimeout(() => {
        // turn off loading
        setIsLoading(false);
      }, loadingTimeMS);
    }
  }, [isLoading, setIsLoading]);

  return (
    <>
      <myTest />
      <Router history={history}>
      
        <>
          <NavBar />
          <Home />
          <About />
          <DetailsPortfolio />
          <DetailsArticles />
          <Contact />
          <Footer />
        </>

        <Switch>
          <Route path={"/"} />
          <Route path={"/about"} />
          <Route path={"/portfolio"} />
          <Route path={"/extras"} />
          <Route path={"/contact"} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
