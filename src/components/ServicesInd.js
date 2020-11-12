import React from 'react';
import {Button, ListGroup, Card} from 'react-bootstrap';

class ServicesInd extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visibility: true
        };

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }));
    }

    render() {
        return(
                <Card className="">
                    <Card.Header className="svcCardHeader">Industrial Services</Card.Header>
                        <Card.Body className="svcCardBody d-flex flex-column">
                            <Card.Text>Vector Electrical and Controls Corporation started out in the industrial market place and quickly became one of the only industrial control company's in the North East. Vector specialized in all types of industrial automation and industrial controls for the manufacturing, pharmaceutical and bio tech industries. Our company focus has expanded to all aspects of the industrial market place from control systems to entire facility build outs. Here's a small sampling of what we can do for you. Give us a try and become a customer for life.</Card.Text>
                        <button className="customBtn" onClick={this.toggleDisplay}>List of Industrial Services</button>
                        {this.state.display && 
                            <ListGroup className="list-group-flush">
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
                        }
                    </Card.Body>
                </Card>
        )     
    }
}

export default ServicesInd;