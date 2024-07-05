'use client';
import About from '@/components/About/About';
import Boxes from '@/components/Boxes/Boxes';
import Nav from '@/components/Nav/Nav';
import ImageCarousel from '@/components/Slide/ImageCarousel';
import { useEffect } from 'react';

export default function Home() {
    return (
        <>
            <Nav />
            <ImageCarousel />
            <About />
            <Boxes />
        </>
    );
}
