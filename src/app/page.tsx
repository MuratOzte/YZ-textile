'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import About from '@/components/About/About';
import Boxes from '@/components/Boxes/Boxes';
import NewBoxes from '@/components/Boxes/NewBoxes';
import Customers from '@/components/Customers/Customers';
import Nav from '@/components/Nav/Nav';
import ImageCarousel from '@/components/Slide/ImageCarousel';
import Sustainability from '@/components/Sustainability/Sustainability';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > prevScrollPos) {
                // Aşağı kaydırma
                setIsNavVisible(false);
            } else {
                // Yukarı kaydırma
                setIsNavVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isNavVisible ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 1000,
                }}
            >
                <Nav />
            </motion.div>
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
