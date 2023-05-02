import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <Container className='mt-5'>
            <div className='w-50 mx-auto rounded border-2 border border-info'>
                <div className="text-center bg-info py-3 mb-4 text-white">
                    <h3> Please Register</h3>
                </div>
                <Form onSubmit={handleRegister} className=' pt-0 p-5'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control required name='name' type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control required name='photo' type="text" placeholder="Photo Url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <div className='text-center mb-3'>
                        <Button className='text-white w-50' variant="info" type="submit">
                            Register
                        </Button>
                    </div>
                    <Form.Text className="">
                        <p className='text-center'><small>Already have an Account? </small><Link to="/login">Login</Link></p>
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Register;