import React, { useState } from 'react';
import { Container, Col, Row, Image, Modal } from 'react-bootstrap';
// import modalData from '../data/modals.json';

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
  // Sets show state to false by default / used for showing/hiding modal
  const [show, setShow] = useState(false);
  // Sets the active picId State to 0 by default / used for updating the id of the last clicked image, which the modal then accesses to determine what picture to show
  const [picId, setPicId] = useState(0);

  // handleClose function sets show state to false to hide modal
  const handleClose = () => setShow(false);
  // handleShow function sets show state to true to show modal
  const handleShow = () => setShow(true);

  // The imageData array contains the ids and image sources of all imported images
  const imageData = [
    {
      idRef: 0,
      image: vG,
      altText: 'Panel and conduit work open',
    },
    {
      idRef: 1,
      image: vQ,
      altText: 'Work van with loader and generator',
    },
    {
      idRef: 2,
      image: vD,
      altText: 'Kitchen Renovation',
    },
    {
      idRef: 3,
      image: vX,
      altText: 'Large generac generator on concrete pad',
    },
    {
      idRef: 4,
      image: vC,
      altText: 'Kitchen renovation with lights off',
    },
    {
      idRef: 5,
      image: vE,
      altText: 'Kitchen renovation with lights on',
    },
    {
      idRef: 6,
      image: vJ,
      altText: 'Eversource lineman tying in electrical service',
    },
    {
      idRef: 7,
      image: vM,
      altText: 'Cake elevator motor and plug',
    },
    {
      idRef: 8,
      image: vU,
      altText: 'Loader and generator on trailer',
    },
    {
      idRef: 9,
      image: vV,
      altText: 'Loader forks over generator',
    },
    {
      idRef: 10,
      image: vZ,
      altText: 'Prebuilt form for concrete pad',
    },
    {
      idRef: 11,
      image: vAa,
      altText: 'Freshly poured concrete pad drying',
    },
    {
      idRef: 12,
      image: vH,
      altText: 'Service installed but not tied in',
    },
    {
      idRef: 13,
      image: vR,
      altText: 'Generator transfer switch open',
    },
    {
      idRef: 14,
      image: vI,
      altText: 'Open electrical panel',
    },
    {
      idRef: 15,
      image: vS,
      altText: 'Generator transfer switch closed',
    },
    {
      idRef: 16,
      image: vAb,
      altText: 'Generator rear view with electrical and gas conduit',
    },
    {
      idRef: 17,
      image: vAg,
      altText: 'Square D electrical panels',
    },
    {
      idRef: 18,
      image: vAd,
      altText: 'Generac generator covered in snow',
    },
    {
      idRef: 19,
      image: vAe,
      altText: 'Generac generator covered in snow and open',
    },
    {
      idRef: 20,
      image: vAc,
      altText: 'Generac transfer switch tied to meter',
    },
    {
      idRef: 21,
      image: vL,
      altText: 'Cake elevator gear box',
    },
    {
      idRef: 22,
      image: vK,
      altText: 'Cake elevator hardware',
    },
    {
      idRef: 23,
      image: vN,
      altText: 'Cake elevator hardware and electrical equipment',
    },
    {
      idRef: 24,
      image: vF,
      altText: 'Panel and conduit work closed',
    },
    {
      idRef: 25,
      image: vP,
      altText: 'Service van and large Generac generator',
    },
    {
      idRef: 26,
      image: vO,
      altText: 'Small bryant generator on concrete pad',
    },
    {
      idRef: 27,
      image: vW,
      altText: 'Large Generac generator and sub station',
    },
  ];

  // Map over imageData array to retrieve the id and img src for each gallery picture
  const imageItems = imageData.map(item => (
    <Col md={6} lg={3} sm={6}>
      <Image
        className="shadow"
        onClick={findImgId}
        id={item.idRef}
        src={item.image}
        alt={item.altText}
        thumbnail
        style={{
          backgroundColor: '#fbfbfb',
          border: '1.5px solid #bfa552',
          marginTop: '1rem',
        }}
      />
    </Col>
  ));
  // findImgId function sets the state picId equal to the id of the last clicked gallery img and calls the handleShow function to reveal the modal
  function findImgId(e) {
    setPicId(e.target.id);
    handleShow();
  }
  // modalItems function finds the item whose id matches the state picId
  const modalItems = imageData.find(item => item.idRef == picId);

  return (
    <Container fluid={true} className="my-3">
      <Row id="gallery" data-toggle="modal" data-target="galModal">
        {imageItems}
      </Row>
      <Modal
        size="lg"
        show={show}
        centered
        onHide={handleClose}
        id="galModal"
        aria-hidden="true"
      >
        <Modal.Header className="justify-content-end my-0 p-0">
          <button className="exitBtn m-1" onClick={handleClose}>
            X
          </button>
        </Modal.Header>
        <Modal.Body className="p-1">
          <img
            className="d-block w-100"
            src={modalItems.image}
            style={{ maxHeight: '90%' }}
            alt={modalItems.altText}
          />
        </Modal.Body>
        {/* <Modal.Footer>
                        <button className="customBtn" onClick={handleClose}>Close</button>
                </Modal.Footer> */}
      </Modal>
    </Container>
  );
}

export default GalleryContent;
