import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

import ContactForm from './ContactForm';

function ContactContent() {
    return (
    <Container className="my-3 py-2">
          <Card className="mx-auto shadow border-0 mb-3" >
              <Card.Header className="cntCardHeader" style={{backgroundColor: "#8f9397"}}>Contact Vector Electrical</Card.Header>
                <Card.Body className="cntCardBody">
                    <Card.Text>To reach us by email, please fill out the form below</Card.Text>
                </Card.Body>
          </Card>
        <Row className="text-left">
            <Col md={12}>
            <ContactForm />
            </Col>
        </Row>
    </Container>
    );
}

export default ContactContent;