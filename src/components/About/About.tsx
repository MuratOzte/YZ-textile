import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const About = () => {
    const container = useRef(null);
    const isInView = useInView(container);

    return (
        <motion.div
            className="flex justify-center flex-col h-screen bg-white"
        >
            <div className="flex flex-col mt-28  items-center">
                <div ref={container} className="">
                    {isInView && (
                        <div>
                            <motion.h1
                                initial={{ width: 0 }}
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
                </div>
                <div className="flex justify-center mt-16">
                    <AnimatePresence>
                        {isInView && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isInView ? 1 : 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="text-slate-500 w-1/2 tracking-wider text-center text-lg"
                            >
                                We are high quality clothing manufacturer based
                                in Istanbul/Turkey. We are providing
                                high-quality service with custom cutting, custom
                                printing & embroidery, sewing, ironing, package
                                and quality control units. Our aim is to provide
                                high quality service with our experienced and
                                qualified employees to customers who have a
                                brand or want to create a new brand
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="bg-white text-black flex justify-center flex-col text-center items-center gap-5 pt-28 mb-20"
                    >
                        <motion.h1
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-5xl"
                        >
                            SERVICES & PROCESSES
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="w-2/3 text-slate-500"
                        >
                            From drawing to real life… Pre-production,
                            production process and post-production: Thanks to
                            its experienced team in all processes from idea to
                            packaging, it provides support to every step, so
                            that you can run your operation quickly, reliably
                            and smoothly without having to work with another
                            supplier at every step.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default About;
