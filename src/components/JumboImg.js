import React from 'react';
import {useLocation} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap';

import gen from '../images/generator.jpg'
import plc from '../images/plcControl.jpg'
import vector from '../images/vectorTor.png'
import pattern from '../images/webb.png';
import abtBgd from '../images/aboutBgd.jpg';
import homeBgd from '../images/homeBgd.jpg';
import pwrLine from '../images/pwrLine.jpg';
import vctAbt from '../images/vectorServices.jpg';
import vctSvc from '../images/services.jpg';
import gold from '../images/goldFoil.jpg';



function JumboImg() {
    let jumboStyle = {
        backgroundColor: "white",
    }
        let location = useLocation();
        let localPath = location.pathname;
        console.log(localPath);
        if (localPath === "/") {
            jumboStyle = {
                backgroundColor: "#DAA520",
                backgroundImage: `url(${pwrLine})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }
        } else if (localPath === "/about") {
            jumboStyle = {
                backgroundColor: "white",
                backgroundImage: `url(${vctAbt})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 25%"
            }
        } else if (localPath === "/services") {
            jumboStyle = {
                backgroundColor: "white",
                backgroundImage: `url(${vctSvc})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }
        } else if (localPath === "/gallery") {
            jumboStyle = {
                backgroundColor: "white",
                backgroundImage: `url(${plc})`
            }
        } else if (localPath === "/contact") {
            jumboStyle = {
                backgroundColor: "white",
                backgroundImage: `url(${plc})`
            }
        } else {
            jumboStyle = {
                backgroundColor: "white",
                backgroundImage: `url(${pattern})`
            }
        }

        return(
        <Jumbotron className="jumbo pt-3 pb-4 mb-0" style={jumboStyle}>
            <Container>
              <img className="logo" src={vector}/>
            </Container>
        </Jumbotron>
        )
    
}

export default JumboImg;