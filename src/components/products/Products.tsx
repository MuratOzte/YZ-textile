import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
    Men1,
    Men2,
    Men3,
    Men4,
    Men5,
    Men6,
    Men7,
    Men8,
    Men9,
    Men10,
    Men11,
    Men12,
    Men13,
    Men14,
    Men15,
    Men16,
    Men17,
    Men18,
    Men19,
    Men20,
    Men21,
    Men22,
    Men23,
    Men24,
    Men25,
    Men26,
    Men27,
    Men28,
    Men29,
} from '@/assets/menCloth';

import {
    Women1,
    Women2,
    Women3,
    Women4,
    Women5,
    Women6,
    Women7,
    Women8,
    Women9,
    Women10,
    Women11,
    Women12,
    Women13,
    Women14,
} from '@/assets/womenCloth';

interface ProductsProps {
    selected: 'Woman' | 'Man' | 'Both';
}

const Products: React.FC<ProductsProps> = ({ selected }) => {
    const menImages = [
        Men6,
        Men2,
        Men3,
        Men4,
        Men5,
        Men1,
        Men7,
        Men8,
        Men9,
        Men10,
        Men11,
        Men12,
        Men13,
        Men14,
        Men15,
        Men16,
        Men17,
        Men18,
        Men19,
        Men20,
        Men21,
        Men22,
        Men23,
        Men24,
        Men25,
        Men26,
        Men27,
        Men28,
        Men29,
    ];

    const womenImages = [
        Women1,
        Women2,
        Women3,
        Women4,
        Women5,
        Women6,
        Women7,
        Women8,
        Women9,
        Women10,
        Women11,
        Women12,
        Women13,
        Women14,
    ];

    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.matchMedia('(min-width: 1024px)').matches);
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderImages = () => {
        const imageSize = isLargeScreen ? 500 : 300; // Adjust sizes based on screen size

        if (selected === 'Man') {
            return menImages.map((img, index) => (
                <div
                    key={index}
                    className="p-2 flex justify-center items-center"
                >
                    <Image
                        src={img}
                        alt={`Man ${index + 1}`}
                        width={imageSize}
                        height={imageSize}
                        className="bg-white rounded-md max-w-full h-auto"
                    />
                </div>
            ));
        } else if (selected === 'Woman') {
            return womenImages.map((img, index) => (
                <div
                    key={index}
                    className="p-2 flex justify-center items-center"
                >
                    <Image
                        src={img}
                        alt={`Woman ${index + 1}`}
                        width={imageSize}
                        height={imageSize}
                        className="bg-white rounded-md max-w-full h-auto"
                    />
                </div>
            ));
        } else if (selected === 'Both') {
            return (
                <>
                    {menImages.map((img, index) => (
                        <div
                            key={`man-${index}`}
                            className="p-2 flex justify-center items-center"
                        >
                            <Image
                                src={img}
                                alt={`Man ${index + 1}`}
                                width={imageSize}
                                height={imageSize}
                                className="bg-white rounded-md shadow-md max-w-full h-auto"
                            />
                        </div>
                    ))}
                    {womenImages.map((img, index) => (
                        <div
                            key={`woman-${index}`}
                            className="p-2 flex justify-center items-center"
                        >
                            <Image
                                src={img}
                                alt={`Woman ${index + 1}`}
                                width={imageSize}
                                height={imageSize}
                                className="bg-white rounded-md shadow-md max-w-full h-auto"
                            />
                        </div>
                    ))}
                </>
            );
        }
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2">
            {renderImages()}
        </div>
    );
};

export default Products;
