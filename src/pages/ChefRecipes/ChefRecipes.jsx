import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const chefRecipes = useLoaderData()
    console.log(chefRecipes)
    return (
        <div>
            <h3>Recipes Details</h3>
        </div>
    );
};

export default ChefRecipes;