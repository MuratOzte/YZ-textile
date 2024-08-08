import CatalogButton from './CatalogButton';

const Nav = () => {
    return (
        <nav className="h-16 sticky top-0 flex justify-between items-center px-14 bg-gradient-to-b bg-white shadow-md z-50">
            <div className="flex gap-2 text-3xl cursor-pointer">
                <span className="font-bold">YZ</span>
                <span>Textile</span>
            </div>
            <ul className="flex gap-8 font-semibold text-gray-900 items-center justify-center">
                <li className="cursor-pointer">
                    <a href="#about">About</a>
                </li>
                <li className="cursor-pointer">
                    <a href="#services">Services & Processes</a>
                </li>
                <li className="cursor-pointer">
                    <a href="#customers">Customers</a>
                </li>
                <li className="cursor-pointer">
                    <a href="#sustainability">Sustainability</a>
                </li>
                <li className="cursor-pointer">
                    <a href="#contact">Contact</a>
                </li>
                <CatalogButton />
            </ul>
        </nav>
    );
};

export default Nav;
