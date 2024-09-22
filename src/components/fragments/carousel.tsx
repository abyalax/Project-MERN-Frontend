import { useEffect, useState } from "react";
import { banners, svg } from "../../assets";

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const carouselInfiniteScroll = () => {
        if (currentIndex === banners.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            carouselInfiniteScroll();
        }, 3000);
        return () => clearInterval(interval);
    })
    return (
        <div className="w-[90%] mx-auto my-10 bg-black rounded-2xl overflow-hidden">
            <div className="bg-[#f1f1f1] flex flex-nowrap overflow-hidden rounded-2xl ">
                {banners.map((item, index) => (
                    <div key={index} style={{ transform: `translate(-${currentIndex * 100}%)` }} onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)} className="relative h-[20rem] min-w-full w-full flex items-center justify-center ">
                        <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute left-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}>
                            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                                <img src={svg.right} className="w-6 h-6 rotate-180" />
                            </div>
                        </button>
                        <img src={item} className="rounded-2xl" />
                        <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute right-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}>
                            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                                <img src={svg.right} className="w-6 h-6" />
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Carousel;