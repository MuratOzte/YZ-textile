'use client';
import { useEffect, useState } from 'react';
import EachBox from './EachBox';

const Boxes = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(() => window.scrollY);
        });
    }, []);

    return (
        <div className="flex justify-center w-full mb-64 h-[2000px]">
            <div className="relative">
                <div className="absolute bg-gray-400 w-4 h-[2000px]"></div>
                {scrollPosition > 1400 && (
                    <div
                        style={{ height: `${scrollPosition - 1400}px` }}
                        className="absolute bg-gray-800 w-4 origin-top"
                    >
                        <EachBox left={true} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Boxes;
