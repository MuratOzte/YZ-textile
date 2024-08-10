'use client';
import { useEffect, useState } from 'react';
import WorldMap from 'react-svg-worldmap';

const data = [
    { country: 'DE', value: 1 }, // Germany
    { country: 'GB', value: 1 }, // United Kingdom (England)
    { country: 'US', value: 1 }, // United States
    { country: 'CA', value: 1 }, // Canada
    { country: 'FR', value: 1 }, // France
    { country: 'IT', value: 1 }, // Italy
    { country: 'CZ', value: 1 }, // Czech Republic
    { country: 'HR', value: 1 }, // Croatia
];

const countryNames: { [key: string]: string } = {
    DE: 'Germany',
    GB: 'United Kingdom',
    US: 'United States',
    CA: 'Canada',
    FR: 'France',
    IT: 'Italy',
    CZ: 'Czech Republic',
    HR: 'Croatia',
};

export default function MapChart() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.matchMedia('(min-width: 1024px)').matches);
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] overflow-hidden pl-0 lg:pl-8 rounded-tr-md rounded-br-md mt-1 lg:mt-20 border-gray-400 border-2 lg:border-l-0">
            <WorldMap
                color="#1f2937"
                size={isLargeScreen ? 1000 : 600} // Adjust size based on screen width
                data={data}
                backgroundColor="white"
                tooltipBgColor="black"
                tooltipTextColor="white"
                borderColor="black"
                tooltipTextFunction={(context) => {
                    if (countryNames[context.countryCode]) {
                        return countryNames[context.countryCode];
                    }
                    return '';
                }}
            />
        </div>
    );
}
