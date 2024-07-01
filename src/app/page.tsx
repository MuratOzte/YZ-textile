'use client';
import About from '@/components/About/About';
import Boxes from '@/components/Boxes/Boxes';
import Nav from '@/components/Nav/Nav';
import ImageCarousel from '@/components/Slide/ImageCarousel';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Home() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    useEffect(() => {
        console.log('isInView', isInView);
    }, [isInView]);

    return (
        <div className="snap-y snap-mandatory">
            <Nav />
            <ImageCarousel />
            {/* <About /> */}
            <Boxes />
        </div>
    );
}
