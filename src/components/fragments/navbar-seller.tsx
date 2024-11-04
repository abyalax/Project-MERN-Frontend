import { Link, useNavigate } from "react-router-dom";
import { image, svg } from "../../assets";
import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { GetStoresByID } from "../../services/stores";
import { token } from "../../utils/constant";

interface NavProps {
    classname?: string
}

const NavbarSeller = ({ classname }: NavProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dataUser = useSelector((state: RootState) => state.data)
    const [nameStore, setNameStore] = useState("")

    const logout = async () => {
        const response = await fetch('http://localhost:4000/api/auth/logout', {
            method: "post",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
        const result = await response.json();
        if (result.status) {
            alert('Logged out successfully')
            localStorage.removeItem('persist:root')
            navigate('/auth/login')
        } else {
            alert('Something went wrong')
        }
    }

    const getDetailStore = async () => {
        if (dataUser.stores[0]) {
            await GetStoresByID(dataUser.stores[0]).then((res) => {
                if (res.statusCode === 200) {
                    console.log("Detail Store at navbar", res.data);
                    setNameStore(res.data.store)
                }
            })
        }
    }

    useEffect(() => {
        getDetailStore()
        return () => { }
    }, [])

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
            <nav className="pt-4 pb-2 px-6 min-w-screen mx-0 border-b-2 border-slate-100">
                <div className="flex gap-2 min-w-ful">

                    <div className="grid grid-cols-2 gap-2 items-center">
                        <h1 className="text-3xl text-green-600 text-center font-semibold">Tokopedia</h1>
                        <p className="text-2xl">Seller</p>
                    </div>

                    <form className="max-w-4xl grid gap-1">
                        <div className="md:w-[500px] lg:w-[850px]">
                            <input type="text" placeholder="Cari di Tokopedia" className="border border-gray-400 w-full p-2 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                        </div>

                    </form>

                    <div className="flex items-center gap-1">
                        <div onMouseOver={() => document.getElementById('notif')?.classList.remove('hidden')}
                            onMouseLeave={() => document.getElementById('notif')?.classList.add('hidden')}
                            className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 cursor-pointer">
                            <img src={svg.notification} className="h-6 w-6" />
                            <Dropdown ID="notif" custom="w-[290px] top-10 p-1 -right-[130px] ">
                                <div className="flex justify-between font-bold border-b-2 border-slate-200 p-3">
                                    <h2 className="text-lg">Notifikasi</h2>
                                    <Link to={"#"} className="text-sm text-green-500">
                                        <img src={svg.settings} className="h-6 w-6" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2 justify-center items-center">
                                    <button className="col-span-1 bg-transparent font-semibold py-1.5 border-b-4 border-t-2 border-b-green-600 text-green-600">Transaksi</button>
                                    <button className="col-span-1 bg-transparent font-semibold py-1.5 border-b-4 border-t-2 border-slate-200 ">Update</button>
                                </div>
                                <div className="flex justify-between px-2 py-1">
                                    <h2 className="font-bold">Pembelian</h2>
                                    <Link to={"#"} className="text-sm text-green-500 font-semibold">Lihat Semua</Link>
                                </div>
                                <div className="flex justify-between px-2 py-1">
                                    <h2 className="font-bold">Penjualan</h2>
                                    <Link to={"#"} className="text-sm text-green-500 font-semibold">Lihat Semua</Link>
                                </div>
                                <div className="flex flex-col justify-center gap-2 px-2 py-1">
                                    <h2 className="font-bold text-start">Untuk Kamu</h2>
                                    <img src={image.notifImg} className="w-40 mx-auto" />
                                    <h2 className="font-bold text-center">Belum ada Notifikasi</h2>
                                    <p className="text-sm text-center text-slate-500">Notifikasi terkait transaksi kamu bakal muncul di sini</p>
                                </div>
                            </Dropdown>
                        </div>

                    </div>

                    {dataUser.isLogin ? (
                        <div className="col-span-2 flex gap-2 justify-center">
                            <div onMouseOver={() => document.getElementById('store')?.classList.remove('hidden')}
                                onMouseLeave={() => document.getElementById('store')?.classList.add('hidden')}
                                className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center">
                                <img src={image.store} className="h-8 w-8 rounded-full" />
                                {nameStore ? nameStore.split(" ")[0] : ("Toko")}
                                <Dropdown ID="store" custom="w-[290px] top-12 p-5">
                                    <p className="font-semibold text-slate-500 text-sm text-center">{nameStore}</p>
                                    <p className="font-semibold text-slate-500 text-sm text-center">Ada Masalah ? <Link to={"#"} className="text-green-500">Hubungi Kami</Link></p>
                                </Dropdown>
                            </div>

                            <div onMouseOver={() => document.getElementById('profile')?.classList.remove('hidden')}
                                onMouseLeave={() => document.getElementById('profile')?.classList.add('hidden')}
                                className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center"
                                onClick={() => setIsOpen(!isOpen)}>
                                <img src={image.profile} className="h-8 w-8 rounded-full" />
                                {dataUser.name.split(' ')[0]}
                                <Dropdown ID="profile" custom="w-[400px] top-10 px-0 right-0 ">
                                    <div className="flex items-center gap-2 w-[90%] p-3 mx-auto rounded-lg shadow-xl">
                                        <img src={image.profile} className="w-10 h-10 rounded-full" />
                                        <p className="text-sm font-semibold">{dataUser.name}</p>
                                    </div>
                                    <div className="grid grid-cols-5 py-4">
                                        <div className="col-span-3 text-start border border-slate-200 p-6">
                                            <div className="flex justify-between items-center">
                                                <h2 className="text-lg italic text-[#00AA5B] font-sans font-bold">PLUS</h2>
                                                <Link to={"#"} className="text-green-500 text-end font-semibold text-sm">Langganan</Link>
                                            </div>
                                            <p className="font-medium text-sm">Nikmatin Bebas Ongkir tanpa batas!</p>
                                            <p className="text-[0.7rem] font-semibold">Min Belanja Rp.0 bebas biaya aplikasi</p>
                                        </div>
                                        <div className="col-span-2 pt-6 px-4 border border-slate-200">
                                            <div className="flex flex-col  gap-2 text-sm">
                                                <Link to={"#"} className="text-start">Pembelian</Link>
                                                <Link to={"#"} className="text-start">Wishlist</Link>
                                                <Link to={"#"} className="text-start">Toko Favorit</Link>
                                                <Link to={"#"} className="text-start">Pengaturan</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                            {isOpen && (
                                <button className="bg-red-300 z-10 absolute top-24 right-20 text-red-500 text-sm rounded-full py-2 px-4" onClick={logout}>Logout</button>
                            )}
                        </div>
                    ) : (
                        <div className="col-span-2 flex gap-7 justify-center">
                            <button onClick={() => navigate("/auth/login")} className="bg-transparent text-green-600 border border-green-600  rounded-lg h-[80%] px-5 font-semibold text-sm flex gap-2 justify-center items-center">
                                <Link to={"/auth/login"}>Masuk</Link>
                            </button>

                            <button onClick={() => navigate("/auth/send-email")} className="bg-green-600 text-white  rounded-lg h-[80%] px-5 font-semibold text-sm flex gap-2 justify-center items-center">
                                <Link to={"/auth/send-email"}>Daftar</Link>
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </nav>
    )
};

export default NavbarSeller;