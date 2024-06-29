import './Carousel.css';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import image1 from '@/assets/slide/slide1.jpeg';
import image2 from '@/assets/slide/slide2.jpeg';
import image3 from '@/assets/slide/slide3.jpeg';
import image4 from '@/assets/slide/slide4.jpeg';
import image5 from '@/assets/slide/slide5.jpeg';
import HeroMain from '../Hero/HeroMain';

const images = [image1, image2, image3, image4, image5];

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(images.length - 1);
    const [isAnimating, setIsAnimating] = useState(false);

    const [isInit, setIsInit] = useState(false);

    useEffect(() => {
        setIsInit(true);
        const interval = setInterval(() => {
            setPrevIndex(index);
            setIndex((index + 1) % images.length);
            setIsAnimating(true);
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <HeroMain />
            <div className="absolute top-0 left-0 w-full h-full">
                {/* Transparent linear gradient */}
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background:
                            'linear-gradient(0deg, rgba(0, 0, 0, 0) 90%, rgba(255,255, 255, 1) 100%)',
                        zIndex: 1,
                    }}
                ></div>

                {/* Image carousel */}
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isInit ? '100%' : 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ zIndex: 0 }}
                >
                    <Image
                        src={images[index]}
                        alt={`image-${index}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>
                {isAnimating && (
                    <motion.div
                        key={prevIndex}
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 0, x: '-100%' }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <Image
                            src={images[prevIndex]}
                            alt={`image-${prevIndex}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ImageCarousel;
