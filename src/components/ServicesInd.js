import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

class ServicesInd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    if (this.state.display) {
      return (
        <Card className="svcQueryCard border-0">
          <Card.Header
            className="svcCardHeader"
            style={{
              backgroundColor: '#8c1414',
              borderBottom: '1px solid #bfa552',
            }}
          >
            Industrial Services
          </Card.Header>
          <Card.Body id="svcCardBody" className="d-flex flex-column">
            <Card.Text className="text-start" style={{ textIndent: '1.5em' }}>
              We started out in the industrial market place and quickly became
              one of the only industrial control company's in the North East.
              Vector specialized in all types of industrial automation and
              industrial controls for the manufacturing, pharmaceutical and bio
              tech industries.
            </Card.Text>
            <Card.Text className="text-start">
              Our company focus has expanded to all aspects of the industrial
              market place from control systems to entire facility build outs.
              Here's a small sampling of what we can do for you. Give us a try
              and become a customer for life.
            </Card.Text>
            <button
              id="customBtn"
              className="mt-auto"
              onClick={this.toggleDisplay}
            >
              List of Industrial Services
            </button>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card className="svcQueryCard h-100 border-0">
          <Card.Header
            className="svcCardHeader"
            style={{
              backgroundColor: '#8c1414',
              borderBottom: '1px solid #bfa552',
            }}
          >
            Industrial Services
          </Card.Header>
          <Card.Body id="svcCardBody" className="d-flex flex-column">
            <ListGroup className="listG list-group-flush">
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Industrial controls and automation
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Batch processing systems
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Web processing systems
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Manufacturing systems
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Lighting design
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Power distribution
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                High voltage work
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Switch gear maintenance
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Transformer maintenance
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Generators
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Industrial data networks
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Telecommunications work
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                PLC design and programming
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                VFD design and programming
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                New construction
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Renovations
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Office reconfigurations
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Pharmaceutical work
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Bio tech work
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#fcfbf7' }}>
                Manufacturing environments
              </ListGroup.Item>
            </ListGroup>
            <button
              id="customBtn"
              className="mt-auto"
              onClick={this.toggleDisplay}
            >
              Summary of Industrial Services
            </button>
          </Card.Body>
        </Card>
      );
    }
  }
}

export default ServicesInd;
