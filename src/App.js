import React from 'react';
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom';

import {Jumbotron, Container, Nav, Row} from 'react-bootstrap';

import vector from './images/vectorTor.png';
import lightning from './images/lightning.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import JumboImg from './components/JumboImg';

function App() {
  return (
    <div className="App">
      <Router basename="/vector-electrical">
        <Jumbotron fluid className="jumbo pt-3 pb-4 mb-0">
            <Container className="logoBg">                     
              <img className="logo" src={vector}/>            
            </Container>
        </Jumbotron>
          <Nav className="nav justify-content-center" activeKey="/">
            <Nav.Item>
              <Nav.Link className="navLink" as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <p className="divider">|</p>
            <Nav.Item>
              <Nav.Link className="navLink" as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            <p className="divider">|</p>
            <Nav.Item>
              <Nav.Link className="navLink" as={Link} to="/services">Services</Nav.Link>
            </Nav.Item>
            <p className="divider">|</p>
            <Nav.Item>
              <Nav.Link className="navLink" as={Link} to="/gallery">Gallery</Nav.Link>
            </Nav.Item>
            <p className="divider">|</p>
            <Nav.Item>
              <Nav.Link className="navLink" as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/services' component={Services}/>
              <Route path='/gallery' component={Gallery}/>
              <Route path='/contact' component={Contact}/>
              <Route path="*" component={Home}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
