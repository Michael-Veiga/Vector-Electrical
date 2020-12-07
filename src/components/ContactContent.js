import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons';

import ContactForm from './ContactForm';

function ContactContent() {
    return (
    <Container className="my-3 py-2">
          <Card className="cntCard mx-auto border-0 mb-3" >
              <Card.Header className="cntCardHeader" style={{backgroundColor: "#8c1414", borderBottom: "1px solid #bfa552"}}>Contact Vector Electrical</Card.Header>
                <Card.Body className="cntCardBody">
                    <Card.Text>If you'd like additional information or to schedule an appointment, you can reach us via the contact information below.</Card.Text> 
                    <Card.Text>
                    Otherwise, you can send us an email using the following contact form.</Card.Text>
                    <hr className="mx-3" style={{borderTop: "1px solid #8c1414"}}/>
                    <Row className="justify-content-center">
                        <Col md={3}>
                            <h5 style={{color: "#bfa552"}}>Contact Information:</h5>
                        </Col>
                        <Col className="" md={4}>
                        <FontAwesomeIcon className="fab mx-2" icon={faEnvelope} style={{height: "1.25em", width: "2em"}}/>
                        P.O. Box 61
                        Hollis, NH 03049
                        </Col>    
                        <Col className="" md={3}>
                        <FontAwesomeIcon className="fab mx-2" icon={faPhoneSquare} style={{height: "1.25em", width: "2em"}}/>
                        +1 (603) 465 2828
                        </Col>    
                    </Row>
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