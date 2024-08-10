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
        // Ensure this code only runs in the browser
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > prevScrollPos) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]); // Remove `window` from the dependency array

    return (
        <div className="scroll-smooth">
            <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: isNavVisible ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 1000,
                    marginRight: 0,
                }}
            >
                <Nav />
            </motion.div>
            <ImageCarousel />
            <div id="about">
                <About />
            </div>
            {/* <Boxes /> */}
            <div id="services">
                <NewBoxes />
            </div>
            <div id="customers">
                <Customers />
            </div>
            <div id="sustainability">
                <Sustainability />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}
