import { image, svg } from "../../assets";

const Navbar = () => {
    return (
        <nav className="py-4 px-6 min-w-screen mx-0 flex flex-col gap-3">
            <div className="flex justify-between gap-2 min-w-ful">
                <h1 className="text-3xl text-green-600 text-center font-semibold">Tokopedia</h1>
                <button className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3">Kategori</button>

                <form className="max-w-2xl">
                    <div className="md:w-[500px] lg:w-[700px]">
                        <input type="text" placeholder="Cari di Tokopedia" className="border border-gray-400 w-full p-2 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                    </div>
                </form>

                <div className="flex items-center gap-4">
                    <div className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3">
                        <img src={svg.cart} className="h-6 w-6" />
                    </div>
                    <div className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3">
                        <img src={svg.notification} className="h-6 w-6" />
                    </div>
                    <div className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3">
                        <img src={svg.mail} className="h-6 w-6" />
                    </div>
                </div>

                <button className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center">
                    <img src={image.store} className="h-8 w-8 rounded-full"/>
                    Toko
                </button>
                <button className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center">
                    <img src={image.profile} className="h-8 w-8 rounded-full"/>
                    Abya
                </button>
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-2 text-slate-500 font-semibold text-sm flex justify-end">
                    <a href="" className="hover:text-green-500 mx-3">Bean bag</a>
                    <a href="" className="hover:text-green-500 mx-3">HP Murah</a>
                    <a href="" className="hover:text-green-500 mx-3">Keyboard Mechanical</a>
                    <a href="" className="hover:text-green-500 mx-3">Meja Komputer</a>
                    <a href="" className="hover:text-green-500 mx-3">Lemari Pakaian</a>
                    <a href="" className="hover:text-green-500 mx-3">PS2</a>
                </div>

                <p className="cols-span-1 flex justify-end">Dikirim ke Jakarta Pusat</p>

            </div>

        </nav>
    )
};

export default Navbar;