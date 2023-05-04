import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaDollarSign, FaStopwatch } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const PopularCard = ({ popular }) => {
    console.log(popular)
    const { recipe_img, making_time, price, recipe_name } = popular
    return (
        <Col>
            <Card className='h-100 border border-0'>
                <LazyLoad height={300}>
                    <Card.Img variant="top" src={recipe_img} />
                </LazyLoad>

                <Card.Body>
                    <Card.Text className='align-items-center'>
                        <div className='d-flex text-danger fw-bold'>
                            <p className='flex-grow-1 '><FaStopwatch></FaStopwatch> <small>{making_time}</small></p>
                            <p><FaDollarSign></FaDollarSign> Price: <small>{price}</small></p>
                        </div>
                        <h4 className='text-center fw-semibold'>{recipe_name}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PopularCard;