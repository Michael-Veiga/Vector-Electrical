import React from 'react';
import {ListGroup, Card} from 'react-bootstrap';

class ServicesCom extends React.Component {
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
                    <Card.Header className="svcCardHeader">Commercial Services</Card.Header>
                    <Card.Body className="svcCardBody d-flex flex-column">
                        <Card.Text>Vector Electrical and Controls Corporation is in the forefront of design build applications for the commercial and light industrial markets. From Store fronts to data centers, Vector has the know how to get it done on time and on budget. With over thirty years of experience, there isn't much we havent done. From mom and pop shops to multi conglomerate corporations, let us show you how vector electrical is bringing power to the people. Give us try and you will be a customer for life. This is a small sampling of the services that we can provide you.</Card.Text>
                <button className="customBtn" onClick={this.toggleDisplay}>List of Commercial Services</button>
                {this.state.display && 
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Fire alarm systems</ListGroup.Item>
                        <ListGroup.Item>Security systems</ListGroup.Item>
                        <ListGroup.Item>Data centers</ListGroup.Item>
                        <ListGroup.Item>Copy center wiring</ListGroup.Item>
                        <ListGroup.Item>CCTV systems</ListGroup.Item>
                        <ListGroup.Item>Renovations/alterations</ListGroup.Item>
                        <ListGroup.Item>New Construction</ListGroup.Item>
                        <ListGroup.Item>Energy conservation systems</ListGroup.Item>
                        <ListGroup.Item>Photovoltaic design and installation</ListGroup.Item>
                        <ListGroup.Item>Office wiring</ListGroup.Item>
                        <ListGroup.Item>Design build services</ListGroup.Item>
                        <ListGroup.Item>Lighting design</ListGroup.Item>
                        <ListGroup.Item>New Service's and upgrades</ListGroup.Item>
                        <ListGroup.Item>Heavy equipment wiring</ListGroup.Item>
                        <ListGroup.Item>UPS systems</ListGroup.Item>
                        <ListGroup.Item>Generator wiring</ListGroup.Item>
                        <ListGroup.Item>Kitchen equipment</ListGroup.Item>
                        <ListGroup.Item>Sign wiring</ListGroup.Item>
                        <ListGroup.Item>Data systems</ListGroup.Item>
                        <ListGroup.Item>Telecom systems</ListGroup.Item>
                        <ListGroup.Item>Fiber optics and termination</ListGroup.Item>
                    </ListGroup>
                }
                    </Card.Body>
                </Card>
        )     
    }
}

export default ServicesCom;