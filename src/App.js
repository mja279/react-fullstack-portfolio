import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";


// import mainBackground from "./components/assets/mainBackground.png";
import './App.css';


function App() {
  return (
    <Router> 
      <div>
        <NavTabs />
        <Route path="/" component={Home}/>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
