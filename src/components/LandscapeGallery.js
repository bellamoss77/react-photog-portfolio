import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'yet-another-react-lightbox';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'yet-another-react-lightbox/styles.css';
import './LandscapeGallery.scss';

const LandscapeGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/Hikes-Late-May24_6.png',
            width: 800,
            height: 600,
            alt: 'hilly landscape bathed in light',
            caption: 'Walnut Creek Park, North Garden, VA - Late May 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/Hikes-Late-May24_10.png',
            width: 800,
            height: 600,
            alt: 'Sunset reflection on water',
            caption: 'Walnut Creek Park, North Garden, VA - Late May 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/SKYLINE-SUNSET_1.png',
            width: 600,
            height: 800,
            alt: 'woman looks out at sunset from Ravens Roost, Blue Ridge Parkway, VA',
            caption: "Sunset from Raven's Roost Overlook, Blue Ridge Parkway, VA - Late June 2024"
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/JRSP_June1-24_11.png',
            width: 800,
            height: 600,
            alt: 'riverbed underwater',
            caption: 'James River State Park, Gladstone, VA - June 1, 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/JRSP_May-31-24_1.png',
            width: 800,
            height: 600,
            alt: 'wheatgrass strand',
            caption: 'James River State Park, Gladstone, VA - May 31, 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/JRSP_May-31-24_18.png',
            width: 800,
            height: 600,
            alt: 'purple flower against bokeh background',
            caption: 'James River State Park, Gladstone, VA - May 31, 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/JRSP_May-31-24_14.png',
            width: 800,
            height: 600,
            alt: 'wheatgrass sways in breeze in front of marsh',
            caption: 'James River State Park, Gladstone, VA - May 31, 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/JRSP_May-31-24_26.png',
            width: 800,
            height: 600,
            alt: 'sunset over marsh',
            caption: 'James River State Park, Gladstone, VA - May 31, 2024'
        },
        {
            src: 'https://github.com/bellamoss77/react-photog-portfolio/blob/main/public/LANDSCAPE-IMGS/skylineSunset1-05.png?raw=true',
            width: 800,
            height: 600,
            alt: 'vivid sunset against tree silhouette',
            caption: 'Blue Ridge Parkway Sunset Near Rockfish Gap, VA - April 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/skylineSunset1-11.png',
            width: 800,
            height: 600,
            alt: 'subdued sunset against mountain',
            caption: 'Blue Ridge Parkway Sunset Near Rockfish Gap, VA - April 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_1.png',
            width: 800,
            height: 600,
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_2.png',
            width: 800,
            height: 600,
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_5.png',
            width: 800,
            height: 600,
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_9.png',
            width: 800,
            height: 600,
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/SKYLINE-SUNSET_11.png',
            width: 800,
            height: 600,
            alt: 'vivid sunset in central va',
            caption: 'Sunset in Central Virginia - Mid June 2024'
        },
        {
            src: process.env.PUBLIC_URL + '/LANDSCAPE-IMGS/SKYLINE-SUNSET_14.png',
            width: 800,
            height: 600,
            alt: 'sunset from blue ridge parkway',
            caption: "Sunset from Raven's Roost Overlook, Blue Ridge Parkway, VA - Late June 2024"
        }
    ];

    const handleOpen = (index) => {
      console.log(`handleOpen: Opening image at index: ${index}`);
      setCurrentImageIndex(index);
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    const handleNext = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      console.log(`handleNext: Moving to next image. Next index: ${nextIndex}`);
      setCurrentImageIndex(nextIndex);
    };
  
    const handlePrev = () => {
      const prevIndex = (currentImageIndex + images.length - 1) % images.length;
      console.log(`handlePrev: Moving to previous image. Previous index: ${prevIndex}`);
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
                  width="100%"
                  height="auto"
                  effect="blur"
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
          />
        )}
      </div>
    );
  };
  
  export default LandscapeGallery;