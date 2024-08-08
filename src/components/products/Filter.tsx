import { IoMan } from 'react-icons/io5';
import { IoWoman } from 'react-icons/io5';

const Filter = () => {
    return (
        <div className="bg-gray-200 px-4 py-2 w-fit flex justify-center gap-4 rounded-md select-none">
            <div className="ring-2 ring-gray-500 bg-gray-50 flex items-center px-4 rounded-md gap-2 py-2 cursor-pointer hover:scale-105 duration-150 ease">
                <IoMan />
                <p>Man</p>
            </div>
            <div className="bg-gray-50 flex items-center px-4 rounded-md gap-2 py-2 cursor-pointer hover:scale-105 duration-150 ease">
                <IoWoman />
                <p>Woman</p>
            </div>
        </div>
    );
};

export default Filter;
