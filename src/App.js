import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";


// import mainBackground from "./components/assets/mainBackground.png";
import './App.css';
import SideNav from "./components/SideNav";
import { Col, Container, Row } from "react-bootstrap";


function App() {
  return (
    <Router> 
      <Container fluid>
        <NavBar />
        <Row>
          <Col>
          <SideNav />
          
          </Col>
          <Col>
          <Route path="/" component={Home}/>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} /></Col>
        </Row>
        
        
        
      </Container>
    </Router>
  );
}

export default App;
