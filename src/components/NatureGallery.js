import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'yet-another-react-lightbox';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'yet-another-react-lightbox/styles.css';
import './NatureGallery.scss';

const NatureGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
        {
           src: process.env.PUBLIC_URL + '/NATURE-IMGS/BIRDS_2.png',
           height: 600,
           width: 900,
           alt: 'birds on power line',
           caption: 'Birds on Power Line, Central Virginia - June 2024',
           loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/BUNNY-JUNE_1.png',
            height: 600,
            width: 900,
            alt: 'bunny in grass',
            caption: 'Rabbit in Grass, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/FLOWERS-JUNE_1.png',
            height: 600,
            width: 900,
            alt: 'Pink Lily',
            caption: 'Pink Lily, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/FLOWERS-JUNE_2.png',
            height: 600,
            width: 900,
            alt: 'pink lilies',
            caption: 'Pink Lilies, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/FLOWERS-JUNE_3.png',
            height: 600,
            width: 900,
            alt: 'tiger lilies',
            caption: 'Tiger Lilies, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/FLOWERS-JUNE_6.png',
            height: 600,
            width: 900,
            alt: 'pink lilies',
            caption: 'Pink Lilies, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/FLOWERS-JUNE_7.png',
            height: 600,
            width: 900,
            alt: 'yellow lilies',
            caption: 'Yellow Lilies, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/FLOWERS-JUNE_8.png',
            height: 900,
            width: 600,
            alt: 'wildflowers black and white',
            caption: 'Wildflowers, Central Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/NATURE-JUNE_1.png',
            height: 900,
            width: 600,
            alt: 'natural watering hole',
            caption: 'Watering Hole at Sugar Hollow, Albemarle Co. Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_1.png',
            height: 600,
            width: 900,
            alt: 'small waterfall over rocks',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_2.png',
            height: 900,
            width: 600,
            alt: 'small waterfall over rocks',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_3.png',
            height: 600,
            width: 900,
            alt: 'small waterfall over rocks',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_4.png',
            height: 600,
            width: 900,
            alt: 'small waterfall over rocks',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_5.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_6.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_7.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_8.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_9.png',
            height: 600,
            width:900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_10.png',
            height: 900,
            width: 600,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_11.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_12.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_13.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_14.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_15.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_16.png',
            height: 900,
            width: 600,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/WILDLIFE-JUNE_2.png',
            height: 600,
            width: 900,
            alt: 'birds on powerline on Afton Mountain',
            caption: 'Birds on Power Line, Afton, Virginia - June 2024',
            loading: 'lazy'
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_17.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_18.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
        }, {
            src: process.env.PUBLIC_URL + '/NATURE-IMGS/SH_19.png',
            height: 600,
            width: 900,
            alt: 'Great Falls in Shenandoah National Forest',
            caption: 'Great Falls Near Sugar Hollow, Albemarle Co. Virginia - July 2024',
            loading: 'lazy' 
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
    
    export default NatureGallery;