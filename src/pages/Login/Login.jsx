import React, { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container className='mt-5'>
            <div className='w-50 mx-auto rounded border-2 border border-success'>
                <div className="text-center bg-success py-3 mb-4 text-white">
                    <h3> Please Login</h3>
                </div>
                <Form onSubmit={handleLogin} className=' pt-0 p-5'>
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
                        <p className='text-center'><small>New to Best Recipes? </small><Link to="/register">Register</Link></p>
                    </Form.Text>
                    <p className='text-center'>Or</p>
                    <div className='text-center'>
                        <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                        <br />
                        <Button variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Login;