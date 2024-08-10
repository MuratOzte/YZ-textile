import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Slide1 from '@/assets/slide/slide1.jpeg';
import Slide2 from '@/assets/slide/slide2.jpeg';
import Slide4 from '@/assets/slide/slide4.jpeg';
import Slide5 from '@/assets/slide/slide5.jpeg';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

const About = () => {
    const [isInit, setIsInit] = useState(true);
    const ui = useSelector((state: RootState) => state.ui);

    const container = useRef(null);
    const isInView = useInView(container, { once: true });

    const aboutRef = useRef(null);
    const isAboutInView = useInView(aboutRef, { once: true });

    useEffect(() => {
        if (isInit && isInView) {
            setIsInit(false);
        }
    }, [isInView]);

    return (
        <div className="flex flex-col gap-16 md:gap-20 px-4">
            <motion.div className="flex justify-center flex-col bg-white">
                <div className="flex flex-col items-center">
                    <div ref={container}>
                        {(isInView || ui.isNavClicked) && (
                            <div>
                                <motion.h1
                                    initial={{
                                        width:
                                            isInit || !ui.isNavClicked
                                                ? 0
                                                : '100%',
                                    }}
                                    animate={{ width: '100%' }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.2,
                                        ease: 'easeInOut',
                                    }}
                                    className="text-black text-4xl md:text-6xl lg:text-9xl font-mono overflow-hidden text-nowrap"
                                >
                                    <span className="bg-black p-1 md:p-2 text-white">
                                        YZ
                                    </span>
                                    TEXTILE
                                </motion.h1>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex justify-center mt-8 md:mt-16"
                        ref={aboutRef}
                    >
                        {(isAboutInView || ui.isNavClicked) && (
                            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5,
                                    }}
                                    className="text-slate-500 text-center text-sm md:text-lg w-full md:w-1/3 tracking-wider"
                                >
                                    We produce high quality clothing with our
                                    vision and understanding of production in
                                    accordance with international standards.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5,
                                    }}
                                    className="rounded-md overflow-hidden shadow-lg"
                                >
                                    <Image
                                        alt="image1"
                                        src={Slide1}
                                        width={400}
                                        height={300}
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center mt-8 md:mt-16">
                        {(isAboutInView || ui.isNavClicked) && (
                            <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.7,
                                    }}
                                    className="rounded-md overflow-hidden shadow-lg"
                                >
                                    <Image
                                        alt="image2"
                                        src={Slide2}
                                        width={400}
                                        height={300}
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.7,
                                    }}
                                    className="text-slate-500 text-center text-sm md:text-lg w-full md:w-1/3 tracking-wider"
                                >
                                    We are high quality clothing manufacturer
                                    based in Istanbul/Turkey. We are providing
                                    high-quality service with custom cutting,
                                    custom printing & embroidery, sewing,
                                    ironing, package and quality control units.
                                    Our aim is to provide high quality service
                                    with our experienced and qualified employees
                                    to customers who have a brand or want to
                                    create a new brand.
                                </motion.p>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center mt-8 md:mt-16">
                        {(isAboutInView || ui.isNavClicked) && (
                            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
                                <motion.p
                                    initial={{ x: -20 }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5,
                                    }}
                                    className="text-slate-500 text-center text-sm md:text-lg w-full md:w-1/3 tracking-wider space-y-2 md:space-y-5"
                                >
                                    <span className="text-slate-800 text-lg md:text-2xl uppercase">
                                        What do we produce?
                                    </span>
                                    <p>
                                        As YZ Textile, we produce high quality
                                        hoodies, sweatshirts, sweatpants,
                                        tracksuits and t-shirts in desired
                                        patterns and sizes.
                                    </p>
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5,
                                    }}
                                    className="rounded-md overflow-hidden shadow-lg"
                                >
                                    <Image
                                        alt="image3"
                                        src={Slide5}
                                        width={400}
                                        height={300}
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center mt-8 md:mt-16">
                        {(isAboutInView || ui.isNavClicked) && (
                            <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.7,
                                    }}
                                    className="rounded-md overflow-hidden shadow-lg"
                                >
                                    <Image
                                        alt="image4"
                                        src={Slide4}
                                        width={420}
                                        height={320}
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.p
                                    initial={{ x: 20 }}
                                    animate={{
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.7,
                                    }}
                                    className="text-slate-500 text-center text-sm md:text-lg w-full md:w-1/3 tracking-wider space-y-2 md:space-y-5"
                                >
                                    <span className="text-slate-800 text-lg md:text-2xl uppercase">
                                        SERVICES & PROCESSES
                                    </span>
                                    <p>
                                        From conceptualization to reality... Our
                                        seasoned team oversees every stage from
                                        pre-production through to
                                        post-production, ensuring seamless
                                        support and efficiency, so you can
                                        streamline your operations without the
                                        hassle of multiple suppliers for each
                                        step.
                                    </p>
                                </motion.p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
