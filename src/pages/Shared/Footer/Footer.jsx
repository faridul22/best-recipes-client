import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <Container className='p-5'>
                <Row>
                    <Col sm={12} lg={4}>
                        <h5 className='text-white'>About Us</h5>
                        <p className='m-0 text-secondary'><small>Facebook</small></p>
                        <p className='m-0 text-secondary'><small>Instagram</small></p>
                        <p className='m-0 text-secondary'><small>Twitter</small></p>
                    </Col>
                    <Col sm={12} lg={4}>
                        <h5 className='text-white'>Quick Links</h5>
                        <p className='m-0  text-secondary'><small>Our Popular Menu</small></p>
                        <p className='m-0  text-secondary'><small>Pricing Plan</small></p>
                        <p className='m-0  text-secondary'><small>Service & Setting</small></p>
                        <p className='m-0  text-secondary'><small>Our Upcoming Food</small></p>
                        <p className='m-0  text-secondary'><small>Client Reviews</small></p>
                    </Col>
                    <Col sm={12} lg={4}>
                        <h1 className='text-white'>Don't Hesitated <br /> To Contact With <br /> Us Say Hello </h1>
                    </Col>

                </Row>
            </Container>
            <hr className='w-75 mx-auto text-secondary' />
            <div className='py-3'>
                <p className='text-muted text-center'><small>Copyright 2023</small></p>
            </div>
        </div>
    );
};

export default Footer;