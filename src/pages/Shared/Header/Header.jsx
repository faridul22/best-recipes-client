import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../assets/banner-1.jpg'
import banner2 from '../../../assets/banner-2.jpg'
import banner3 from '../../../assets/banner-3.jpg'
import './Header.css'
import { Button } from 'react-bootstrap';
const Header = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='banner-container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        height={800}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='my-auto align-items-center h-50'>
                        <h1>WELCOME TO <br /> RECIPE COMMUNITY</h1>
                        <p>
                            Our Chefs are create high-quality dishes.We Provide the best service in the other recipe community.Our chefs are skilled culinary artists with exceptional cooking techniques.
                        </p>
                        <Button className='fw-bold' variant='danger'>View Our Shop</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={800}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='my-auto align-items-center h-50'>
                        <h1>WELCOME TO <br /> RECIPE COMMUNITY</h1>
                        <p>
                            Our Chefs are create high-quality dishes.We Provide the best service in the other recipe community.Our chefs are skilled culinary artists with exceptional cooking techniques.
                        </p>
                        <Button className='fw-bold' variant='danger'>View Our Shop</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={800}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='my-auto align-items-center h-50'>
                        <h1>WELCOME TO <br /> RECIPE COMMUNITY</h1>
                        <p>
                            Our Chefs are create high-quality dishes.We Provide the best service in the other recipe community.Our chefs are skilled culinary artists with exceptional cooking techniques.
                        </p>
                        <Button className='fw-bold' variant='danger'>View Our Shop</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;