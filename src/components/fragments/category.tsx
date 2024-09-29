import { useEffect, useState } from "react";
import { Product } from "../../utils/type";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./carousel";
import { svg, image } from "../../assets";

const Category = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const [hide, setHide] = useState(true);
    const [indexC, setIndexC] = useState(0);

    const [data, setData] = useState<Product[]>([]);
    const location = useLocation()
    const pathname = location.pathname

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])


    const routes = [
        {
            href: '/user/settings',
            label: "Pulsa",
            active: pathname === '/user/settings'
        },
        {
            href: '/user/settings/address',
            label: "Paket Data",
            active: pathname === '/user/settings/address',
        },
        {
            href: '/user/settings/payment',
            label: "Flight",
            active: pathname === '/user/settings/payment',
        },
        {
            href: '/user/settings/bank',
            label: "Listrik PLN",
            active: pathname === '/user/settings/bank',
        },
    ]

    const category = [
        {
            path: "/",
            text: "Handphone & Tablet",
            icon: <img src={svg.phone} width={20} height={20} />
        },
        {
            path: "/",
            text: "Top Up & Tagihan",
            icon: <img src={image.invoice} width={25} height={25} />
        },
        {
            path: "/",
            text: "Elektronik",
            icon: <img src={svg.phone} width={20} height={20} />
        },
        {
            path: "/",
            text: "Perawatan Hewan",
            icon: <img src={svg.phone} width={20} height={20} />
        },
        {
            path: "/",
            text: "Travel & Entertainment",
            icon: <img src={svg.phone} width={20} height={20} />
        },
        {
            path: "/",
            text: "Keuangan",
            icon: <img src={svg.phone} width={20} height={20} />
        },
        {
            path: "/",
            text: "Komputer & Laptop",
            icon: <img src={svg.phone} width={20} height={20} />
        },
    ]

    return (
        <main className="px-40">
            <Carousel />
            <div className="grid grid-cols-2 max-h-fit mb-20 border-2 border-slate-200 rounded-2xl p-2 shadow-sm">

                <div className="cols-span-1">
                    <div className="relative w-full p-2 rounded-2xl overflow-hidden" onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)}>
                        <h2 className="text-xl font-bold">Kategori Pilihan</h2>
                        <div className="flex flex-nowrap overflow-hidden">
                            <div style={{
                                transform: `translateX(-${currentIndex * (100 / data.length)}%)`,
                                transition: 'transform 0.5s ease-in-out',
                            }} className="relative py-6 flex">

                                {data.map((item: Product, index: number) => (
                                    <div key={index} className="w-full px-2 flex items-center justify-center">
                                        {/* Konten Item */}
                                        <div className="h-32 w-32 border border-slate-200 rounded-lg flex justify-center items-center flex-col">
                                            <img src={item.image} className="h-14 w-14" />
                                            <p className=" text-wrap font-bold">{item.title.length > 10 ? item.title.substring(0, 10) + '...' : item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Tombol Navigasi Sebelumnya */}
                        <button
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-600 ${visible ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 4 + data.length) % data.length)}
                            style={{ pointerEvents: visible ? 'auto' : 'none' }}
                        >
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
                                <svg className="text-slate-500 rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </button>

                        {/* Tombol Navigasi Berikutnya */}
                        <button
                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-600 ${visible ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 4) % data.length)}
                            style={{ pointerEvents: visible ? 'auto' : 'none' }}
                        >
                            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
                                <svg className="text-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="cols-span-1">
                    <h2 className="text-xl font-bold">Top Up & Tagihan <Link to="" className="text-green-600 text-sm">Lihat Semua</Link></h2>
                    <div className=" px-4 py-8 ">

                        <div className="container mx-auto p-4 border-2 border-slate-200 rounded-lg">
                            <div className="overflow-x-auto whitespace-nowrap border-b-2 border-slate-200" style={{ scrollbarWidth: "none" }}>
                                <div className="grid grid-flow-col auto-cols-[minmax(110px,1fr)] gap-4 font-bold text-slate-500 h-10">
                                    {routes.map((route) => (
                                        <Link to={route.href} key={route.label} className={`text-center inline-grid text-nowrap h-full ${route.active ? "text-[#00AA5B] border-b-[3px] border-[#00AA5B] font-bold" : ""}`}>{route.label}</Link>
                                    ))}
                                    <button className="flex justify-start">
                                        <img src={svg.detail} className="h-5 w-5 cursor-pointer" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex px-2 py-2">
                                <form className="">
                                    <label htmlFor="phone" className="text-sm text-slate-500 font-medium">Nomor Telepon</label>
                                    <input type="number" name="phone" placeholder="Masukkan Nomor" className="border border-gray-400 appearance-none w-[90%] p-1 placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 rounded" />
                                </form>

                                <form className="flex">
                                    <div className="mr-4">
                                        <label htmlFor="phone" className="text-sm text-slate-500 font-medium">Nominal</label>
                                        <input type="number" name="phone" placeholder="Masukkan Nomor" className="border border-gray-400 appearance-none w-full p-1 placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 rounded" />
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <button className=" bg-slate-300 text-slate-500 px-4 h-10 rounded-xl font-semibold text-sm">Beli</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 mb-2 relative px-2 h-12" onMouseOver={() => setHide(false)} onMouseOut={() => setHide(true)}>
                    <div className="overflow-x-auto whitespace-nowrap " style={{ scrollbarWidth: "none" }}>
                        <div className="flex gap-8 items-center" style={{
                            transform: `translateX(-${indexC * (100 / category.length)}%)`,
                            transition: 'transform 0.5s ease-in-out',
                        }}>
                            <button className="flex items-center min-w-fit gap-1 border-2 border-slate-200 rounded-full py-2 px-2">
                                <img src={svg.all} />
                                <Link to="" className={`text-center inline-grid text-nowrap h-full`}>Category</Link>
                            </button>

                            {category.map((item, index) => (
                                <button key={index} className="flex items-center min-w-fit gap-1 border-2 border-slate-200 rounded-full py-1.5 px-2">
                                    {item.icon}
                                    <Link to={item.path} className={`text-center inline-grid text-nowrap h-full`}>{item.text}</Link>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tombol Navigasi Sebelumnya */}
                    <button
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-600 ${hide ? 'opacity-0' : 'opacity-100'}`}
                        onClick={() => indexC === 0 ? null : setIndexC((prevIndex) => (prevIndex - 2))}
                        style={{ pointerEvents: hide ? 'none' : 'auto' }}
                    >
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
                            <svg className="text-slate-500 rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </button>

                    {/* Tombol Navigasi Berikutnya */}
                    <button
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-600 ${hide ? 'opacity-0' : 'opacity-100'}`}
                        onClick={() => indexC === category.length - 1 ? null : setIndexC((prevIndex) => (prevIndex + 2))}
                        style={{ pointerEvents: hide ? 'none' : 'auto' }}
                    >
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow">
                            <svg className="text-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </button>

                </div>

            </div>
        </main>
    )
};

export default Category;