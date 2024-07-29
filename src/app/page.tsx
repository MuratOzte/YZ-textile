'use client';
import About from '@/components/About/About';
import Boxes from '@/components/Boxes/Boxes';
import NewBoxes from '@/components/Boxes/NewBoxes';
import Customers from '@/components/Customers/Customers';
import Nav from '@/components/Nav/Nav';
import ImageCarousel from '@/components/Slide/ImageCarousel';
import { useEffect } from 'react';

export default function Home() {
    return (
        <>
            <Nav />
            {/* <ImageCarousel /> */}
            {/* <About /> */}
            {/* <Boxes /> */}
            {/* <NewBoxes /> */}
            <Customers />
        </>
    );
}
