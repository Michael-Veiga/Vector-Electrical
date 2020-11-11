import React from 'react';
import {Table, Container} from 'react-bootstrap';

function HomeContent() {
    return(
        <Container className="justify-content-center">
            <h1 className="display-4 mt-3">Welcome to Vector Electrical and Controls</h1>
            <hr/>
            <p>We know that you have a choice of electrical contractors in the area and we appreciate your consideration. Our hope is that you'll feel confident in our ability to meet all of your expectations and know that our customers are always our number one focus.</p>
            <p>Please take a moment to browse through our site to learn more about our company and how we can show you the Vector Electrical and Controls difference. If you have any questions or comments, please feel free to contact us. We look forward to hearing from you soon and thank you for your consideration.</p>
           <p>Please see our service areas and associated licensing numbers below.</p>
            <Table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Master's License #</th>
                        <th>Journeyman's License #</th>
                    </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>New Hampshire</td>
                                <td>3768M</td>
                                <td>5396J</td>
                            </tr>
                            <tr>
                                <td>Massachusetts</td>
                                <td>9490A</td>
                                <td>24704E</td>
                            </tr>
                        </tbody>
            </Table>
        </Container>
    );
}

export default HomeContent;