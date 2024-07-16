import DesingSVG from './icons/Design';
import Manifacturing from './icons/Manifacturing';
import Sampling from './icons/Sampling';

const NewBoxes = () => {
    return (
        <div className="m-8 ml-32 flex justify-evenly">
            <div className="w-3/12 h-[320px] bg-gray-300 rounded-md">
                <div className="flex items-center justify-center pt-8 gap-5 text-xl font-bold uppercase font-sans text-gray-800">
                    <DesingSVG />
                    <h1>Design</h1>
                </div>
                <div className="mt-8 mx-5 ml-8 text-gray-600 text-center text-base">
                    We translate our customers' designs into samples and
                    complete collections. For those needing design assistance,
                    our dedicated team provides expert support.
                </div>
            </div>
            <div className="absolute bg-black w-10 h-4 bottom-[50%]" />
            <div className="w-3/12 h-[320px] bg-gray-200 rounded-md">
                <div className="flex items-center justify-center pt-8 gap-5 text-xl font-bold uppercase font-sans text-gray-800">
                    <Sampling />
                    <h1>Sampling</h1>
                </div>
                <div className="mt-12 mx-5 ml-8 text-gray-600 text-center">
                    We create samples and create collections based on our
                    customers' designs. Also for our customers who require
                    design support, we assist with our design team.
                </div>
            </div>
            <div className="w-3/12 h-[320px] bg-gray-300 rounded-md">
                <div className="flex items-center  justify-center pt-8 text-xl font-bold uppercase font-sans text-gray-800">
                    <div className="pl-2 pr-2 w-14 h-14">
                        <Manifacturing />
                    </div>
                    <h1 className="ml-4 text-center text-base">
                        Fabric Manufacturing <br />
                        and Supply
                    </h1>
                </div>
                <div className="mt-4 mx-5 ml-8 text-gray-600 text-center">
                    With the capability to produce custom fabrics and a vast
                    network of suppliers, we deliver fabrics in desired colors
                    and qualities. Our offerings cater to various players in the
                    textile industry, facilitating fabric sourcing from Turkey
                    even for those not seeking contract sewing services.
                </div>
            </div>
        </div>
    );
};
export default NewBoxes;
