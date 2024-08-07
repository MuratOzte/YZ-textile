'use client';
import { useEffect } from 'react';
import About from '@/components/About/About';
import Boxes from '@/components/Boxes/Boxes';
import NewBoxes from '@/components/Boxes/NewBoxes';
import Customers from '@/components/Customers/Customers';
import Nav from '@/components/Nav/Nav';
import ImageCarousel from '@/components/Slide/ImageCarousel';
import Sustainability from '@/components/Sustainability/Sustainability';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav />
            <ImageCarousel />
            <About />
            {/* <Boxes /> */}
            <NewBoxes />
            <Customers />
            <Sustainability />
            <Contact />
        </>
    );
}
