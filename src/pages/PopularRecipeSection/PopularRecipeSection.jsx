import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Container, Row, Spinner } from 'react-bootstrap';
import PopularCard from './PopularCard/PopularCard';

const PopularRecipeSection = () => {
    const [popularRecipes, setPopularRecipes] = useState([]);
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://best-recipes-server-faridul22.vercel.app/popularRecipes')
            .then(res => res.json())
            .then(data => {
                if (!loading) {
                    return <Spinner></Spinner>
                }
                setPopularRecipes(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <Container className='my-5 pt-3'>
            <hr className='mb-3' />
            <h2 className='mb-3 fw-bold'>Popular Recipes</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    popularRecipes.map(popular => <PopularCard
                        key={popular.id}
                        popular={popular}
                    ></PopularCard>)
                }
            </Row>
        </Container>
    );
};

export default PopularRecipeSection;
