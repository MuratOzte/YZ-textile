import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const About = () => {
    const container = useRef(null);
    const isInView = useInView(container);

    return (
        <motion.div
            animate={{ backgroundColor: isInView ? '#000000' : '#FFFFFFF' }}
            transition={{ duration: 0.5 }}
            className="h-screen flex justify-center"
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
                                className="text-white text-9xl font-mono overflow-hidden text-nowrap"
                            >
                                <span className="bg-white p-2 text-black">
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
        </motion.div>
    );
};

export default About;
