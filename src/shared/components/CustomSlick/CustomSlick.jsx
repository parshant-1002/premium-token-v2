import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ICONS } from '../../../assets';
import './style.scss'; 

const CustomSlick = ({ children, slidesToShow = 4, responsive = [], handleNextClick = ()=>{}, check = "" }) => {
    const ref = useRef()
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        easing: "ease",
        nextArrow: <NextArrow handleNextClick={handleNextClick}/>,
        prevArrow: <PrevArrow />,
        ...(responsive?.length && {
            responsive: responsive
        })
    };
    if(check)
    console.log(settings,"settings<><><><>")
    return (
            <div className='custom-slider' style={{ zIndex: "99999" }}>
                <Slider ref={ref} {...settings} >
                    {children}
                </Slider>
            </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick, handleNextClick } = props;
    const handleNextArrowClick = (e)=>{
        onClick(e)
        handleNextClick()
    }
    return (
        <button type="button"
            className={`${className}`}
            style={{ ...style }}

            onClick={handleNextArrowClick   }
        >
            <img src={ICONS.NextArrow} alt="Next Arrow" width={40} height={40} />
        </button>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button type="button"
            className={`${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={ICONS.PrevArrow} alt="Prev Arrow" width={40} height={40} />
        </button>
    );
};

export default CustomSlick;
