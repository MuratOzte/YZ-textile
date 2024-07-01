'use client';
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const Boxes = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(() => window.scrollY);
        });
    }, []);

    return (
        <div className="flex justify-center w-full mb-64">
            <div className="relative">
                <div className="absolute bg-gray-400 w-4 h-[2000px]"></div>
                {scrollPosition > 500 && (
                    <div
                        style={{ height: `${scrollPosition - 500}px` }}
                        className="absolute bg-gray-800 w-4 origin-top"
                    ></div>
                )}
            </div>
        </div>
    );
};

export default Boxes;
