import { Link, useNavigate } from "react-router-dom";
import { image, svg } from "../../assets";
import { useState } from "react";

interface NavProps {
    classname?: string
    data?: {
        email: string
    } | null
}

const Navbar = ({ classname, data }: NavProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const logout = async () => {
        const response = await fetch('http://localhost:4000/api/verify/logout', {
            method: "post",
            credentials: "include",
            headers: {
                // needed so express parser says OK to read
                'Content-Type': 'application/json'
            },
        })
        const result = await response.json();
        if (result.message === 'Logged out successfully') {
            alert('Logged out successfully')
            data = null
        } else {
            alert('Something went wrong')
        }
    }

    return (
        <nav className={classname}>
            <div className="grid grid-cols-2 bg-[#F0F3F7] py-2 text-slate-600 font-semibold">
                <p className="mx-10 text-sm flex gap-2">
                    <img src={svg.phone} />
                    Download Tokopedia App
                </p>
                <div className="flex gap-10 justify-end text-sm px-10 ">
                    <Link to="">Tentang Tokopedia</Link>
                    <Link to="">Mitra Tokopedia</Link>
                    <Link to="">Pusat Edukasi Seller</Link>
                    <Link to="">Promo</Link>
                    <Link to="">Tokopedia Care</Link>
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
                            <Link to="" className="hover:text-green-500 mx-3">Bean bag</Link>
                            <Link to="" className="hover:text-green-500 mx-3">HP Murah</Link>
                            <Link to="" className="hover:text-green-500 mx-3">Keyboard Mechanical</Link>
                            <Link to="" className="hover:text-green-500 mx-3">Meja Komputer</Link>
                            <Link to="" className="hover:text-green-500 mx-3">Lemari Pakaian</Link>
                            <Link to="" className="hover:text-green-500 mx-3">PS2</Link>
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

                        {data ? (
                            <div className="col-span-2 flex gap-7 justify-center">
                                <button className="bg-transparent hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center">
                                    <img src={image.store} className="h-8 w-8 rounded-full" />
                                    Toko
                                </button>

                                <button onClick={() => setIsOpen(!isOpen)} className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center">
                                    <img src={image.profile} className="h-8 w-8 rounded-full" />
                                    {data.email.split("@")[0]}
                                </button>

                                {isOpen && (
                                    <button className="bg-red-300 z-10 absolute top-24 right-20 text-red-500 text-sm rounded-full py-2 px-4" onClick={logout}>Logout</button>
                                )}
                            </div>
                        ) : (
                            <div className="col-span-2 flex gap-7 justify-center">
                                <button onClick={() => navigate("/auth/login")} className="bg-transparent text-green-600 border border-green-600  rounded-lg h-[80%] px-5 font-semibold text-sm flex gap-2 justify-center items-center">
                                    <Link to={"/auth/login"}>Masuk</Link>
                                </button>

                                <button onClick={() => navigate("/auth/register")} className="bg-green-600 text-white  rounded-lg h-[80%] px-5 font-semibold text-sm flex gap-2 justify-center items-center">
                                    <Link to={"/auth/register"}>Daftar</Link>
                                </button>
                            </div>
                        )}

                        <div className="col-span-3 flex-nowrap gap-1 text-nowrap text-end flex justify-end items-center">
                            <img src={svg.geo} className="h-4 w-4" />
                            <p >Dikirim ke</p>
                            <span className="font-semibold">Jakarta Pusat</span>

                        </div>
                    </div>

                </div>
            </nav>
        </nav>
    )
};


export default Navbar;