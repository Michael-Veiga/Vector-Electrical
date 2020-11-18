import React from 'react';
import {ListGroup, Card} from 'react-bootstrap';

class ServicesRes extends React.Component {
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
                <Card.Header className="svcCardHeader" style={{backgroundColor: "#a2a5a9"}}>Residential Services</Card.Header>
                <Card.Body className="svcCardBody d-flex flex-column">
                    <Card.Text className="mb-0">Vector Electrical and Controls Corporation has a long reputation of designing/building first quality electrical systems for the residential market. Our customers and other contractors alike are constantly taken by our attention to detail and innovative approach towards all that we do. We hope that you can put us to the test and experience first hand what the Vector experience means.
                    Included is list of some of our many services designed for the residential market. If you can't find what your looking for, not to worry, we do it all and are just a phone call away.</Card.Text>
                    <button className="customBtn mt-4" onClick={this.toggleDisplay}>List of Residential Services</button>
                </Card.Body>
                
                </Card>
            );
            } else {
            return (
                <Card className="svcCard">
                <Card.Header className="svcCardHeader" style={{backgroundColor: "#a2a5a9"}}>Residential Services</Card.Header>
                <Card.Body className="svcCardBody d-flex flex-column">
                    <ListGroup className="listG list-group-flush">
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Air conditioning wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Audio & video cabling</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Automatic emergency generator systems installation</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Ceiling fans</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Code compliance & corrections</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Computer cabling</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Dedicated computer power with surge protection</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Electric heat</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Electrical service upgrades</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Heating & cooling controls</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Home theater installations</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Automation systems</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Home theater lighting</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Hot tubs</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Indoor/outdoor lighting</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Swimming pools</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Knob & tube wiring removal</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Landscape lighting</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Lighting design & layout</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Lighting fixtures</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>New circuits</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>New construction</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Outlets, switches and dimmers</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Overhead & underground electrical services</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Remodeling</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Replacement of fuses with modern circuit breakers</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Rewiring of old circuits</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Data wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Cable TV wiring</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor: "#e1e2e4"}}>Phone wiring</ListGroup.Item>
                    </ListGroup>
                    <button className="customBtn mt-2" onClick={this.toggleDisplay}>List of Residential Services</button>
                    </Card.Body>
                </Card>
                    );
                }
    }
}

export default ServicesRes;