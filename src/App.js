import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGa from 'react-ga';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import JumboImg from './components/JumboImg';

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-189625087-1');

    // to report page view
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <div className="App">
      <Router>
        <JumboImg />
        <Nav className="nav justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link id="navLink" as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link id="navLink" as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link id="navLink" as={Link} to="/services">
              Services
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link id="navLink" as={Link} to="/gallery">
              Gallery
            </Nav.Link>
          </Nav.Item>
          <p className="divider">|</p>
          <Nav.Item>
            <Nav.Link id="navLink" as={Link} to="/contact">
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
