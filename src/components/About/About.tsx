import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';

import Slide1 from '@/assets/slide/slide1.jpeg';
import Slide2 from '@/assets/slide/slide2.jpeg';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import uiSlice from '@/store/slices/uiSlice';

const About = () => {
    const [isInit, setIsInit] = useState(true);
    const ui = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    const container = useRef(null);
    const isInView = useInView(container);

    const aboutref = useRef(null);
    const isAboutInView = useInView(aboutref);

    const processRef = useRef(null);
    const isProcessInView = useInView(processRef);

    useEffect(() => {
        if (isInit && isInView) {
            setIsInit(false);
        }
    }, [isInView]);

    return (
        <div className="flex gap-20 flex-col">
            <motion.div className="flex justify-center flex-col bg-white">
                <div className="flex flex-col items-center">
                    <div ref={container}>
                        <AnimatePresence>
                            {isInView && (
                                <div>
                                    <motion.h1
                                        initial={{ width: isInit ? 0 : '100%' }}
                                        animate={{ width: '100%' }}
                                        transition={{
                                            duration: 1.5,
                                            delay: 0.2,
                                            ease: 'easeInOut',
                                        }}
                                        className="text-black text-9xl font-mono overflow-hidden text-nowrap"
                                    >
                                        <span className="bg-black p-2 text-white">
                                            YZ
                                        </span>
                                        TEXTILE
                                    </motion.h1>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="flex justify-center mt-16" ref={aboutref}>
                        <AnimatePresence>
                            <div>
                                {isAboutInView && (
                                    <div className="w-full flex justify-center items-center gap-5">
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{
                                                opacity: isAboutInView ? 1 : 0,
                                                x: 0,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5,
                                            }}
                                            className="text-slate-500 w-1/3 tracking-wider text-center text-lg"
                                        >
                                            We produce high quality clothing
                                            with our vision and understanding of
                                            production in accordance with
                                            international standards.
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{
                                                opacity: isAboutInView ? 1 : 0,
                                                x: 0,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5,
                                            }}
                                            className="rounded-md overflow-hidden  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                                        >
                                            <Image
                                                alt="image1"
                                                src={Slide1}
                                                width={400}
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                )}
                                {isAboutInView && (
                                    <div className="w-full flex justify-center items-center gap-5 mt-16 ">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{
                                                opacity: isAboutInView ? 1 : 0,
                                                x: 0,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.7,
                                            }}
                                            className="rounded-md overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                                        >
                                            <Image
                                                alt="image1"
                                                src={Slide2}
                                                width={400}
                                                height={400}
                                                className="object-cover"
                                            />
                                        </motion.div>
                                        <motion.p
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{
                                                opacity: isAboutInView ? 1 : 0,
                                                x: 0,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.7,
                                            }}
                                            className="text-slate-500 w-1/3 tracking-wider text-center text-lg"
                                        >
                                            We are high quality clothing
                                            manufacturer based in
                                            Istanbul/Turkey. We are providing
                                            high-quality service with custom
                                            cutting, custom printing &
                                            embroidery, sewing, ironing, package
                                            and quality control units. Our aim
                                            is to provide high quality service
                                            with our experienced and qualified
                                            employees to customers who have a
                                            brand or want to create a new brand
                                        </motion.p>
                                    </div>
                                )}
                            </div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
            <div ref={processRef} className="pt-4">
                <AnimatePresence>
                    {isProcessInView && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isProcessInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-transparent text-black flex justify-center flex-col text-center items-center gap-5 mb-20"
                        >
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-5xl"
                            >
                                SERVICES & PROCESSES
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="w-2/3 text-slate-500"
                            >
                                From drawing to real life… Pre-production,
                                production process and post-production: Thanks
                                to its experienced team in all processes from
                                idea to packaging, it provides support to every
                                step, so that you can run your operation
                                quickly, reliably and smoothly without having to
                                work with another supplier at every step.
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default About;
