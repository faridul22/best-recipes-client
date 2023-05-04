import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCopyright, FaPhoneAlt, FaPhoneSquareAlt } from 'react-icons/fa';

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
                        <h2 className='text-white fw-bold'>Don't Hesitated <br /> To Contact With <br /> Us Say Hello </h2>
                        <p className='mt-3'>
                            <FaPhoneSquareAlt className='text-danger bg-light fs-1 fw-bold'></FaPhoneSquareAlt> <span className='text-light ms-3'> 00999556568</span>
                        </p>
                    </Col>

                </Row>
            </Container>
            <hr className='w-75 mx-auto text-secondary' />
            <div className='py-3'>
                <p className='text-muted text-center'><FaCopyright className='text-light'></FaCopyright> <small>Copyright 2023</small></p>
            </div>
        </div>
    );
};

export default Footer;