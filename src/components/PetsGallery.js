import React, { useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const PetsGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const captionsRef = React.useRef(null);

    const images = [
        {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/APOLLO-JUNE_1.png',
            height: 600,
            width: 900, 
            alt: 'small black dog wading in water',
            caption: 'Apollo at Sugar Hollow Watering Hole - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/ATHENA-JUNE_2.png',
            height: 600,
            width: 900,
            alt: 'tan dog exploring in woods',
            caption: 'Athena Explores Shenandoah National Park - July 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/ATHENA-JUNE_3.png',
            height: 600,
            width: 900,
            alt: 'tan dog wading in watering hole',
            caption: 'Athena at Sugar Hollow Watering Hole - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/ATHENA-JUNE_8.png',
            height: 600,
            width: 900,
            alt: 'dog reaches into water for stick',
            caption: 'Athena Pursues a Stick, Sugar Hollow Watering Hole - July 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/ATHENA-JUNE_13.png',
            height: 600,
            width: 900,
            alt: 'dog on rocks at waterfall',
            caption: 'Athena Explores Great Falls, Shenandoah National Park - July 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/ATHENA-JUNE_14.png',
            height: 600,
            width: 900,
            alt: 'Dog resting head on table',
            caption: 'Athena Relaxing, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/Hikes-Late-May24_13.png',
            height: 600,
            width: 900,
            alt: 'Geese in a row by a lake',
            caption: 'Geese Exploring, Walnut Creek State Park, Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/IMG_0385 copy.jpg',
            height: 600,
            width: 900,
            alt: 'close up of dog in black and white',
            caption: 'Athena in Black & White, Central Virginia - April 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/IMG_0639.JPG',
            height: 600,
            width: 800,
            alt: 'small black dog standing in yard',
            caption: 'Apollo Playtime, Central Virginia - March 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/IMG_0671.JPG',
            height: 600,
            width: 800,
            alt: 'dog looking down driveway',
            caption: 'Athena Keeping Watch, Central Virginia - February 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/JRSP_May-31-24_10.png',
            height: 600,
            width: 900,
            alt: 'dog emerging from river',
            caption: 'Athena in the River, James River State Park - May 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/PETS-IMGS/JRSP_May-31-24_22.png',
            height: 600,
            width: 900,
            alt: 'dog looking out at river',
            caption: 'Athena Alert, James River State Park - May 2024', 
            loading: 'lazy'
        }
    ];

    const handleOpen = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleNext = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentImageIndex + images.length - 1) % images.length;
        setCurrentImageIndex(prevIndex);
    };

    return (
        <div className='gallery'>
            <div className='photo-album'>
                {images.map((image, index) => {
                    const isVertical = image.height > image.width;
                    const itemClass = isVertical ? 'photo-item-vertical' : 'photo-item-horizontal';
                    return (
                        <div key={index} className={`photo-item ${itemClass}`} onClick={() => handleOpen(index)}>
                            <LazyLoadImage
                                src={image.src}
                                alt={image.alt}
                                width='100%'
                                height='auto'
                                effect='blur'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    );
                })}
            </div>
            {isOpen && (
                <Lightbox
                    plugins={[Captions]}
                    captions={{ ref: captionsRef }}
                    index={currentImageIndex}
                    on={{ view: ({ index: currentImageIndex }) => setCurrentImageIndex(currentImageIndex) }}
                    open={isOpen}
                    close={handleClose}
                    slides={images.map(image => ({
                        src: image.src,
                        alt: image.alt,
                        title: image.caption,
                        width: image.width,
                        height: image.height
                    }))}
                    currentIndex={currentImageIndex}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    keyboard={{
                        close: 'Escape',
                        next: 'ArrowRight',
                        prev: 'ArrowLeft'
                    }}
                />
            )}
        </div>
    );
};

export default PetsGallery;