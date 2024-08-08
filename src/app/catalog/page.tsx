'use client';
import Filter from '@/components/products/Filter';
import Nav from '@/components/products/Nav';
import Products from '@/components/products/Products';
import { useState } from 'react';

const Catalog = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div>
            <Nav />
            <div className="w-full flex justify-center mt-8">
                <Filter />
            </div>
            <Products />
        </div>
    );
};

export default Catalog;
