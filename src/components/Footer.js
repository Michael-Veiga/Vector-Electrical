import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <Container fluid={true}>
        <Row className="foot-effect p-1">
          <Col className="p-0 d-flex justify-content-start" xs={1}>
            <a
              href="https://www.facebook.com/vectorelectrical"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ height: '1.5em', width: '1.25em', color: '#bfa552' }}
              />
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-end">
            Vector Electrical & Controls Corp.™
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
