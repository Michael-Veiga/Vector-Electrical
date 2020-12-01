import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {

    return(
        <div>
            <ToastContainer />
            <Form className="cForm shadow py-3" id="contact-form" style={{margin: '0 auto', width: "100%"}}>
              <h4 className="cFormTitle text-center">Email Contact Form</h4>
              <hr className="mx-5" style={{borderTop: "2px solid #8c1414"}}/>
              <Form.Group className="px-5">
                <Form.Label className="">Full Name</Form.Label>
                <Form.Control name="name" type="text"/>
              </Form.Group>
    
              <Form.Group className="px-5">
                <Form.Label className="text-left">Email</Form.Label>
                <Form.Control name="email" type="email"/>
              </Form.Group>
    
              <Form.Group className="px-5">
                <Form.Label className="">Subject</Form.Label>
                <Form.Control name="subject" type="text"/>
              </Form.Group>
    
              <Form.Group className="px-5">
                <Form.Label className="">Message</Form.Label>
                <Form.Control name="message" type="textarea" row="3"/>
              </Form.Group>
    
              <button className="customBtn d-inline-block px-5 ml-5" variant="primary" type="submit">
                Send Message
              </button>
            </Form>
        </div>
    );
}

export default ContactForm;

