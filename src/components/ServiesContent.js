import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import ServicesRes from '../components/ServicesRes';
import ServicesCom from '../components/ServicesCom';
import ServicesInd from '../components/ServicesInd';
import ServicesPar from '../components/ServicesPar';

function ServicesContent() {
    return(
        <Container className="mt-3">
            <p>Vector Electrical and Controls Corporation strives to be your full service electrical contractor. Whether its at home, at the office, or your industrial establishment, you can count on Vector to get it done right the first time and within budget. Give us a call and become a customer for life. Please find links below to our partner sites should they be of any specific interest. Thanks so much for visiting our site.</p>
                <ServicesPar/>
                <Row className="align-items-stretch my-3">
                    <Col md={4}>
                    <ServicesRes />
                    </Col>
                    <Col md={4}>
                    <ServicesCom />
                    </Col>
                    <Col md={4}>
                    <ServicesInd />
                    </Col>
                </Row>
        </Container>
    )
}

export default ServicesContent;