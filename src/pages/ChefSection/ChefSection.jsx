import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ChefCard from './ChefCard/ChefCard';
import { AuthContext } from '../../providers/AuthProvider';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://best-recipes-server-faridul22.vercel.app/chefs')
            .then(res => res.json())
            .then(data => { setChefs(data) })
            .catch(error => console.log(error))
    }, [])
    return (
        <Container className='bg-light px-5 pt-1 pb-4  my-5 rounded-2'>
            <div className='text-center mt-5 mb-3'>
                <h2 className='fw-bold fs-1 mb-3'>Our Chefs</h2>
                <hr className='w-25 mx-auto' />
                <p className='text-muted'>Our chefs are skilled culinary artists with exceptional cooking techniques, leadership abilities, and business acumen. They create high-quality dishes, manage kitchen teams effectively, and deliver memorable dining experiences.</p>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </Row>
        </Container>
    );
};

export default ChefSection;