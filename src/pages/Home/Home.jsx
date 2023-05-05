import React from 'react';
import Header from '../Shared/Header/Header';
import ChefSection from '../ChefSection/ChefSection';
import PopularRecipeSection from '../PopularRecipeSection/PopularRecipeSection';
import ContactSection from '../ContactSection/ContactSection';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ChefSection></ChefSection>
            <PopularRecipeSection></PopularRecipeSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;