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
        <div className="w-full h-screen">
            <WorldMap
                type="marker"
                color="black"
                size="xxl"
                data={data}
                backgroundColor="white"
                tooltipBgColor="black"
                tooltipTextColor="white"
                borderColor="gray"
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
