import Link from 'next/link';

const CatalogButton = () => {
    return (
        <Link
            href="/catalog"
            className="relative inline-flex items-center justify-center py-2 md:py-3 pl-4 pr-8 md:pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded bg-gray-300 group w-2/3 md:w-auto text-sm md:text-base"
        >
            <span className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out transform bg-black scale-x-0 group-hover:scale-x-100 origin-left"></span>
            <span className="relative z-10 transition-colors duration-200 ease-in-out group-hover:text-white">
                Catalog
            </span>
            <span className="absolute right-4 transition-transform duration-200 ease-out transform group-hover:translate-x-2 group-hover:text-white">
                <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                </svg>
            </span>
        </Link>
    );
};

export default CatalogButton;
