import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/styles.css'
import './LandscapeGallery.scss';

const ResponsiveGridLayout = WidthProvider(Responsive);

const images =  [
    {
        src: '/LANDSCAPE-IMGS/Hikes-Late-May24_6.png', 
        alt: 'hilly landscape bathed in light',
        caption: 'Walnut Creek Park, North Garden, VA - Late May 2024'
     }, {
        src: '/LANDSCAPE-IMGS/Hikes-Late-May24_10.png',
        alt: 'Sunset reflection on water',
        caption: 'Walnut Creek Park, North Garden, VA - Late May 2024'
     }, {
        src: '/LANDSCAPE-IMGS/JRSP_June1-24_11.png',
        alt: 'riverbed underwater',
        caption: 'James River State Park, Gladstone, VA - June 1, 2024'
     }, {
        src: '/LANDSCAPE-IMGS/JSRP_May-31-24_1.png',
        alt: 'wheatgrass strand',
        caption: 'James River State Park, Gladstone, VA - May 31, 2024'
     }, {
        src: '/LANDSCAPE-IMGS/JSRP_May-31-24_18.png',
        alt: 'purple flower against bokeh background',
        caption: 'James River State Park, Gladstone, VA - May 31, 2024'
     }, {
        src: '/LANDSCAPE-IMGS/JRSP_May-31-24_14.png',
        alt: 'wheatgrass sways in breeze in front of marsh',
        caption: 'James River State Park, Gladstone, VA - May 31, 2024'
     }, {
        src: '/LANDSCAPE-IMGS/JRSP_May-31-24_26.png',
        alt: 'sunset over marsh',
        caption: 'James River State Park, Gladstone, VA - May 31, 2024'
     }, {
        src: 'LANDSCAPE-IMGS/skylineSunset1-05.png',
        alt: 'vivid sunset against tree silhouette',
        caption: 'Blue Ridge Parkway Sunset Near Rockfish Gap, VA - April 2024'
     }, {
        src: '/LANDSCAPE-IMGS/skylineSunset1-11.png',
        alt: 'subdued sunset against mountain',
        caption: 'Blue Ridge Parkway Sunset Near Rockfish Gap, VA - April 2024'
     }, {
        src: '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_1.png',
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
     }, {
        src: '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_2.png',
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
     }, {
        src: '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_5.png',
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
     }, {
        src: '/LANDSCAPE-IMGS/SKYLINE-SUNRISE_9.png',
        alt: 'sunrise from blue ridge parkway',
        caption: 'Blue Ridge Parkway Sunrise Near Rockfish Gap, VA - Late June 2024'
     }, {
        src: '/LANDSCAPE-IMGS/SKYLINE-SUNSET_1.png',
        alt: 'woman looks out at sunset from Ravens Roost, Blue Ridge Parkway, VA',
        caption: "Sunset from Raven's Roost Overlook, Blue Ridge Parkway, VA - Late June 2024"
     }, {
        src: '/LANDSCAPE-IMGS/SKYLINE-SUNSET_11.png',
        alt: 'vivid sunset in central va',
        caption: 'Sunset in Central Virginia - Mid June 2024'
     }, {
        src: '/LANDSCAPE-IMGS/SKYLINE-SUNSET_14.png',
        alt: 'sunset from blue ridge parkway',
        caption: "Sunset from Raven's Roost Overlook, Blue Ridge Parkway, VA - Late June 2024"
     }
];

const LandscapeGallery = () => {
    const [open, setOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    const layout = images.map((image, index) => ({
        i: image.src,
        x: (index % 3) * 4,
        y: Math.floor(index / 3) * 4,
        w: 4,
        h: 4
    }));

    const handleOpen = (index) => {
        setCurrentImageIndex(index);
        setOpen(true);
    }

    return (
        <div className='gallery'>
            <ResponsiveGridLayout
            className='layout'
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            >
                {images.map((image, index) => (
                    <div key={image.src} data-grid={layout[index]}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          onClick={() => handleOpen(index)}
                          style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                        />
                    </div>
                ))}
            </ResponsiveGridLayout>

            {open && (
                <Lightbox
                  open={open}
                  close={() => setOpen(false)}
                  slides={images.map(img => ({ src: img.src, alt: img.alt, caption: img.caption }))}
                  index={currentImageIndex}
                  onIndexChange={setCurrentImageIndex}
                />
            )}
        </div>
    );
};

export default LandscapeGallery;