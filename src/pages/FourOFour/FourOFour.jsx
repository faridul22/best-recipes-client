import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FourOFour = () => {
    return (
        <Container className='w-50 h-50 mx-auto mt-5 '>
            <Card className='border border-0'>
                <Card.Img variant="top" src="https://i.ibb.co/bJqvm7H/404-error-page.jpg" />
                <Card.Body>
                    <Card.Text>
                        <div className='my-auto text-center mb-5'>
                            <Link to='/'><Button className='fw-bold' variant='danger'>Go to Home Page</Button></Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FourOFour;