import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Best Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-muted mx-2' to='/'>Home</Link>
                        <Link className='text-decoration-none text-muted mx-2' to='/blogs'>Blogs</Link>
                    </Nav>
                    <Nav>
                        {
                            user ? <>
                                <Image title={`farid`} variant="top" src="https://i.ibb.co/kgqWycg/business-1.png" />
                                <Link className='text-decoration-none text-muted ms-3' to="/login">LogOut</Link>
                            </> : <Link className='text-decoration-none text-muted mx-2' to="/login">Login</Link>

                        }
                        <Link className='text-decoration-none text-muted mx-2' to="/register">Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;