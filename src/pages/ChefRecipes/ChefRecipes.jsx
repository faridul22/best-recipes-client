import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import './ChefRecipes.css'
import Recipe from './Recipe/Recipe';
import LazyLoad from 'react-lazy-load';

const ChefRecipes = () => {
    const chefRecipes = useLoaderData()
    console.log(chefRecipes)
    const { chefPicture, chefName, description, likes, recipes, yearsExperience } = chefRecipes;
    return (
        <Container>
            <Card className='border border-0 my-5'>
                <Row className='bg-light p-3 rounded-2'>
                    <Col sm={12} md={6}>
                        <Card.Body className=''>
                            <Card.Body>
                                <Card.Title className='text-danger ms-5'>
                                    <h2>{chefName}</h2>
                                </Card.Title>
                                <Card.Text className='py-0 ms-5'>
                                    <p> {description}</p>
                                    <p><strong>Experience:</strong> {yearsExperience} Years +</p>
                                    <div className='d-flex'>
                                        <p className='flex-grow-1'><strong>Cooking:</strong> {recipes.length} recipes</p>
                                        <p className='text-primary'><strong><FaThumbsUp></FaThumbsUp> Like:</strong> {likes}</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card.Body>
                    </Col>
                    <Col sm={12} md={6} className='my-auto'>
                        <LazyLoad height={410}>
                            <Card.Img className='rounded' variant="top" src={chefPicture} />
                        </LazyLoad>
                    </Col>
                </Row>
            </Card>
            <Row className='my-5'>
                <h2 className='text-center text-danger mb-4'>Cooking Recipes</h2>
                {recipes.map((recipe, i) => <Recipe
                    key={recipe.i}
                    recipe={recipe}
                ></Recipe>)}
            </Row>
        </Container>
    );
};

export default ChefRecipes;