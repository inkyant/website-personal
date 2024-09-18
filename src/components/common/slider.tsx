
import * as styles from "@styles/components/common/slider.module.scss";
import React, { useState } from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function Slider({ images }: { images: GatsbyImageData[] | null}) {

    if (!images || images.length < 1) return <></>

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.imageContainer}>
            <GatsbyImage image={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.image} /> 
            </div>
            <button className={styles.prevButton} onClick={goToPrevious}>‹</button>
            <button className={styles.nextButton} onClick={goToNext}>›</button>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => goToImage(index)}
                    />
                ))}
            </div>
        </div>
    );
}
