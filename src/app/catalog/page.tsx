'use client';
import Filter from '@/components/products/Filter';
import Nav from '@/components/products/Nav';
import Products from '@/components/products/Products';
import { useEffect, useState } from 'react';

const Catalog = () => {
    const [selected, setSelected] = useState<'Woman' | 'Man' | 'Both'>('Both');

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    return (
        <div>
            <Nav />
            <div className="w-full flex justify-center mt-8">
                <Filter selected={selected} setSelected={setSelected} />
            </div>
            <Products selected={selected} />
        </div>
    );
};

export default Catalog;
