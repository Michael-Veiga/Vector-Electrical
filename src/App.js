import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import JumboImg from './components/JumboImg';

function App() {
  return (
    <div className="App">
      <Router basename="/vector-electrical">
        <JumboImg />
        <Nav className="nav justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link className="navLink" as={Link} exact to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link className="navLink" as={Link} exact to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link className="navLink" as={Link} exact to="/services">
              Services
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link className="navLink" as={Link} exact to="/gallery">
              Gallery
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link className="navLink" as={Link} exact to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
