import { useEffect, useState } from "react";
import { banners } from "../../assets";

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
        <div className="w-full mx-auto my-10 rounded-2xl overflow-hidden">
            <div className=" flex flex-nowrap overflow-hidden rounded-2xl ">
                {banners.map((item, index) => (
                    <div key={index} style={{ transform: `translate(-${currentIndex * 100}%)` }} onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)} className="relative h-[20rem] min-w-full w-full flex items-center justify-center ">
                        <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute left-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}>
                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                <svg className="text-slate-500 rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </button>
                        <img src={item} className="rounded-2xl" />
                        <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute right-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}>
                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                <svg className="text-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Carousel;