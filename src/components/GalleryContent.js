import React, { useState } from 'react';
import { Container, Col, Row, Image, Modal, Carousel } from 'react-bootstrap';
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
  // state for modal
  const [show, setShow] = useState(false);
  const [picId, setPicId] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageData = [
    {
      idRef: 0,
      image: vG,
    },
    {
      idRef: 1,
      image: vQ,
    },
    {
      idRef: 2,
      image: vD,
    },
    {
      idRef: 3,
      image: vX,
    },
    {
      idRef: 4,
      image: vC,
    },
    {
      idRef: 5,
      image: vE,
    },
    {
      idRef: 6,
      image: vJ,
    },
    {
      idRef: 7,
      image: vM,
    },
    {
      idRef: 8,
      image: vU,
    },
    {
      idRef: 9,
      image: vV,
    },
    {
      idRef: 10,
      image: vZ,
    },
    {
      idRef: 11,
      image: vAa,
    },
    {
      idRef: 12,
      image: vH,
    },
    {
      idRef: 13,
      image: vR,
    },
    {
      idRef: 14,
      image: vI,
    },
    {
      idRef: 15,
      image: vS,
    },
    {
      idRef: 16,
      image: vAb,
    },
    {
      idRef: 17,
      image: vAg,
    },
    {
      idRef: 18,
      image: vAd,
    },
    {
      idRef: 19,
      image: vAe,
    },
    {
      idRef: 20,
      image: vAc,
    },
    {
      idRef: 21,
      image: vL,
    },
    {
      idRef: 22,
      image: vK,
    },
    {
      idRef: 23,
      image: vN,
    },
    {
      idRef: 24,
      image: vF,
    },
    {
      idRef: 25,
      image: vP,
    },
    {
      idRef: 26,
      image: vO,
    },
  ];

  const imageItems = imageData.map(item => (
    <Col md={6} lg={3} sm={6}>
      <Image
        className="shadow"
        onClick={findImgId}
        id={item.idRef}
        src={item.image}
        thumbnail
        style={{
          backgroundColor: '#fbfbfb',
          border: '1.5px solid #bfa552',
          marginTop: '1rem',
        }}
      />
    </Col>
  ));

  function findImgId(e) {
    setPicId(e.target.id);
    handleShow();
  }

  const modalItems = imageData.find(item => item.idRef == picId);

  return (
    <Container fluid={true} className="my-3">
      <Row id="gallery" data-toggle="modal" data-target="galModal">
        {imageItems}
      </Row>
      <Modal
        show={show}
        centered
        onHide={handleClose}
        id="galModal"
        aria-hidden="true"
      >
        {/* <Modal.Header className="my-0" closeButton/> */}
        <Modal.Body className="p-1">
          <img
            className="d-block w-100"
            src={modalItems.image}
            style={{ maxHeight: '95vh' }}
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
