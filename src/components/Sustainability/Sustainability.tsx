import Image from 'next/image';
import Sustaibability from '@/assets/sustainability/sustainability.jpeg';

const Sustainability = () => {
    return (
        <div className="flex flex-col md:flex-row mx-4 md:mx-16 justify-center mt-16 items-center gap-12">
            <div className="w-full md:w-1/3">
                <div className="space-y-8 md:space-y-12 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 text-center">
                        Sustainability
                    </h2>
                    <p className="text-xl leading-relaxed text-gray-600 text-center">
                        Sustainability is at the core of our journey forward. We
                        conscientiously evaluate our actions for their impact on
                        production, communities, and the environment, aiming to
                        enhance and protect each aspect. Aligned with the United
                        Nations Sustainable Development Goals, we actively
                        support local and global initiatives. Our goal is clear:
                        to create comprehensive value for all stakeholders,
                        promoting a sustainable future that benefits everyone.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-auto shadow-xl">
                <Image
                    alt="sustain"
                    src={Sustaibability}
                    width={316}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Sustainability;
