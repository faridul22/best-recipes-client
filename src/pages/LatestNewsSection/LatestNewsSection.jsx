import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './LatestNewsSection.css'

const LatestNewsSection = () => {
    return (
        <Container className='my-5 pt-5'>
            <div className='text-center'>
                <h2>Latest news</h2>
                <p className='text-muted'>Our chefs are skilled culinary artists with exceptional cooking techniques, leadership abilities, and business acumen. They create high-quality dishes, manage kitchen teams effectively, and deliver memorable dining experiences.</p>
            </div>
            <Row className='subscribe-container border border-2 rounded-2'>
                <Col sm={12} md={6}>
                    <Image src="https://i.ibb.co/WnsLqbm/worker-with-cart-sign.jpg" fluid />;
                </Col>

                <Col sm={12} md={6} className='my-auto border-start border-danger border-4'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Form>
                            <div className='text-center'>
                                <h4>Get Our Latest news</h4>
                                <h4> please Subscribe right now</h4>

                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Accept our Trams & Conditions" />
                            </Form.Group>
                            <div className='w-50 mx-auto'>
                                <Button className='w-100' variant="danger" type="submit">
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

export default LatestNewsSection;