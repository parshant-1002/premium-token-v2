import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'; // Import custom CSS for styling arrows

const CustomSlick = ({ children, slidesToShow = 4, responsive = false }) => {
    const ref = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        easing:"ease",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        ...(responsive && {responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: "unslick" 
            }
        ]})
    };

    return (
        <>
        <div className='container' style={{zIndex:"99999"}}>
            <Slider ref={ref} {...settings} >
            {children}
        </Slider>
        </div>
        </>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-next`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-prev`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

export default CustomSlick;
