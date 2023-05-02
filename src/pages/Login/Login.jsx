import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mt-5'>
            <div className='w-50 mx-auto rounded border-2 border border-success'>
                <div className="text-center bg-success py-3 mb-4 text-white">
                    <h3> Please Login</h3>
                </div>
                <Form className=' pt-0 p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <div className='text-center mb-3'>
                        <Button className='text-white w-50' variant="success" type="submit">
                            Login
                        </Button>
                    </div>
                    <Form.Text className="">
                        <p className='text-center'><small>Already have an Account? </small><Link to="/register">Register</Link></p>
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Login;