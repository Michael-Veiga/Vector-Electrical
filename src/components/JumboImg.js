import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap'

import vector from '../images/vectorSlim.png';
function JumboImg () {
        return (
            <Jumbotron fluid className="jumbo pt-3 pb-4 mb-0">
            <Container className="logoBg pt-3 pb-1">                     
              <img className="logo p-1" src={vector} />
              <h2 className="logoTwo">BRINGING <span className="flicker">POWER</span> TO THE <span className="fast-flicker">PEOPLE</span></h2>            
            </Container>
        </Jumbotron>
            );
}

export default JumboImg;

