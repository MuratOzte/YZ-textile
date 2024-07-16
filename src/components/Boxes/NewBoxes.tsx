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
    const isInView = useInView(ref);

    return (
        <div ref={ref}>
            <div className="flex justify-evenly w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.5 }}
                    className="w-3/12 h-[320px] bg-gray-300 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-xl font-bold uppercase font-sans text-gray-800">
                        <DesingSVG />
                        <h1>Design</h1>
                    </div>
                    <div className="mt-8 mx-5 ml-8 text-gray-600 text-center text-base">
                        We translate our customers' designs into samples and
                        complete collections. For those needing design
                        assistance, our dedicated team provides expert support.
                    </div>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? 96 : 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="absolute w-24 h-[6px] shadow-lg  bg-slate-300 top-[50%] left-[380px] origin-center"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                        isInView && !isAnimated
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="w-3/12 h-[320px] bg-gray-200 rounded-md relative"
                >
                    <div className="flex items-center justify-center pt-8 gap-5 text-xl font-bold uppercase font-sans text-gray-800">
                        <Sampling />
                        <h1>Sampling</h1>
                    </div>
                    <div className="mt-12 mx-5 ml-8 text-gray-600 text-center">
                        We create samples and create collections based on our
                        customers' designs. Also for our customers who require
                        design support, we assist with our design team.
                    </div>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? 96 : 0 }}
                        transition={{ duration: 0.5, delay: 0.20 }}
                        className="absolute w-24 h-[6px] shadow-lg  bg-slate-300 top-[50%] left-[380px] origin-center"
                    />
                </motion.div>
                <div className="w-3/12 h-[320px] bg-gray-300 rounded-md">
                    <div className="flex items-center  justify-center pt-8 text-xl font-bold uppercase font-sans text-gray-800">
                        <div className="pl-2 pr-2 w-14 h-14">
                            <Manifacturing />
                        </div>
                        <h1 className="ml-4 text-center text-base">
                            Fabric Manufacturing <br />
                            and Supply
                        </h1>
                    </div>
                    <div className="mt-4 mx-5 ml-8 text-gray-600 text-center">
                        With the capability to produce custom fabrics and a vast
                        network of suppliers, we deliver fabrics in desired
                        colors and qualities. Our offerings cater to various
                        players in the textile industry, facilitating fabric
                        sourcing from Turkey even for those not seeking contract
                        sewing services.
                    </div>
                </div>
            </div>
            {/*second row*/}
            <div className="flex justify-evenly w-full mt-16">
                <div className="w-3/12 h-[320px] bg-gray-200 rounded-md relative">
                    <div className="flex items-center justify-center pt-8 gap-5 text-xl font-bold uppercase font-sans text-gray-800">
                        <Quality />
                        <h1>Quality Control</h1>
                    </div>
                    <div className="mt-12 mx-5 ml-8 text-gray-600 text-center">
                        Post-production, our in-house inspectors meticulously
                        scrutinize sewing, ironing, and packaging stages to
                        ensure adherence to our clients' specifications and
                        standards.
                    </div>
                    <div className="absolute w-24 h-[6px] shadow-lg  bg-slate-300 top-[50%] -right-24 origin-left" />
                </div>
                <div className="w-3/12 h-[320px] bg-gray-300 rounded-md relative">
                    <div className="flex items-center justify-center pt-8 gap-5 text-xl font-bold uppercase font-sans text-gray-800">
                        <Production />
                        <h1>Production</h1>
                    </div>
                    <div className="mt-8 mx-5 ml-8 text-gray-600 text-center text-base">
                        Upon finalizing designs and fabric selection, we
                        commence manufacturing. Operating our cutting and sewing
                        workshops ensures end-to-end control over the entire
                        production process. We specialize in customized
                        printing, embroidery, and personalized labels and
                        packaging.
                    </div>
                    <div className="absolute w-24 h-[6px] shadow-lg  bg-slate-300 top-[50%] -right-24 origin-right" />
                </div>

                <div className="w-3/12 h-[320px] bg-gray-300 rounded-md relative">
                    <div className="flex items-center justify-center pt-8 gap-5 text-xl font-bold uppercase font-sans text-gray-800">
                        <Logistics />
                        Logistics
                    </div>
                    <div className="mt-4 mx-5 ml-8 text-gray-600 text-center">
                        Upon order completion, we provide optional door-to-door
                        transportation services to specified addresses,
                        simplifying the process for our clients. Our integrated
                        logistics support allows seamless management of the
                        entire production cycle from a single source.
                    </div>
                    <div className="absolute w-[6px] h-16 shadow-lg  bg-slate-300 left-[50%] -top-16 origin-left" />
                </div>
            </div>
        </div>
    );
};
export default NewBoxes;
