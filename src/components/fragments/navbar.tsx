import { Link, useNavigate } from "react-router-dom";
import { image, svg } from "../../assets";
import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GetStoresByID } from "../../services/stores";

interface NavProps {
    classname?: string
}

const Navbar = ({ classname }: NavProps) => {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dataUser = useSelector((state: RootState) => state.data)
    const [nameStore, setNameStore] = useState("")
    
    useEffect(() => {
        const getDetailStore = async () => {
            if (dataUser.stores[0]) {
                await GetStoresByID(dataUser.stores[0]).then((res) => {
                    if (res.statusCode === 200) {
                        setNameStore(res.data.store)
                    } else {
                        console.log(res);
                    }
                })
            }
        }
        getDetailStore()
    }, [dataUser.stores])

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
                        <h1 className="text-3xl text-green-600 text-center font-semibold">Tokopedia</h1>
                        <button className="bg-transparent hover:bg-slate-200 rounded-lg">Kategori</button>
                    </div>

                    <form className="max-w-3xl grid grid-rows-2 gap-1">
                        <div className="md:w-[500px] lg:w-[750px]">
                            <input type="text" placeholder="Cari di Tokopedia" className="border border-gray-400 w-full p-2 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                        </div>
                        <div className="text-slate-500 h-8 mb-0 font-semibold text-sm flex">
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

                            <div onMouseOver={() => document.getElementById('cart')?.classList.remove('hidden')}
                                onMouseLeave={() => document.getElementById('cart')?.classList.add('hidden')}
                                className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 cursor-pointer">
                                <img src={svg.cart} className="h-6 w-6" />
                                <Dropdown ID="cart" custom="w-[480px] top-10 px-0 -right-[220px]">
                                    <div className="flex justify-between font-bold border-b-2 border-slate-200 p-5">
                                        <h2 className="text-lg">Keranjang</h2>
                                        <Link to={"#"} className="text-sm text-green-500">Lihat</Link>
                                    </div>
                                    <div className="p-5 px-auto">
                                        <img src={image.cartImage} className="mx-auto w-28 h-28" />
                                        <h2 className="text-center text-lg font-bold">Wah Keranjang Belanjamu Kosong</h2>
                                        <p className="text-center text-sm text-slate-500">Yuk isi dengan barang-barang impianmu</p>
                                        <button className="bg-green-500 text-white py-1.5 px-6 w-full rounded-lg mt-5">Belanja Sekarang</button>
                                    </div>
                                </Dropdown>
                            </div>

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

                            <div onMouseOver={() => document.getElementById('mail')?.classList.remove('hidden')}
                                onMouseLeave={() => document.getElementById('mail')?.classList.add('hidden')}
                                className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 cursor-pointer">
                                <img src={svg.mail} className="h-6 w-6" />
                                <Dropdown ID="mail" custom="w-[200px] top-10 -right-[80px] p-5">
                                    <div className="flex flex-col gap-2 text-sm">
                                        <Link to={"#"}>Chat</Link>
                                        <Link to={"#"}>Diskusi</Link>
                                        <Link to={"#"}>Ulasan</Link>
                                        <Link to={"#"}>Pesanan Bantuan</Link>
                                        <Link to={"#"}>Pesanan Dikomplain</Link>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>

                        {dataUser.isLogin ? (
                            <div className="col-span-2 flex gap-7 justify-center">
                                <div onMouseOver={() => document.getElementById('store')?.classList.remove('hidden')}
                                    onMouseLeave={() => document.getElementById('store')?.classList.add('hidden')}
                                    className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center cursor-pointer">
                                    <img src={image.store} className="h-8 w-8 rounded-full" />
                                    {nameStore ? nameStore.split(" ")[0] : ("Toko")}
                                    {nameStore ? (
                                        <Dropdown ID="store" custom="w-[290px] top-12 p-5">
                                            <p className="font-semibold text-slate-500 text-sm text-center">{nameStore}</p>
                                            <button onClick={() => navigate('/store/home')} className="bg-green-600 text-white font-semibold my-3 mx-[2.8rem] text-sm rounded-lg py-1.5 px-12">Ke Toko</button>
                                            <p className="font-semibold text-slate-500 text-sm text-center">Tokomu Hilang ? <Link to={"#"} className="text-green-500">Pelajari Selengkapnya</Link></p>
                                        </Dropdown>
                                    ) : (
                                        <Dropdown ID="store" custom="w-[290px] top-12 p-5">
                                            <p className="font-semibold text-slate-500 text-sm text-center">Anda Belum Memiliki Toko</p>
                                            <button onClick={() => navigate('/store/create-store')} className="bg-green-600 text-white font-semibold my-3 mx-[1.3rem] text-sm rounded-lg py-1.5 px-12">Buka Toko Gratis</button>
                                            <p className="font-semibold text-slate-500 text-sm text-center">Tokomu Hilang ? <Link to={"#"} className="text-green-500">Pelajari Selengkapnya</Link></p>
                                        </Dropdown>
                                    )}
                                </div>

                                <div onMouseOver={() => document.getElementById('profile')?.classList.remove('hidden')}
                                    onMouseLeave={() => document.getElementById('profile')?.classList.add('hidden')}
                                    className="bg-transparent relative hover:bg-slate-200 rounded-lg py-2 px-3 flex gap-2 justify-center items-center cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    <img src={image.profile} className="h-8 w-8 rounded-full" />
                                    {dataUser.name.split(" ")[0]}
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
                                    <button className="bg-red-300 z-10 absolute top-24 right-20 text-red-500 text-sm rounded-full py-2 px-4" onClick={() => {localStorage.removeItem("token"); localStorage.removeItem("persist:root");navigate("/auth/login")}}>Logout</button>
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

                        <div className="col-span-3 p-0 h-5 my-0 flex-nowrap gap-1 text-nowrap text-end flex justify-end items-center">
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