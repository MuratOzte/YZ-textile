'use client';

import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="bg-white w-full h-screen flex justify-center items-center">
            <div className="relative">
                <motion.h1
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{
                        duration: 3,
                        delay: 0.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    className="text-black text-9xl font-mono overflow-hidden text-nowrap whitespace-nowrap"
                >
                    <span className="bg-black p-2 text-white">YZ</span>
                    TEXTILE
                </motion.h1>
            </div>
        </div>
    );
};

export default Loading;
