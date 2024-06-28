import image1 from '@/assets/slide/slide1.jpeg';
import image2 from '@/assets/slide/slide2.jpeg';
import image3 from '@/assets/slide/slide3.jpeg';
import image4 from '@/assets/slide/slide4.jpeg';
import image5 from '@/assets/slide/slide5.jpeg';
import 'flowbite';

const images = [image1, image2, image3, image4, image5];

const ImageCarousel = () => {
    return (
        <div
            id="default-carousel"
            className="relative w-full h-screen"
            data-carousel="slide"
        >
            {/* Carousel wrapper */}
            <div className="relative h-screen overflow-hidden">
                {/* Item 1 */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src={image1.src}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="image1"
                    />
                </div>
                {/* Item 2 */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src={image2.src}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="image2"
                    />
                </div>
                {/* Item 3 */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src={images[2].src}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="image3"
                    />
                </div>
                {/* Item 4 */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src={images[3].src}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="image4"
                    />
                </div>
                {/* Item 5 */}
                <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src={images[4].src}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="image5"
                    />
                </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse bg-gray-700 px-5 py-3 rounded-md">
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 4"
                    data-carousel-slide-to="3"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 5"
                    data-carousel-slide-to="4"
                ></button>
            </div>
        </div>
    );
};

export default ImageCarousel;
