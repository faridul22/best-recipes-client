import React from 'react';
import Header from '../Shared/Header/Header';
import ChefSection from '../ChefSection/ChefSection';
import PopularRecipeSection from '../PopularRecipeSection/PopularRecipeSection';
import LatestNewsSection from '../LatestNewsSection/LatestNewsSection';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ChefSection></ChefSection>
            <PopularRecipeSection></PopularRecipeSection>
            <LatestNewsSection></LatestNewsSection>
        </div>
    );
};

export default Home;