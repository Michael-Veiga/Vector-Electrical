import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import vector from '../images/vectorSlim.png';
function JumboImg() {
  return (
    <Jumbotron fluid={true} className="jumbo mb-0 py-0">
      <Container className="logoBg" fluid={true}>
        <div className="centerLogo">
          <img className="logo" src={vector} />
          <h2 className="logoTwo">
            BRINGING <span className="flicker">POWER</span> TO THE{' '}
            <span className="fast-flicker">PEOPLE</span>
          </h2>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default JumboImg;
