import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import gen from '../images/generator.jpg';
import plc from '../images/plcControl.jpg';

function ServicesPar() {
  return (
    <div>
      <Card
        className="parCard mx-auto my-4"
        style={{ border: '2px solid #bfa552', backgroundColor: '#fcfbf7' }}
      >
        <Row className="no-gutters">
          <Col md={3}>
            <Card.Img variant="card-img" className="parCardImg" src={gen} />
          </Col>
          <Col md={9}>
            <Card.Title className="prodTitle mt-3">
              Generac Generators
            </Card.Title>
            <hr
              className="my-2 mr-3"
              style={{ borderTop: '2px solid #8c1414' }}
            />
            <Card.Body className="parCardBody py-0 text-center">
              <Card.Text className="mb-2 text-left">
                We Install Generac Generators and are a certified repair and
                installation company. Please click on their link for additional
                information. Should you be interested in a quote, please contact
                us for a free estimate.
              </Card.Text>
              <Card.Link
                style={{ textDecoration: 'underline' }}
                target="_blank"
                href="https://www.generac.com/all-products/generators/home-backup-generators#?cat=6&cat=214&cat=217&cat=249"
              >
                More Information on Generac Generators
              </Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card
        className="parCard mx-auto"
        style={{ border: '2px solid #bfa552', backgroundColor: '#fcfbf7' }}
      >
        <Row className="no-gutters">
          <Col md={3}>
            <Card.Img variant="card-img" className="parCardImg" src={plc} />
          </Col>
          <Col md={9}>
            <Card.Title className="prodTitle mt-3">
              Allen Bradley Control Systems
            </Card.Title>
            <hr
              className="my-2 mr-3"
              style={{ borderTop: '2px solid #8c1414' }}
            />
            <Card.Body className="parCardBody py-0 text-center">
              <Card.Text className="mb-2 text-left">
                We install Allen Bradley Control systems . Please visit Allen
                Bradley's site should you have any control related questions.
                Should you be considering a new AB system, please contact us for
                additional information.
              </Card.Text>
              <Card.Link
                style={{ textDecoration: 'underline' }}
                target="_blank"
                href="https://www.rockwellautomation.com/en-dk/products/hardware/allen-bradley/programmable-controllers/all-products.html#large-control-systems"
              >
                More Information on Allen Bradley Control Systems
              </Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ServicesPar;
