import React from 'react';
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom';

import {Jumbotron, Container, Nav} from 'react-bootstrap';

import vector from './images/vectorTrim.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Jumbotron className="pt-2 pb-5 mb-0" style={{backgroundColor: "white"}}>
            <Container>
              <img className="jumbo" src={vector} />
            </Container>
          </Jumbotron>
          <Nav className="justify-content-center" activeKey="/" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/services' component={Services}/>
              <Route exact path='/gallery' component={Gallery}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
