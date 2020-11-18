import React from 'react';
import {Container, Card} from 'react-bootstrap';

function AboutContent() {
    return(
        <Container className="justify-content-center mt-4">
            <Card className="mx-auto border-0">
                <Card.Header className="abCardHeader" style={{backgroundColor: "#a2a5a9"}}>About Vector</Card.Header>
                <Card.Body className="abCardBody">
                    <p>Vector Electrical and Controls Corporation was established in 1989 finding a niche in the industrial automation market. We now specialize in all aspects of electrical construction from residential, commercial to industrial. Vector Electrical and Controls Corporation is your one stop solution for all electrical needs. Visit our services link for a detailed description of services.</p>
                    <p>Pride in service and quality is our cornerstone. Our service and support is second to none. Our electricians are the most highly trained in the industry clocking 100 hours of continuing education, per year, in an ever changing industry. If it's existing technology or a new and recent innovation, you can count on Vector to deliver top notch service and support.</p>
                    <p>Honesty and integrity are words that we live by every day. You can be confident that our employees will arrive to your site on time, neatly dressed with a fully stocked truck saving you both time and money. We will provide you with a written estimate and deliver the work as estimated and within the estimated budget provided. We will clean up after ourselves and will leave your site cleaner than we found it.</p>
                </Card.Body>
            </Card>
            <Card className="mx-auto my-4 border-0">
                <Card.Header className="abCardHeader" style={{backgroundColor: "#a2a5a9"}}>Testimonials</Card.Header>
                <Card.Body className="abCardBody text-left">
                <p>Vector recently installed a new 45 KW generator. Tory came to do the initial estimate which was reasonable compared to all the other quotes we had received. We awarded them the contract. Vector totally pre wired the generator and installed the transfer switch prior to the generators delivery. Vector poured a new concrete slab and all conduits were installed underground which made for a very neat appearance. The generator arrived on a Friday and the 2000 pound unit was professionally moved into place with large dolly's designed for the purpose. After a few quick connections it was ready for the propane company. The propane company installed a 1000 gallon tank to support the new generator. Tory came back and performed start up carefully checking all functions of the generator including voltage, frequency and engine speed etc. I highly recommend Vector Electric for anyone that is considering any electrical work in their home or business. They also provide excellent service and support.</p>
                <p>- October 27, 2008 by Melinda F in Sunapee, NH</p>
                <hr/>
                <p>Tory does great work. He is punctual, neat, stays within his budget and is a genuinely nice guy. He did work for us when we lived in Brookline, NH. We are new back in the area and he was the first and last call we made regarding our new house.</p>
                <p>- September 20, 2008 by Sara P in Hollis, NH</p>
                <hr/>
                <p>We had Vector Electrical and Controls Corp. install all of our automation system work for a 27 million dollar expansion of our Albuteral processing facility in Canton MA. We were impressed with their knowledge and expertise through out the entire project. They worked seamlessly with all other trade areas and made the final validation process a snap with no debugging required in any of the structured work. We look forward to many years of future evolvement with this company and highly recommend them to everyone regardless of the project size.</p>
                <p>- July 12, 2007 by Paul P (lead process engineer) in Canton MA</p>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default AboutContent;