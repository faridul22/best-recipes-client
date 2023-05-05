import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';

const ContactSection = () => {
    return (
        <Container className='my-5 pt-5'>
            <div className='text-center'>
                <h2 className='mb-0 fw-bold'>Contact Us</h2>
                <hr className='w-25 mx-auto mt-2' />
                <p className='text-muted w-50 mx-auto'>You can contact us for any problem or information or to give us your feedback. Stay tuned with us by Subscribing us for any kind of updates.</p>
            </div>
            <Row className='border border-2 rounded-2 py-3'>
                <div className='text-center mb-0'>
                    <h5>Send us your feedback.</h5>
                    <h5>We will improve our service with your feedback.</h5>
                    <hr className='w-50 mx-auto border-danger bg-danger border border-1' />
                </div>
                <Col sm={12} md={6}>
                    <Image src="https://i.ibb.co/WnsLqbm/worker-with-cart-sign.jpg" width={500} />;
                </Col>

                <Col sm={12} md={6} className='my-auto border-start border-danger border-4'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea2" label="Write your feedback">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Write your feedback"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>

                            <Form.Group className="my-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Accept our Trams & Conditions" />
                            </Form.Group>
                            <div className=''>
                                <Button className='w-100 fw-bold' variant="danger" type="submit">
                                    Subscribe Now
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactSection;