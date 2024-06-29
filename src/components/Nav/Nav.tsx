const Nav = () => {
    return (
        <nav className="h-16 sticky flex justify-between items-center mx-8 cursor-pointer bg-gradient-to-b from-white to-transparent">
            <div className="flex gap-2 text-3xl">
                <span className="font-bold">YZ</span>
                <span>Textile</span>
            </div>
            <ul className="flex gap-8 font-semibold text-gray-900">
                <li>About</li>
                <li>Services & Processes</li>
                <li>Customers</li>
                <li>Sustainability</li>
                <li>Contact </li>
            </ul>
        </nav>
    );
};

export default Nav;
