
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';

import './gallery.css';

const Gallery = () => {
  const galleryLength = 42;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const generateRandomOrder = () => {
      const shuffledImages = Array.from({ length: galleryLength }, (_, index) =>
        require(`../../images/gallery${index + 1}.jpg`)
      );

      // Fisher-Yates (Knuth) shuffle algorithm
      for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
      }

      setImages(shuffledImages);
    };

    generateRandomOrder();
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

  return (
    <>
      <Header title="our Gallery" image={HeaderImage}>
        Explore our gallery to witness a symphony of craftsmanship and design,
        where each piece tells a unique story of creativity and innovation.
      </Header>

      <section className='gallery'>
        <div className='container gallery__container'>
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`gallery ${index + 1}`}  className="gallery-image" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
