import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "yet-another-react-lightbox";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'yet-another-react-lightbox/styles.css';

const RuinsGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_19.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - April 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - April 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_23.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            caption: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_24.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            caption: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_40.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            caption: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_51.png',
            height: 900,
            width: 600,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_60.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - May 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - May 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_63.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - May 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - May 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_66.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            caption: 'Abandoned Motor Court Building, Afton, VA - April 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/abandoned-hotel_87.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - May 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - May 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_1.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_2.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_3.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_4.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_5.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_6.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_7.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_8.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_9.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_10.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_11.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_12.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_13.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_14.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_15.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_16.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_17.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            caption: 'Abandoned Inn at Afton, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_18.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_19.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_20.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_21.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_22.png',
            height: 600,
            width: 900,
            alt: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            caption: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_23.png',
            height: 900,
            width: 600,
            alt: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            caption: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_24.png',
            height: 600,
            width: 900,
            alt: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            caption: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_25.png',
            height: 600,
            width: 900,
            alt: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            caption: 'Former Site of Skyline Parkway Motel (Destroyed by Arson in July 2004), Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_26.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_27.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_28.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_29.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_30.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_31.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_32.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_33.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_34.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_35.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_36.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_53.png',
            height: 900,
            width: 600,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_37.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_38.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_39.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_40.png',
            height: 900,
            width: 600,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_41.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_42.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_43.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Motor Court, Afton, VA - June 2024',
            caption: 'Abandoned Motor Court, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_44.png',
            height: 900,
            width: 600,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_45.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_46.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_47.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_48.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_49.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_50.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/RUINS-IMGS/AFTON-RUINS_52.png',
            height: 600,
            width: 900,
            alt: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            caption: 'Abandoned Howard Johnson Restaurant, Afton, VA - June 2024',
            loading: 'lazy'
        }
    ];

    const handleOpen = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleNext = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentImageIndex + images.length - 1) % images.length;
        setCurrentImageIndex(prevIndex);
    };

    return (
        <div className="gallery">
            <div className="photo-album">
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
                    index={currentImageIndex}
                    on={{ view: ({ index: currentImageIndex }) => setCurrentImageIndex(currentImageIndex) }}
                    open={isOpen}
                    close={handleClose}
                    slides={images.map(image => ({
                        src: image.src,
                        alt: image.alt,
                        title: image.caption,
                        width: image.width,
                        height: image.height,
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

export default RuinsGallery;