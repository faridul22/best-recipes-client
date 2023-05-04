import React from 'react';
import Header from '../Shared/Header/Header';
import ChefSection from '../ChefSection/ChefSection';
import PopularRecipeSection from '../PopularRecipeSection/PopularRecipeSection';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ChefSection></ChefSection>
            <PopularRecipeSection></PopularRecipeSection>
        </div>
    );
};

export default Home;