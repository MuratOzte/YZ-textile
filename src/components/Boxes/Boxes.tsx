'use client';
import { useEffect, useState } from 'react';
import EachBox from './EachBox';
import { AnimatePresence, motion } from 'framer-motion';
import DesignSVG from './icons/Design';

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
        const handleScroll = () => {
            setScrollPosition((prevScrollPosition) => {
                const currentScrollY = window.scrollY;
                return currentScrollY > prevScrollPosition
                    ? currentScrollY
                    : prevScrollPosition;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
                <div className="absolute bg-gray-400 w-[10px] h-[2000px] rounded-lg "></div>
                {(scrollPosition > 1400 ||
                    isViewed.first ||
                    isViewed.second) && (
                    <div
                        style={{ height: `${scrollPosition - 1400}px` }}
                        className="absolute bg-gray-800 w-[10px] origin-top py-5 rounded-lg"
                    >
                        <AnimatePresence>
                            {(scrollPosition > 1500 || isViewed.first) && (
                                <>
                                    <EachBox
                                        right={true}
                                        key={'item1'}
                                        title="title1"
                                        description="desc"
                                    />
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute -left-[28px] top-[65px] z-50 bg-white border-gray-800 border-[3px] p-3 rounded-full origin-center"
                                    >
                                        <DesignSVG />
                                    </motion.div>
                                </>
                            )}
                            {(scrollPosition > 1800 || isViewed.second) && (
                                <>
                                    <EachBox
                                        right={false}
                                        top={300}
                                        key={'item2'}
                                        title="title2"
                                        description="desc"
                                    />
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute -left-[28px] top-[365px] z-50 bg-white border-gray-800 border-[3px] p-3 rounded-full origin-center"
                                    >
                                        <DesignSVG />
                                    </motion.div>
                                </>
                            )}
                            {(scrollPosition > 2100 || isViewed.third) && (
                                <>
                                    <EachBox
                                        right={true}
                                        top={600}
                                        key={'item3'}
                                        title="title3"
                                        description="desc"
                                    />
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute -left-[28px] top-[665px] z-50 bg-white border-gray-800 border-[3px] p-3 rounded-full origin-center"
                                    >
                                        <DesignSVG />
                                    </motion.div>
                                </>
                            )}
                            {(scrollPosition > 2400 || isViewed.fourth) && (
                                <>
                                    <EachBox
                                        right={false}
                                        top={900}
                                        key={'item4'}
                                        title="title4"
                                        description="desc"
                                    />
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute -left-[28px] top-[965px] z-50 bg-white border-gray-800 border-[3px] p-3 rounded-full origin-center"
                                    >
                                        <DesignSVG />
                                    </motion.div>
                                </>
                            )}
                            {(scrollPosition > 2700 || isViewed.fifth) && (
                                <>
                                    <EachBox
                                        right={true}
                                        top={1200}
                                        key={'item5'}
                                        title="title5"
                                        description="desc"
                                    />
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute -left-[28px] top-[1265px] z-50 bg-white border-gray-800 border-[3px] p-3 rounded-full origin-center"
                                    >
                                        <DesignSVG />
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Boxes;
