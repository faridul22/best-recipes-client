import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../../routes/ActiveRoute/ActiveLink';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()

    }

    return (
        <Navbar className='text-white' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold fs-2'>Best Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-light fw-bold">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    </Nav>
                    <Nav>
                        {
                            user ? <>
                                <Image className='border border-secondary text-light rounded-circle' title={user?.displayName} width={40} height={40} variant="top" src={user?.photoURL} />

                                <Button variant='danger' onClick={handleLogOut} className='text-decoration-none text-light ms-3 fw-bold'>LogOut</Button>
                            </> : <Link className='btn btn-danger text-decoration-none text-light mx-2 fw-bold' to="/login">Login</Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;