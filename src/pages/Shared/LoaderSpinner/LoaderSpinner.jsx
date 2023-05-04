
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

const LoaderSpinner = () => {
    return (
        <div className='text-center w-50 mx-auto'>
            <Spinner variant="danger" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default LoaderSpinner;