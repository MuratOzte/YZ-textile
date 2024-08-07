import WorldMap from 'react-svg-worldmap';

export default function MapChart() {
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

    return (
        <div className="w-1/2 h-[500px] overflow-hidden pl-30 rounded-tr-md rounded-br-md mt-20 border-gray-400 border-2 border-l-0">
            <WorldMap
                color="#1f2937"
                size={1000}
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
