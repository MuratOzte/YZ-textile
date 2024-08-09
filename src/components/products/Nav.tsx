import { useEffect, useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down and beyond 100px, hide the nav
            setIsVisible(false);
        } else {
            // Scrolling up, show the nav
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`flex justify-center h-24 sticky top-0 items-center px-14 bg-gradient-to-b bg-white shadow-md z-50 select-none transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <Link href="/">
                <div className="flex gap-2 text-5xl cursor-pointer">
                    <span className="font-bold">YZ</span>
                    <span>Textile</span>
                </div>
            </Link>
        </nav>
    );
};

export default Nav;
