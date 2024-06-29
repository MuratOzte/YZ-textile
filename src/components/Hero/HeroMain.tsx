import './style.css';
import { motion } from 'framer-motion';

//absolute z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]

const HeroMain = () => {
    return (
        <div className="absolute z-30 top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-transparent px-4 py-2 backdrop-blur-md opacity-90 rounded-md">
            <p className="text-white text-9xl">YZ TEXTILE</p>
        </div>
    );
};

export default HeroMain;
