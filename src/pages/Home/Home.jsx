import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import ChefSection from '../ChefSection/ChefSection';
import PopularRecipeSection from '../PopularRecipeSection/PopularRecipeSection';
import ContactSection from '../ContactSection/ContactSection';
import { AuthContext } from '../../providers/AuthProvider';
import LoaderSpinner from '../Shared/LoaderSpinner/LoaderSpinner';


const Home = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div>
            {loading ? <LoaderSpinner></LoaderSpinner> : <><Header></Header>
                <ChefSection></ChefSection>
                <PopularRecipeSection></PopularRecipeSection>
                <ContactSection></ContactSection></>}
        </div>
    );
};

export default Home;