import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;