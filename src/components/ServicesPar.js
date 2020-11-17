import React from 'react';
import {Card, Row, Col} from 'react-bootstrap'

import gen from '../images/generator.jpg';
import plc from '../images/plcControl.jpg'

function ServicesPar() {
    return(
        <div>
            <Card className="mx-auto my-3" style={{border: "1.5px solid rgb(218,165,32)"}}>
                <Row className="no-gutters">
                    <Col md={3}>
                        <Card.Img variant="card-img" className="parCard" src={gen}/>
                    </Col>
                    <Col md={9}>
                        <Card.Title className="prodTitle mt-3">Generac Generators</Card.Title>
                        <hr className="my-2"/>
                        <Card.Body className="py-0 text-center">
                            <Card.Text className="mb-2">We Install Generac Generators and are a certified repair and installation company. Please click on their link for additional information. Should you be interested in a quote, please contact us for a free estimate.</Card.Text>
                            <Card.Link className="" target="_blank" href="https://www.generac.com/all-products/generators/home-backup-generators#?cat=6&cat=214&cat=217&cat=249">More Information on Generac Generators</Card.Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card className="mx-auto" style={{border: "1.5px solid rgb(218,165,32)"}}>
                <Row className="no-gutters">
                    <Col md={3}>
                        <Card.Img variant="card-img" className="parCard" src={plc}/>
                    </Col>
                    <Col md={9}>
                        <Card.Title className="prodTitle mt-3">Allen Brady Control Systems</Card.Title>
                        <hr className="my-2"/>
                        <Card.Body className="py-0 text-center">
                            <Card.Text className="mb-2">We install Allen Bradley Control systems . Please visit Allen Bradley's site should you have any control related questions. Should you be considering a new AB system, please contact us for additional information.</Card.Text>
                            <Card.Link className="" target="_blank" href="https://www.rockwellautomation.com/en-dk/products/hardware/allen-bradley/programmable-controllers/all-products.html#large-control-systems">More Information on Allen Bradley Control Systems</Card.Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ServicesPar;