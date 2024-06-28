import './style.css';
import { motion } from 'framer-motion';

const HeroMain = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute text-black  z-30 top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-xl bg-white main-header"
            >
                <div className="flex gap-2 text-5xl px-5 py-4 justify-center items-center">
                    <span className="p-1 font-bold">YZ</span>
                    <span className="">Textile</span>
                </div>
            </motion.div>
            <motion.div>
                <div className="absolute z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-500 bg-gray-200 flex text-center text-lg py-4 px-5 rounded-xl shadow-2xl">
                    We produce high quality clothing with our vision and
                    understanding of production in accordance with international
                    standards.
                </div>
            </motion.div>
        </div>
    );
};

export default HeroMain;
