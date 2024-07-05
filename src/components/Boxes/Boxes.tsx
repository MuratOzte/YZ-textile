'use client';
import { useEffect, useState } from 'react';
import EachBox from './EachBox';
import { AnimatePresence } from 'framer-motion';

const Boxes = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isViewed, setIsViewed] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
    });

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(() => window.scrollY);
        });
    }, []);

    useEffect(() => {
        if (scrollPosition > 1400 && !isViewed.first) {
            setIsViewed({ ...isViewed, first: true });
        }
        if (scrollPosition > 1800 && !isViewed.second) {
            setIsViewed({ ...isViewed, second: true });
        }
        if (scrollPosition > 2100 && !isViewed.third) {
            setIsViewed({ ...isViewed, third: true });
        }
        if (scrollPosition > 2400 && !isViewed.fourth) {
            setIsViewed({ ...isViewed, fourth: true });
        }
        if (scrollPosition > 2700 && !isViewed.fifth) {
            setIsViewed({ ...isViewed, fifth: true });
        }
    }, [scrollPosition]);

    useEffect(() => {
        console.log(isViewed);
    }, [isViewed]);

    return (
        <div className="flex justify-center w-full mb-64 h-[2000px]">
            <div className="relative">
                <div className="absolute bg-gray-400 w-4 h-[2000px]"></div>
                {(scrollPosition > 1400 ||
                    isViewed.first ||
                    isViewed.second) && (
                    <div
                        style={{ height: `${scrollPosition - 1400}px` }}
                        className="absolute bg-gray-800 w-4 origin-top py-5"
                    >
                        <AnimatePresence>
                            {(scrollPosition > 1500 || isViewed.first) && (
                                <EachBox right={true} key={'item1'} />
                            )}
                            {(scrollPosition > 1800 || isViewed.second) && (
                                <EachBox
                                    right={false}
                                    top={300}
                                    key={'item2'}
                                />
                            )}
                            {(scrollPosition > 2100 || isViewed.third) && (
                                <EachBox right={true} top={600} key={'item3'} />
                            )}
                            {(scrollPosition > 2400 || isViewed.fourth) && (
                                <EachBox
                                    right={false}
                                    top={900}
                                    key={'item4'}
                                />
                            )}
                            {(scrollPosition > 2700 || isViewed.fifth) && (
                                <EachBox
                                    right={true}
                                    top={1200}
                                    key={'item5'}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Boxes;
