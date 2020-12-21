import React, {useState, } from 'react';
import {Container, Col, Row, Image, Modal, Carousel} from 'react-bootstrap';

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
        // state for modal
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        // state for carousel
        const[index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
                setIndex(selectedIndex);
        }

    const galImg = {
        backgroundColor: "#fbfbfb",
        border: "1.5px solid #bfa552",
        marginTop: "1rem",
    }
    return(
        <Container fluid={true} className="my-3">
    <Row id="gallery" data-toggle="modal" data-target="galModal">
        {/* First row */}
        <Col md={6} lg={3} sm={6}>
            <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} onSelect={handleSelect} data-slide-to="0"src={vG} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
            <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="1"src={vQ} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
            <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="2" src={vD} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="3" src={vX} thumbnail style={galImg}/>
        </Col>
        {/* Second Row */}
        <Col md={6} lg={3} sm={6}>
            <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="4" src={vC} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
            <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="5" src={vE} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="6" src={vJ} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
            <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="7" src={vM} thumbnail style={galImg}/>
        </Col>
        {/* Third Row */}
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="8" src={vU} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="9" src={vV} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="10"  src={vZ} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="11"  src={vAa} thumbnail style={galImg}/>
        </Col>
        
        {/* Fourth Row */}
        <Col md={6} lg={3} sm={6}>
            <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="12"  src={vH} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="13"  src={vR} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="14"  src={vI} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="15"  src={vS} thumbnail style={galImg}/>
        </Col>
        {/* Fifth Row */}
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="16" src={vAb} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="17" src={vAg} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="18" src={vAd} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="19" src={vAe} thumbnail style={galImg}/>
        </Col>
        {/* Sixth Row */}
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="20" src={vAc} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="21" src={vL} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="22" src={vK} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="23" src={vN} thumbnail style={galImg}/>
        </Col>
        {/* Seventh Row */}
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="24" src={vF} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="25" src={vP} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" data-target="#imgCarousel" onClick={handleShow} data-slide-to="26"  src={vO} thumbnail style={galImg}/>
        </Col>
        {/* Eighth Row */}
        
        {/* Ninth Row */}
       
        {/* Tenth Row */}
        {/* <Col md={6} lg={3} sm={6}>
                <Image className="shadow" src={vT} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" src={vAj} thumbnail style={galImg}/>
        </Col>
        <Col md={6} lg={3} sm={6}>
                <Image className="shadow" src={vY} thumbnail style={galImg}/>
        </Col> */}
</Row>
        <Modal show={show} onHide={handleClose} id="galModal" aria-hidden="true" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton/>
                        <Modal.Body>
                        <Carousel className="carousel slide" activeIndex={index} id="imgCarousel" data-ride="carousel">
                                <Carousel.Item className="active">
                                        <img className="d-block w-100" src={vG} data-slide-to="0"></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vQ} data-slide-to="1"></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vD} data-slide-to="2"></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vX} data-slide-to="3"></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vC} data-slide-to="4"></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vE}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vJ}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vM}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vU}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vV}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vZ}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vAa}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vH}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vR}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vI}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vS}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vAb}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vAg}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vAd}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vAe}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vAc}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vL}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vK}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vN}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vF}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vP}></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={vO}></img>
                                </Carousel.Item>
                        </Carousel>
                        </Modal.Body>
                <Modal.Footer>
                        <button className="customBtn" onClick={handleClose}>Close</button>
                </Modal.Footer>
        </Modal>
</Container>
    )
}

export default GalleryContent;