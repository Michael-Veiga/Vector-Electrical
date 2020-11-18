import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

function Footer() {
    return (
      <footer className="mt-5">
        <Container fluid={true} >
          <Row className="foot-effect p-1">
            <Col className="p-0 d-flex justify-content-end">
              Vector Electrical & Controls Corp.™
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  
  export default Footer;
  