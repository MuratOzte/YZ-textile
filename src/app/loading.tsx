'use client'

import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div>
            <motion.h1
                animate={{ width: ['0%', '100%' , '0%'] }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                className="text-black text-9xl font-mono overflow-hidden text-nowrap"
            >
                <span className="bg-black p-2 text-white">YZ</span>
                TEXTILE
            </motion.h1>
        </div>
    );
};

export default Loading;
