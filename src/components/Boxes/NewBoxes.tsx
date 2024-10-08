import { useRef, useState } from 'react';
import {
    DesingSVG,
    Logistics,
    Manifacturing,
    Production,
    Quality,
    Sampling,
} from './icons';

import { motion, useInView } from 'framer-motion';

const NewBoxes = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-evenly w-full mt-16 md:mt-32 gap-8 md:gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-3/12 h-[320px] bg-gray-300 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-lg md:text-xl font-bold uppercase font-sans text-gray-800">
                        <DesingSVG />
                        <h1>Design</h1>
                    </div>
                    <div className="mt-8 mx-5 text-gray-600 text-center text-sm md:text-base">
                        We translate our customers' designs into samples and
                        complete collections. For those needing design
                        assistance, our dedicated team provides expert support.
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="w-full md:w-3/12 h-[320px] bg-gray-200 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-lg md:text-xl font-bold uppercase font-sans text-gray-800">
                        <Sampling />
                        <h1>Sampling</h1>
                    </div>
                    <div className="mt-8 mx-5 text-gray-600 text-center text-sm md:text-base">
                        We create samples and create collections based on our
                        customers' designs. Also for our customers who require
                        design support, we assist with our design team.
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="w-full md:w-3/12 h-[320px] bg-gray-300 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-lg md:text-xl font-bold uppercase font-sans text-gray-800">
                        <div className="w-14 h-14">
                            <Manifacturing />
                        </div>
                        <h1 className="ml-2 text-center text-sm md:text-base">
                            Fabric Manufacturing <br />
                            and Supply
                        </h1>
                    </div>
                    <div className="mt-4 mx-5 text-gray-600 text-center text-sm md:text-base">
                        With the capability to produce custom fabrics and a vast
                        network of suppliers, we deliver fabrics in desired
                        colors and qualities. Our offerings cater to various
                        players in the textile industry, facilitating fabric
                        sourcing from Turkey even for those not seeking contract
                        sewing services.
                    </div>
                </motion.div>
            </div>
            {/* Second row */}
            <div className="flex flex-col md:flex-row justify-evenly w-full md:mt-16 mt-8 gap-8 md:gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.8, delay: 0.55 }}
                    className="w-full md:w-3/12 h-[320px] bg-gray-300 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-lg md:text-xl font-bold uppercase font-sans text-gray-800">
                        <Quality />
                        <h1>Quality Control</h1>
                    </div>
                    <div className="mt-8 mx-5 text-gray-600 text-center text-sm md:text-base">
                        Post-production, our in-house inspectors meticulously
                        scrutinize sewing, ironing, and packaging stages to
                        ensure adherence to our clients' specifications and
                        standards.
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="w-full md:w-3/12 h-[320px] bg-gray-200 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-lg md:text-xl font-bold uppercase font-sans text-gray-800">
                        <Production />
                        <h1>Production</h1>
                    </div>
                    <div className="mt-8 mx-5 text-gray-600 text-center text-sm md:text-base">
                        Upon finalizing designs and fabric selection, we
                        commence manufacturing. Operating our cutting and sewing
                        workshops ensures end-to-end control over the entire
                        production process. We specialize in customized
                        printing, embroidery, and personalized labels and
                        packaging.
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full md:w-3/12 h-[320px] bg-gray-300 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-lg md:text-xl font-bold uppercase font-sans text-gray-800">
                        <Logistics />
                        <h1>Logistics</h1>
                    </div>
                    <div className="mt-8 mx-5 text-gray-600 text-center text-sm md:text-base">
                        Upon order completion, we provide optional door-to-door
                        transportation services to specified addresses,
                        simplifying the process for our clients. Our integrated
                        logistics support allows seamless management of the
                        entire production cycle from a single source.
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NewBoxes;
