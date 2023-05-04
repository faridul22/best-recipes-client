import React, { useState } from 'react';
import { FaBeer, FaRegBookmark } from 'react-icons/fa';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    console.log(recipe)
    const { name, method, ingredients, rating } = recipe;
    const [favorite, setFavorite] = useState(true);
    const handleFavorite = () => {
        toast("The recipe is your favorite!")
        setFavorite(false)
        console.log(favorite)
    }

    return (
        <Col sm={12} md={4}>
            <ToastContainer></ToastContainer>
            <Card className='h-100 p-4'>
                <Card.Title className='text-danger w-100'><h4>{name}</h4></Card.Title>
                <hr className='text-danger' />
                <div>
                    <p><strong >Cooking method: </strong> {method}</p>
                </div>
                <div>
                    <p className='my-0'><strong>Ingredients:</strong> </p>
                    <ol>
                        {ingredients.map((ingredient) => <li className='my-0'>{ingredient},</li>)}
                    </ol>
                </div>
                <div className='my-auto d-flex align-items-center'>
                    <p className='d-flex align-items-center flex-grow-1'>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly /> <span className='ms-2'>{rating}</span>
                    </p>
                    <Button onClick={handleFavorite} disabled={!favorite} variant='danger' className=''> <FaRegBookmark />Favorite</Button>
                </div>
            </Card>
        </Col>
    );
};

export default Recipe;