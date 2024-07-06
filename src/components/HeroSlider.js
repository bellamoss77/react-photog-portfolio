import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.scss';

const HeroSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <samplePrevArrow />
    };

    const slides = [
        {
            id: 1,
            title: 'Landscape Photography',
            src: 'https://github.com/bellamoss77/react-like-button-gallery/blob/main/public/LANDSCAPE-IMGS/SKYLINE-SUNRISE_1.png?raw=true',
            link: '/landscape'
        }, {
            id: 2,
            title: 'Nature Photography',
            src: 'https://github.com/bellamoss77/react-like-button-gallery/blob/main/public/NATURE/FLOWERS-JUNE_6.png?raw=true',
            link: '/nature'
        }, {
            id: 3,
            title: 'Pet Photography',
            src: 'https://raw.githubusercontent.com/bellamoss77/react-like-button-gallery/main/public/PETS/ATHENA-JUNE_1.png',
            link: '/pets'
        }, {
            id: 4,
            title: 'Ruins Photography',
            src: 'https://github.com/bellamoss77/react-like-button-gallery/blob/main/public/RUINS/AFTON-RUINS_20.png?raw=true',
            link: '/ruins'
        }
    ];

    const handleKeyDown = (event) => {
        if (sliderRef.current) {
            if (event.key === 'ArrowLeft') {
                sliderRef.current.slickPrev();
            } else if (event.key === 'ArrowRight') {
                sliderRef.current.slickNext();
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Slider ref={sliderRef} {...settings}>
            {slides.map(slide => (
                <div key={slide.id} className="slider-item">
                    <Link to={slide.link}>
                        <LazyLoadImage
                            src={slide.src}
                            alt={slide.title}
                            effect="blur"
                            height="100%"
                            width="100%"
                            style={{ objectFit: 'cover' }}
                        />
                        <p className="slide-caption">{slide.title}</p>
                    </Link>
                </div>
            ))}
        </Slider>
    );
};

const SampleNextArrow = (props) => {
    const { className, onClick, currentSlide, slideCount } = props;
    return (
        <div
            className={`${className} ${currentSlide === slideCount - 1 ? 'slick-disabled' : ''}`}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
        <div
            className={`${className} ${currentSlide === 0 ? 'slick-disabled' : ''}`}
            onClick={onclick}
        />
    );
};

export default HeroSlider;