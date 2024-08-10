import CatalogButton from './CatalogButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import uiSlice from '@/store/slices/uiSlice';

const Nav = () => {
    const ui = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    const toggleNav = () => {
        dispatch(uiSlice.actions.toggleNav(true));
    };

    return (
        <nav className="h-16 sticky top-0 flex justify-evenly w-screen items-center md:px-14 bg-gradient-to-b bg-white shadow-md z-50 md:mr-0 px-4">
            <div className="flex gap-2 text-2xl md:text-3xl cursor-pointer">
                <span className="font-bold">YZ</span>
                <span>Textile</span>
            </div>
            <div
                className="tham tham-e-spin tham-w-6 duration-200 md:hidden flex mx-4"
                onClick={(e) => {
                    e.currentTarget.classList.toggle('tham-active');
                }}
            >
                <div className="tham-box">
                    <div className="tham-inner" />
                </div>
            </div>
            <ul className="flex gap-8 font-semibold text-gray-900 items-center justify-center">
                <li className="cursor-pointer hidden md:flex">
                    <a href="#about">About</a>
                </li>
                <li
                    className="cursor-pointer hidden md:flex"
                    onClick={toggleNav}
                >
                    <a href="#services">Services & Processes</a>
                </li>
                <li
                    className="cursor-pointer hidden md:flex"
                    onClick={toggleNav}
                >
                    <a href="#customers">Customers</a>
                </li>
                <li
                    className="cursor-pointer hidden md:flex"
                    onClick={toggleNav}
                >
                    <a href="#sustainability">Sustainability</a>
                </li>
                <li
                    className="cursor-pointer hidden md:flex"
                    onClick={toggleNav}
                >
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="w-[160px]">
                <CatalogButton />
            </div>
        </nav>
    );
};

export default Nav;
