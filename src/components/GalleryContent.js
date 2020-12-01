import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';

import vA from '../images/galleryImgs/vOne.jpg';
import vB from '../images/galleryImgs/vTwo.jpg';
import vC from '../images/galleryImgs/vFour.jpg';
import vD from '../images/galleryImgs/vFive.jpg';
import vE from '../images/galleryImgs/vSix.jpg';
import vF from '../images/galleryImgs/vSeven.jpg';
import vG from '../images/galleryImgs/vEight.jpg';
import vH from '../images/galleryImgs/vNine.jpg';
import vI from '../images/galleryImgs/vTen.jpg';
import vJ from '../images/galleryImgs/vEleven.jpg';
import vK from '../images/galleryImgs/vTwelve.jpg';
import vL from '../images/galleryImgs/vThirteen.jpg';
import vM from '../images/galleryImgs/vFourteen.jpg';
import vN from '../images/galleryImgs/vFifteen.jpg';
import vO from '../images/galleryImgs/vSixteen.jpg';
import vP from '../images/galleryImgs/vSeventeen.jpg';
import vQ from '../images/galleryImgs/vEighteen.jpg';
import vR from '../images/galleryImgs/vNineteen.jpg';
import vS from '../images/galleryImgs/vTwenty.jpg';
import vT from '../images/galleryImgs/vTwentyone.jpg';
import vU from '../images/galleryImgs/vTwentytwo.jpg';
import vV from '../images/galleryImgs/vTwentythree.jpg';
import vW from '../images/galleryImgs/vTwentyfour.jpg';
import vX from '../images/galleryImgs/vTwentyfive.jpg';
import vY from '../images/galleryImgs/vTwentysix.jpg';
import vZ from '../images/galleryImgs/vTwentyseven.jpg';
import vAa from '../images/galleryImgs/vTwentyeight.jpg';
import vAb from '../images/galleryImgs/vTwentynine.jpg';
import vAc from '../images/galleryImgs/vThirty.jpg';
import vAd from '../images/galleryImgs/vThirtyone.JPG';
import vAe from '../images/galleryImgs/vThirtytwo.JPG';
import vAf from '../images/galleryImgs/vThirtythree.JPG';
import vAg from '../images/galleryImgs/vThirtyfour.JPG';
import vAh from '../images/galleryImgs/vThirtyfive.JPG';
import vAi from '../images/galleryImgs/vThirtysix.JPG';
import vAj from '../images/galleryImgs/vThree.jpg';





function GalleryContent() {
    const galImg = {
        backgroundColor: "#fbfbfb",
        border: "1.5px solid #bfa552",
        marginTop: "1rem"
    }
    return(
        <Container fluid={true} className="my-3">
    <Row>
        {/* First row */}
        <Col md={6} lg={4} sm={6}>
            <Image className="shadow" src={vG} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
            <Image className="shadow" src={vQ} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
            <Image className="shadow" src={vD} thumbnail style={galImg}/>
        </Col>
        {/* Second Row */}
        <Col md={6} lg={4} sm={6}>
            <Image className="shadow" src={vC} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
            <Image className="shadow" src={vE} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vJ} thumbnail style={galImg}/>
        </Col>
        {/* Third Row */}
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vU} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vV} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vX} thumbnail style={galImg}/>
        </Col>
        {/* Fourth Row */}
        <Col md={6} lg={4} sm={6}>
            <Image className="shadow" src={vM} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
            <Image className="shadow" src={vH} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vR} thumbnail style={galImg}/>
        </Col>
        {/* Fifth Row */}
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vZ} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vAa} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vAb} thumbnail style={galImg}/>
        </Col>
        {/* Sixth Row */}
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vI} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vS} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vAc} thumbnail style={galImg}/>
        </Col>
        {/* Seventh Row */}
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vAg} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vAd} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vAe} thumbnail style={galImg}/>
        </Col>
        {/* Eighth Row */}
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vL} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vK} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vN} thumbnail style={galImg}/>
        </Col>
        {/* Ninth Row */}
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vF} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vP} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vO} thumbnail style={galImg}/>
        </Col>
        {/* Tenth Row */}
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vT} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vAj} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={4} sm={6}>
                <Image className="shadow" src={vY} thumbnail style={galImg}/>
        </Col>
</Row>
</Container>
    )
}

export default GalleryContent;