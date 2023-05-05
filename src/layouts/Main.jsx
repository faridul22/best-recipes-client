import React, { useContext } from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import LoaderSpinner from '../pages/Shared/LoaderSpinner/LoaderSpinner';


const Main = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div>
            {loading ? <LoaderSpinner></LoaderSpinner> : <>
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </>}
        </div>
    );
};

export default Main;