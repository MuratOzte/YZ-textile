import MapChart from './MapChart';
import MapDesc from './MapDesc';

const Customers = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center mx-4 lg:mx-14 my-10 lg:my-20">
            <MapDesc />
            <MapChart />
        </div>
    );
};

export default Customers;
