import React from 'react';
import {Button} from 'react-bootstrap';

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
            <div>
                <Button onClick={this.toggleDisplay}>Residential Electrical Services</Button>
                {this.state.display && 
                    <ul>
                        <li>Air conditioning wiring</li>
                        <li>Audio & video cabling</li>
                        <li>Automatic emergency generator systems installation</li>
                        <li>Ceiling fans</li>
                        <li>Code compliance & corrections</li>
                        <li>Computer cabling</li>
                        <li>Dedicated computer power with surge protection</li>
                        <li>Electric heat</li>
                        <li>Electrical service upgrades</li>
                    </ul>
                }
            </div>
        )     
    }
}

export default ServicesRes;