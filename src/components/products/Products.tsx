import Image from 'next/image';

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

    const renderImages = () => {
        if (selected === 'Man') {
            return menImages.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    alt={`Man ${index + 1}`}
                    width={500}
                    height={500}
                />
            ));
        } else if (selected === 'Woman') {
            return womenImages.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    alt={`Woman ${index + 1}`}
                    width={500}
                    height={500}
                />
            ));
        } else if (selected === 'Both') {
            return (
                <>
                    {menImages.map((img, index) => (
                        <Image
                            key={`man-${index}`}
                            src={img}
                            alt={`Man ${index + 1}`}
                            width={500}
                            height={500}
                        />
                    ))}
                    {womenImages.map((img, index) => (
                        <Image
                            key={`woman-${index}`}
                            src={img}
                            alt={`Woman ${index + 1}`}
                            width={500}
                            height={500}
                        />
                    ))}
                </>
            );
        }
    };

    return <div className="grid grid-cols-3 gap-4">{renderImages()}</div>;
};

export default Products;
