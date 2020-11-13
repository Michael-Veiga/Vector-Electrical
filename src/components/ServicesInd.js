import React from 'react';
import {ListGroup, Card} from 'react-bootstrap';

class ServicesInd extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            display: true
        };

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        if (this.state.display) {
        return (
                <Card className="svcCard">
                <Card.Header className="svcCardHeader">Residential Services</Card.Header>
                <Card.Body className="svcCardBody d-flex flex-column">
                    <Card.Text className="mb-0">Vector Electrical and Controls Corporation started out in the industrial market place and quickly became one of the only industrial control company's in the North East. Vector specialized in all types of industrial automation and industrial controls for the manufacturing, pharmaceutical and bio tech industries. Our company focus has expanded to all aspects of the industrial market place from control systems to entire facility build outs. Here's a small sampling of what we can do for you. Give us a try and become a customer for life.</Card.Text>
                    <button className="customBtn mt-4" onClick={this.toggleDisplay}>List of Industrial Services</button>
                </Card.Body>
                
                </Card>
            );
            } else {
            return (
                <Card className="svcCard">
                <Card.Header className="svcCardHeader">Industrial Services</Card.Header>
                <Card.Body className="svcCardBody d-flex flex-column">
                    <ListGroup className="listG list-group-flush">
                    <ListGroup.Item>Industrial controls and automation</ListGroup.Item>
                                <ListGroup.Item>Batch processing systems</ListGroup.Item>
                                <ListGroup.Item>Web processing systems</ListGroup.Item>
                                <ListGroup.Item>Manufacturing systems</ListGroup.Item>
                                <ListGroup.Item>Lighting design</ListGroup.Item>
                                <ListGroup.Item>Power distribution</ListGroup.Item>
                                <ListGroup.Item>High voltage work</ListGroup.Item>
                                <ListGroup.Item>Switch gear maintenance</ListGroup.Item>
                                <ListGroup.Item>Transformer maintenance</ListGroup.Item>
                                <ListGroup.Item>Generators</ListGroup.Item>
                                <ListGroup.Item>Industrial data networks</ListGroup.Item>
                                <ListGroup.Item>Telecommunications work</ListGroup.Item>
                                <ListGroup.Item>PLC design and programming</ListGroup.Item>
                                <ListGroup.Item>VFD design and programming</ListGroup.Item>
                                <ListGroup.Item>New construction</ListGroup.Item>
                                <ListGroup.Item>Renovations</ListGroup.Item>
                                <ListGroup.Item>Office reconfigurations</ListGroup.Item>
                                <ListGroup.Item>Pharmaceutical work</ListGroup.Item>
                                <ListGroup.Item>Bio tech work</ListGroup.Item>
                                <ListGroup.Item>Manufacturing environments</ListGroup.Item>
                    </ListGroup>
                    <button className="customBtn mt-2" onClick={this.toggleDisplay}>List of Industrial Services</button>
                    </Card.Body>
                </Card>
                    );
                }
    }
}

export default ServicesInd;