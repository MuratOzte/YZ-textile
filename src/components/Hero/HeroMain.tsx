import './style.css';
import { motion } from 'framer-motion';

//absolute z-30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]

const HeroMain = () => {
    return (
        <div className="absolute z-30 top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-transparent px-4 py-2 rounded-md drop-shadow-xl">
            <p className="text-neutral-300 text-9xl brightness-200 font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">YZ TEXTILE</p>
        </div>
    );
};

export default HeroMain;
