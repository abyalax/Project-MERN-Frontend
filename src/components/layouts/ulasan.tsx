import { useState } from "react";
import { ulasanImage } from "../../assets/img/ulasan";
import { svg, image } from "../../assets";


const Ulasan = () => {

    const [media, setMedia] = useState(false)
    const [filterMedia, setFilterMedia] = useState(false)
    const [rating, setRating] = useState(false)
    const [filterRate, setFilterRate] = useState<number[]>([])

    return (
        <div className="grid grid-cols-10 h-96">
            <div className="grid grid-cols-3 col-span-8 justify-end">

                <div className="col-span-1 p-4 pl-20">
                    <h2 className="font-semibold text-lg">ULASAN PEMBELI</h2>
                    <div className="flex gap-2 justify-center items-end mt-6">
                        <img src={svg.star} className="w-6 h-6 my-auto" />
                        <h2 className="text-6xl">5.0</h2>
                        <p className="text-slate-500">/5.0</p>
                    </div>
                    <p className="text-sm font-semibold text-center">100% pembeli merasa puas </p>
                    <div className="flex justify-center mb-6 text-sm font-semibold text-slate-500 gap-2">
                        <p>66 Rating</p>
                        <p>33 Ulasan</p>
                    </div>

                    <div className="w-full border-2 border-slate-200 rounded-lg">
                        <h2 className="m-3 font-bold">FILTER ULASAN</h2>
                        <div className="border-t-2 border-slate-200 p-3">
                            <div className="flex justify-between font-bold">
                                Media
                                <button onClick={() => setMedia(!media)} className={` rounded-full text-lg transition-transform duration-300 ${media ? 'rotate-90' : '-rotate-90'}`}>
                                    <img src={svg.chevron} />
                                </button>
                            </div>
                            {media && (
                                <div className="flex gap-2 mt-4 items-center my-auto">
                                    <input type="checkbox" name="media" className="appearance-none custom-checkbox text-white" checked={filterMedia} onChange={() => setFilterMedia(!filterMedia)} />
                                    <label htmlFor="media" className="text-slate-500 text-sm font-semibold">Dengan Foto dan Video</label>
                                </div>
                            )}
                        </div>
                        <div className="border-t-2 border-slate-200 p-3">
                            <div className="flex justify-between font-bold">
                                Rating
                                <button onClick={() => setRating(!rating)} className={` rounded-full text-lg transition-transform duration-300 ${rating ? 'rotate-90' : '-rotate-90'}`}>
                                    <img src={svg.chevron} />
                                </button>
                            </div>
                            {rating && (
                                <div className="flex flex-col gap-2 mt-4">
                                    {[5, 4, 3, 2, 1].map((rate) => (
                                        <div key={rate} className="flex items-center gap-3 px-4">
                                            <input
                                                type="checkbox"
                                                id={`rating-${rate}`}
                                                name={`rating-${rate}`}
                                                className="appearance-none custom-checkbox text-white"
                                                checked={filterRate?.includes(rate)}
                                                onChange={() => filterRate?.includes(rate) ? setFilterRate(filterRate.filter((r) => r !== rate)) : setFilterRate([...filterRate, rate])} />
                                            <label htmlFor={`rating-${rate}`} className="flex gap-2">
                                                <img src={svg.star} />
                                                {rate}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                <div className="col-span-2 p-4 mb-96">
                    <h2 className="font-semibold text-lg">FOTO & VIDEO PEMBELI</h2>
                    <div className="flex gap-4 px-2 overflow-hidden relative my-3">
                        {ulasanImage.map((image, index) => (
                            <img src={image} key={index} className="w-24 h-24 rounded-lg" />
                        ))}
                        <span className="absolute top-0 right-3 rounded-lg flex justify-center items-center text-lg font-bold bg-black/65 cursor-pointer w-24 h-24 text-white">+9</span>
                    </div>
                    <div className="grid grid-cols-2 mt-8">
                        <div className="">
                            <h2 className="font-semibold text-lg">ULASAN PILIHAN</h2>
                            <p className="text-sm">Menampilkan 10 dari 34 balasan</p>
                        </div>
                        <div className=" flex justify-end items-center ">
                            <p className="font-semibold text-sm px-3">Urutkan</p>
                            <div className="relative">
                                <button className="font-semibold py-2 px-4 w-44 flex justify-between items-center rounded-lg bg-transparent border border-slate-300"
                                    onClick={() => document.getElementById('dropdown')?.classList.toggle('hidden')}>
                                    Terbaru
                                    <img src={svg.chevron} className="rotate-90 transition-transform duration-300 w-4 h-4" />
                                </button>

                                <div id="dropdown" className="z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="py-2 text-sm border border-slate-300 rounded-md">
                                        <li className="px-1 py-0.5 ">
                                            <a href="#" className="block pl-2 py-2 rounded-md font-medium text-base hover:bg-slate-200">Paling Membantu</a>
                                        </li>
                                        <li className="px-1 py-0.5 border-l-[5px] border-green-500">
                                            <a href="#" className="block pl-2 py-2 rounded-md font-medium text-base hover:bg-slate-200">Terbaru</a>
                                        </li>
                                        <li className="px-1 py-0.5">
                                            <a href="#" className="block pl-2 py-2 rounded-md font-medium text-base hover:bg-slate-200">Rating Tertinggi</a>
                                        </li>
                                        <li className="px-1 py-0.5">
                                            <a href="#" className="block pl-2 py-2 rounded-md font-medium text-base hover:bg-slate-200">Rating Terendah</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full my-6">
                        <div className="flex justify-between">
                            <div className="flex flex-col">

                                <div className="flex gap-2 items-center my-2">
                                    <img src={svg.star} className="w-4 h-4" />
                                    <img src={svg.star} className="w-4 h-4" />
                                    <img src={svg.star} className="w-4 h-4" />
                                    <p className="text-sm text-slate-500">Hari ini</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <img src={image.profile} className="w-10 h-10 rounded-full" />
                                    <p className="text-base font-semibold">James</p>
                                </div>

                                <p className="my-2">product original langsung berhasil saat register, pelayanan cepat sangat responsive, pengiriman tepat waktu</p>

                                <img src={ulasanImage[0]} className="w-20 h-20 rounded-lg" />
                            </div>
                            <img src={svg.detail} className="w-6 h-6 mr-2 mt-2" />

                        </div>
                        <div className="flex justify-between items-center my-4">
                            <button className="flex gap-2 items-center">
                                <img src={svg.thumb} className="h-5 w-5" />
                                Membantu
                            </button>
                            <button className="flex gap-2 items-center"
                                onClick={() => document.getElementById('drBalasan')?.classList.toggle('hidden')}>
                                Lihat Balasan
                                <img src={svg.chevron} className="rotate-90 transition-transform duration-300 w-4 h-4" />
                            </button>
                        </div>
                        <div id="drBalasan" className="z-10 w-full hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                            <div className="bg-slate-200 rounded-lg w-full p-5">
                                <div className="flex items-center gap-2">
                                    <img src={image.profile} className="w-10 h-10 rounded-full" />
                                    <p className="text-sm font-semibold">John Doe</p>
                                    <span className="bg-green-200 text-[#00AA5B] text-xs px-2 font-semibold rounded">Penjual</span>
                                    <p className="text-base text-slate-500 font-semibold">3 Hari lalu</p>
                                </div>
                                <p className="mt-2">
                                    Terima kasih telah berbelanja di Griyasis. Bagikan link toko kami https://www.tokopedia.com/griyasis kepada teman-teman Anda dan favoritkan Toko kami untuk terus update mengenai stok dan produk terbaru
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Ulasan;