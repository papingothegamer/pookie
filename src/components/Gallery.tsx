// components/Gallery.tsx
import React, { useState } from 'react';
import Image from 'next/image';  // Import the Image component
import styles from '../styles/gallery.module.css';

const Gallery: React.FC = () => {
  const imageFilenames = [
    'IMG_0309.JPG',
    'IMG_0315.JPG',
    'IMG_0316.JPG',
    'IMG_7678.JPG',
    'IMG_7680.JPG',
    'IMG_7687.JPG',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageFilenames.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageFilenames.length) % imageFilenames.length);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.navigationArrow} onClick={goToPrevImage}>
        &lt;
      </div>
      {imageFilenames.map((filename, index) => (
        <div key={index} className={styles.galleryItem} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
          <Image
            src={`/images/${filename}`}  
            alt={`Image ${index + 1}`}
            width={600}  
            height={800} 
          />
        </div>
      ))}
      <div className={styles.navigationArrow} onClick={goToNextImage}>
        &gt;
      </div>
    </div>
  );
};

export default Gallery;
