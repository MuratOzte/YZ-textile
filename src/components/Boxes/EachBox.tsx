import { motion } from 'framer-motion';

interface EachBoxProps {
    right?: boolean;
    top?: number;
    title: string;
    description: string;
}

const EachBox: React.FC<EachBoxProps> = ({
    right = false,
    top = 0,
    title,
    description,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, width: 0, backgroundColor: '#FFFFFF' }}
            animate={{ opacity: 1, width: '', backgroundColor: '#000000' }}
            transition={{ duration: 0.5 }}
            style={{ top: `${top}px` }}
            className={`absolute ${
                right
                    ? 'left-4 sm:left-8 md:left-16 lg:left-24'
                    : 'right-4 sm:right-8 md:right-16 lg:right-24'
            } 
            bg-black flex w-full sm:w-[200px] md:w-[300px] lg:w-[400px] h-[200px] min-w-[150px] ${
                right ? 'origin-left' : 'origin-right'
            }rounded-lg shadow-lg z-`}
        >
            {!right ? (
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-black border-b-[12px] border-b-transparent absolute top-[50%] bot[-50%] translate-y-[-50%] -right-[17px]" />
            ) : (
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-r-[18px] border-black border-b-[12px] border-b-transparent absolute top-[50%] bot[-50%] translate-y-[-50%] -left-[17px]" />
            )}

            <div className="text-white">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

export default EachBox;
