const Nav = () => {
    return (
        <nav className="h-16 sticky flex justify-between items-center mx-8  bg-gradient-to-b from-white to-transparent">
            <div className="flex gap-2 text-3xl cursor-pointer">
                <span className="font-bold">YZ</span>
                <span>Textile</span>
            </div>
            <ul className="flex gap-8 font-semibold text-gray-900">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services & Processes</li>
                <li className="cursor-pointer">Customers</li>
                <li className="cursor-pointer">Sustainability</li>
                <li className="cursor-pointer">Contact </li>
            </ul>
        </nav>
    );
};

export default Nav;
