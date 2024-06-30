'use client';
import About from '@/components/About/About';
import Nav from '@/components/Nav/Nav';
import ImageCarousel from '@/components/Slide/ImageCarousel';

export default function Home() {
    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
                <div className="snap-start h-screen">
                    <Nav />
                    <ImageCarousel />
                </div>
                <div className="snap-start h-screen">
                    <About />
                </div>
            </div>
        </>
    );
}
