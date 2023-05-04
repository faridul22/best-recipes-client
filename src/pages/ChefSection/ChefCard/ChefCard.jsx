import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chefName, chefPicture, yearsExperience, numRecipes, likes } = chef;
    return (
        <Col>
            <Card className='h-100 p-3'>
                <LazyLoad height={250}>
                    <Card.Img variant="top" src={chefPicture} />
                </LazyLoad>

                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        <p>Experience: <small>{yearsExperience} +Years</small></p>
                        <p>Numbers of Recipes: <small>{numRecipes}</small></p>
                        <p>Likes: <small>{likes}</small></p>
                    </Card.Text>
                </Card.Body>
                <Link to={`/chefs/${id}`}>
                    <Button variant='danger'>View Recipes</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default ChefCard;