import React from 'react';
import {ListGroup, Card} from 'react-bootstrap';

class ServicesCom extends React.Component {
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
                <Card className="svcCard border-0">
                <Card.Header className="svcCardHeader" style={{backgroundColor: "#a2a5a9"}}>Commercial Services</Card.Header>
                <Card.Body className="svcCardBody d-flex flex-column">
                    <Card.Text className="mb-0">Vector Electrical and Controls Corporation is in the forefront of design build applications for the commercial and light industrial markets. From Store fronts to data centers, Vector has the know how to get it done on time and on budget. With over thirty years of experience, there isn't much we havent done. From mom and pop shops to multi conglomerate corporations, let us show you how vector electrical is bringing power to the people. Give us try and you will be a customer for life. This is a small sampling of the services that we can provide you.</Card.Text>
                    <button className="customBtn mt-4" onClick={this.toggleDisplay}>List of Commercial Services</button>
                </Card.Body>
                
                </Card>
            );
            } else {
            return (
                <Card className="svcCard border-0">
                <Card.Header className="svcCardHeader" style={{backgroundColor: "#a2a5a9"}}>Commercial Services</Card.Header>
                <Card.Body className="svcCardBody d-flex flex-column">
                    <ListGroup className="listG list-group-flush">
                    <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Fire alarm systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Security systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Data centers</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Copy center wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>CCTV systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Renovations/alterations</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>New Construction</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Energy conservation systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Photovoltaic design and installation</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Office wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Design build services</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Lighting design</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>New Service's and upgrades</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Heavy equipment wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>UPS systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Generator wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Kitchen equipment</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Sign wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Data systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Telecom systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Fiber optics and termination</ListGroup.Item>
                    </ListGroup>
                    <button className="customBtn mt-2" onClick={this.toggleDisplay}>List of Commercial Services</button>
                    </Card.Body>
                </Card>
                    );
                }
    }
}

export default ServicesCom;

