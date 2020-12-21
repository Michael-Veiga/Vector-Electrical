import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    emailjs
      .send(
        process.env.REACT_APP_ES_SVC,
        process.env.REACT_APP_ES_TEMP,
        templateParams,
        process.env.REACT_APP_ES_USER
      )
      .then(
        result => {
          console.log(result.text);
          toast.success('Message Sent');
        },
        error => {
          console.log(error.text);
          toast.error('Error Delivering Message');
        }
      );

    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <Form
          className="cForm py-3"
          onSubmit={this.handleSubmit.bind(this)}
          id="contact-form"
          style={{ margin: '0 auto', width: '100%' }}
        >
          <h4 className="cFormTitle text-center">Email Contact Form</h4>
          <hr className="mx-5" style={{ borderTop: '2px solid #8c1414' }} />

          <Form.Group className="px-5" controlId="formBasicName">
            <Form.Label className="">Full Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              placeholder="John Smith"
            />
          </Form.Group>

          <Form.Group className="px-5" controlId="formBasicEmail">
            <Form.Label className="">Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="john@gmail.com"
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')}
            />
          </Form.Group>

          <Form.Group className="px-5" controlId="formBasicSubject">
            <Form.Label className="">Subject</Form.Label>
            <Form.Control
              required
              name="subject"
              type="text"
              placeholder="Quote for Generac Generator"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, 'subject')}
            />
          </Form.Group>

          <Form.Group className="px-5" controlId="formBasicMessage">
            <Form.Label className="">Message</Form.Label>
            <Form.Control
              required
              name="message"
              type="textarea"
              row="3"
              placeholder="I'm looking for an estimate..."
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
            />
          </Form.Group>

          <button
            className="customBtn d-inline-block px-5 ml-5"
            variant="primary"
            type="submit"
          >
            Send Message
          </button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
