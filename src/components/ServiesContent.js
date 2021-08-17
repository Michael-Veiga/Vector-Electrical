import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import ServicesRes from '../components/ServicesRes';
import ServicesCom from '../components/ServicesCom';
import ServicesInd from '../components/ServicesInd';
import ServicesPar from '../components/ServicesPar';

function ServicesContent() {
  return (
    <Container className="mt-4">
      <Card className="svcFirstCard border-0">
        <Card.Header
          className="svcCardTitle"
          style={{
            backgroundColor: '#8c1414',
            borderBottom: '1px solid #bfa552',
          }}
        >
          Vector Electrical Services
        </Card.Header>
        <Card.Body className="svcHeaderBody">
          <p className="text-left" style={{ textIndent: '1.5em' }}>
            Vector Electrical and Controls Corporation strives to be your full
            service electrical contractor. Whether its at home, at the office,
            or your industrial establishment, you can count on Vector to get it
            done right the first time and within budget. Give us a call and
            become a customer for life. Please find links below to our partner
            sites should they be of any specific interest. Thanks so much for
            visiting our site.
          </p>
        </Card.Body>
      </Card>
      <Row className="justify-content-around my-4">
        <Col xl={4} lg={12} md={12} sm={12} xs={12}>
          <ServicesRes />
        </Col>
        <Col id="colQuery" xl={4} lg={12} md={12} sm={12} xs={12}>
          <ServicesCom />
        </Col>
        <Col id="colQuery" xl={4} lg={12} md={12} sm={12} xs={12}>
          <ServicesInd />
        </Col>
      </Row>
      <ServicesPar />
    </Container>
  );
}

export default ServicesContent;
