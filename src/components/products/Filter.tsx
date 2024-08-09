import { IoMan } from 'react-icons/io5';
import { IoWoman } from 'react-icons/io5';

import { Dispatch, SetStateAction } from 'react';

interface FilterProps {
    selected: 'Woman' | 'Man' | 'Both';
    setSelected: Dispatch<SetStateAction<'Woman' | 'Man' | 'Both'>>;
}

const Filter: React.FC<FilterProps> = ({ selected, setSelected }) => {
    const handleClick = (option: 'Woman' | 'Man' | 'Both') => {
        if (selected === option) {
            return;
        }
        if (selected === 'Both' && option === 'Both') {
            setSelected(option);
        } else {
            setSelected(selected === 'Both' ? option : 'Both');
        }
    };

    return (
        <div className="bg-gray-200 px-6 py-3 w-fit flex justify-center gap-6 rounded-xl shadow-md select-none">
            <div
                className={`flex items-center px-5 py-2 rounded-lg gap-3 cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105 ${
                    selected === 'Man' || selected === 'Both'
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-50 text-gray-800'
                }`}
                onClick={() => handleClick('Man')}
            >
                <IoMan size={24} />
                <p>Man</p>
            </div>
            <div
                className={`flex items-center px-5 py-2 rounded-lg gap-3 cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105 ${
                    selected === 'Woman' || selected === 'Both'
                        ? 'bg-gray-500 text-white'
                        : 'bg-gray-50 text-gray-800'
                }`}
                onClick={() => handleClick('Woman')}
            >
                <IoWoman size={24} />
                <p>Woman</p>
            </div>
        </div>
    );
};

export default Filter;
