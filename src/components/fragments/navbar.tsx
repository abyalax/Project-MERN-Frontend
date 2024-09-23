import { image, svg } from "../../assets";

const Navbar = () => {
    return (
        <>
            <div className="grid grid-cols-2 bg-[#F0F3F7] py-2 text-slate-600 font-semibold">
                <p className="mx-10 text-sm flex gap-2">
                    <img src={svg.phone} />
                    Download Tokopedia App
                </p>
                <div className="flex gap-10 justify-end text-sm px-10 ">
                    <a href="">Tentang Tokopedia</a>
                    <a href="">Mitra Tokopedia</a>
                    <a href="">Pusat Edukasi Seller</a>
                    <a href="">Promo</a>
                    <a href="">Tokopedia Care</a>
                </div>
            </div>
            <nav className="pt-4 pb-0 px-6 min-w-screen mx-0 border-b-2 border-slate-100">
                <div className="flex justify-between gap-2 min-w-ful">

                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <h1 className=" text-3xl text-green-600 text-center font-semibold">Tokopedia</h1>
                        <button className="bg-transparent hover:bg-slate-200 rounded-lg">Kategori</button>
                    </div>

                    <form className="max-w-3xl grid grid-rows-2 gap-1">
                        <div className="md:w-[500px] lg:w-[750px]">
                            <input type="text" placeholder="Cari di Tokopedia" className="border border-gray-400 w-full p-2 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                        </div>
                        <div className="text-slate-500 font-semibold text-sm flex">
                            <a href="" className="hover:text-green-500 mx-3">Bean bag</a>
                            <a href="" className="hover:text-green-500 mx-3">HP Murah</a>
                            <a href="" className="hover:text-green-500 mx-3">Keyboard Mechanical</a>
                            <a href="" className="hover:text-green-500 mx-3">Meja Komputer</a>
                            <a href="" className="hover:text-green-500 mx-3">Lemari Pakaian</a>
                            <a href="" className="hover:text-green-500 mx-3">PS2</a>
                        </div>
                    </form>

                    <div className="grid grid-cols-3 grid-rows-2 gap-1">
                        <div className="flex items-center gap-1">
                            <div className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 cursor-pointer">
                                <img src={svg.cart} className="h-6 w-6" />
                            </div>
                            <div className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 cursor-pointer">
                                <img src={svg.notification} className="h-6 w-6" />
                            </div>
                            <div className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 cursor-pointer">
                                <img src={svg.mail} className="h-6 w-6" />
                            </div>
                        </div>

                        <button className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center">
                            <img src={image.store} className="h-8 w-8 rounded-full" />
                            Toko
                        </button>

                        <button className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center">
                            <img src={image.profile} className="h-8 w-8 rounded-full" />
                            Abya
                        </button>

                        <p className="col-span-3 flex-nowrap text-nowrap text-end flex justify-end">Dikirim ke Jakarta Pusat</p>
                    </div>

                </div>
            </nav>
        </>
    )
};


export default Navbar;