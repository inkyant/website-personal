
import styles from "@styles/components/common/slider.module.scss";
import React, { useEffect, useRef, useState } from 'react';

const isVideo = (path: string) => /\.(webm|mp4)$/i.test(path)

export default function Slider({ images }: { images: string[] | null }) {

    if (!images || images.length < 1) return <></>

    const [currentIndex, setCurrentIndex] = useState(0);

    // images stay hidden until loaded, so the alt text / broken image icon never flashes
    const [loaded, setLoaded] = useState(() => images.map(() => false));

    const onImageLoad = (index: number) => {
        setLoaded((prev) => prev[index] ? prev : prev.map((value, i) => i === index || value));
    };

    // videos only play while their slide is showing, starting from the beginning
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return
            if (index === currentIndex) {
                video.currentTime = 0
                video.play().catch(() => {})
            } else {
                video.pause()
            }
        })
    }, [currentIndex]);

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
            <div className={`${styles.imageContainer} ${loaded[currentIndex] ? '' : styles.loading}`}>
                {images.map((imagePath, index) => {
                    const style = {opacity: index == currentIndex && loaded[index] ? 1 : 0}
                    return isVideo(imagePath) ?
                        <video key={index} src={imagePath} style={style} className={styles.image} muted loop playsInline autoPlay={index === 0}
                            onLoadedData={() => onImageLoad(index)}
                            ref={(video) => {
                                videoRefs.current[index] = video
                                // catch videos that loaded (e.g. from cache) before onLoadedData was attached
                                if (video && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) onImageLoad(index)
                            }} />
                        :
                        <img key={index} src={imagePath} style={style} alt={`Slide ${index}`} className={styles.image}
                            onLoad={() => onImageLoad(index)}
                            // catch images that finished loading (e.g. from cache) before onLoad was attached
                            ref={(img) => { if (img?.complete && img.naturalWidth) onImageLoad(index) }} />
                })}
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
