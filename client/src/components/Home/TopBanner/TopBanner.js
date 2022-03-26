import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.scss';

const TopBanner = () => (
    <main className="top-banner-container">
        <Container>
            <Row className="d-flex align-items-center banner-container">
                <Col lg={7}>
                    <div className="banner-content ">
                        <p>Hello! Welcome To </p>
                        <h1>
                            Blog<span className="logo-color">Mania</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            laudantium est quas molestiae nihil, eligendi doloribus, enim error
                            sequi quisquam, excepturi provident cum nostrum nemo voluptas vitae
                            necessitatibus voluptatem reprehenderit?
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </main>
);

export default TopBanner;
