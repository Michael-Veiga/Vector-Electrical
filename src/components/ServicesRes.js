import React from 'react';
import {ListGroup, Card} from 'react-bootstrap';

class ServicesRes extends React.Component {
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
                <Card.Header className="svcCardHeader">Residential Services</Card.Header>
                <Card.Body className="svcCardBody d-flex flex-column">
                    <Card.Text>Vector Electrical and Controls Corporation has a long reputation of designing/building first quality electrical systems for the residential market. Our customers and other contractors alike are constantly taken by our attention to detail and innovative approach towards all that we do. We hope that you can put us to the test and experience first hand what the Vector experience means.
                    Included is list of some of our many services designed for the residential market. If you can't find what your looking for, not to worry, we do it all and are just a phone call away.</Card.Text>
                <button className="customBtn" onClick={this.toggleDisplay}>List of Residential Services</button>
                {this.state.display && 
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Air conditioning wiring</ListGroup.Item>
                        <ListGroup.Item>Audio & video cabling</ListGroup.Item>
                        <ListGroup.Item>Automatic emergency generator systems installation</ListGroup.Item>
                        <ListGroup.Item>Ceiling fans</ListGroup.Item>
                        <ListGroup.Item>Code compliance & corrections</ListGroup.Item>
                        <ListGroup.Item>Computer cabling</ListGroup.Item>
                        <ListGroup.Item>Dedicated computer power with surge protection</ListGroup.Item>
                        <ListGroup.Item>Electric heat</ListGroup.Item>
                        <ListGroup.Item>Electrical service upgrades</ListGroup.Item>
                        <ListGroup.Item>Heating & cooling controls</ListGroup.Item>
                        <ListGroup.Item>Home theater installations</ListGroup.Item>
                        <ListGroup.Item>Automation systems</ListGroup.Item>
                        <ListGroup.Item>Home theater lighting</ListGroup.Item>
                        <ListGroup.Item>Hot tubs</ListGroup.Item>
                        <ListGroup.Item>Indoor/outdoor lighting</ListGroup.Item>
                        <ListGroup.Item>Swimming pools</ListGroup.Item>
                        <ListGroup.Item>Knob & tube wiring removal</ListGroup.Item>
                        <ListGroup.Item>Landscape lighting</ListGroup.Item>
                        <ListGroup.Item>Lighting design & layout</ListGroup.Item>
                        <ListGroup.Item>Lighting fixtures</ListGroup.Item>
                        <ListGroup.Item>New circuits</ListGroup.Item>
                        <ListGroup.Item>New construction</ListGroup.Item>
                        <ListGroup.Item>Outlets, switches and dimmers</ListGroup.Item>
                        <ListGroup.Item>Overhead & underground electrical services</ListGroup.Item>
                        <ListGroup.Item>Remodeling</ListGroup.Item>
                        <ListGroup.Item>Replacement of fuses with modern circuit breakers</ListGroup.Item>
                        <ListGroup.Item>Rewiring of old circuits</ListGroup.Item>
                        <ListGroup.Item>Data wiring</ListGroup.Item>
                        <ListGroup.Item>Cable TV wiring</ListGroup.Item>
                        <ListGroup.Item>Phone wiring</ListGroup.Item>
                    </ListGroup>
                }
                </Card.Body>
                </Card>
        )     
    }
}

export default ServicesRes;