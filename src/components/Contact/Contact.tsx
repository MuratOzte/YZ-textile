import { CiMail } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-16 mb-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                    Contact
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                    You can contact our 24/7 customer service to get prices and
                    information.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center">
                <div className="flex items-center mb-4 sm:mb-0 space-x-3">
                    <CiMail className="text-3xl text-gray-800" />
                    <a
                        href="mailto:email@example.com"
                        className="text-lg text-gray-800 hover:text-gray-600"
                    >
                        email@example.com
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <FaWhatsapp className="text-3xl text-gray-800" />
                    <a
                        href="https://wa.me/905313749574?text=Hello, I want to get information about clothing production"
                        className="text-lg text-gray-800 hover:text-gray-600"
                    >
                        +90 531 374 95 74
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
