import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'; // Import custom CSS for styling arrows

const CustomSlick = ({ children, slidesToShow = 4, responsive = [], handleNextClick = ()=>{} }) => {
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

    return (
        <>
            <div className='cstm-slider' style={{ zIndex: "99999" }}>
                <Slider ref={ref} {...settings} >
                    {children}
                </Slider>
            </div>
        </>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick, handleNextClick } = props;
    const handleNextArrowClick = (e)=>{
        console.log(e,"e<><><>><")
        onClick(e)
        handleNextClick()
    }
    return (
        <div
            className={`${className} custom-arrow custom-next`}
            style={{ ...style }}

            onClick={handleNextArrowClick   }
        >
            <span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M0.665445 4.66245H11.8292L9.73769 6.8502C9.13693 7.4786 10.0381 8.42116 10.6388 7.79276L12.5436 5.79723L13.8152 4.46509C14.0616 4.20578 14.0616 3.78698 13.8152 3.52767L10.6388 0.201294C10.518 0.0713988 10.3516 -0.00148455 10.1783 2.29292e-05C9.60624 9.83034e-05 9.32548 0.728971 9.73769 1.14393L11.8341 3.33169H0.632552C-0.248523 3.37741 -0.182736 4.70833 0.665445 4.66245V4.66245Z" fill="white" />
                </svg>
            </span>

        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-prev`}
            style={{ ...style }}
            onClick={onClick}
        >
            <span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M13.3346 4.66245H2.17082L4.26231 6.8502C4.86307 7.4786 3.96193 8.42116 3.36117 7.79276L1.45638 5.79723L0.184828 4.46509C-0.061609 4.20578 -0.061609 3.78698 0.184828 3.52767L3.36117 0.201294C3.48202 0.0713988 3.64836 -0.00148455 3.82167 2.29292e-05C4.39376 9.83034e-05 4.67452 0.728971 4.26231 1.14393L2.16585 3.33169H13.3674C14.2485 3.37741 14.1827 4.70833 13.3346 4.66245V4.66245Z" fill="white" />
                </svg>
            </span>


        </div>
    );
};

export default CustomSlick;
