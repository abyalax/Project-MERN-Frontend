import { svg, image } from "../../assets";
import { useState } from "react"

const Sidebar = () => {
    const [kotakMasuk, openKotakMasuk] = useState(false);
    const [pembelian, openPembelian] = useState(false);
    const [profile, openProfile] = useState(false);

    const toggleKotakMasuk = () => {
        openKotakMasuk(!kotakMasuk);
    };

    const togglePembelian = () => {
        openPembelian(!pembelian);
    };

    const toggleProfile = () => {
        openProfile(!profile);
    };

    return (
        <div className="w-[25%]">
            <div className="border-2 border-x-[3px] border-slate-200 rounded-lg p-4 w-full">

                <div className="flex items-center border-b-2 gap-3 border-slate-200 rounded-lg pb-4 my-1">
                    <img src={image.profile} alt="profile" className="rounded-full w-12 h-12" />
                    <div className="flex flex-col font-bold gap-2 ">
                        <p className="text-sm">Abya</p>
                        <button className=" flex gap-1 items-center bg-[#00AA5B] text-white text-xs rounded-full p-1 px-2">
                            <img src={svg.secure} />
                            Tambah Nomor HP
                        </button>
                    </div>
                </div>

                <div className="border-2 border-slate-200 p-2 rounded-lg my-4 hover:bg-slate-200 cursor-pointer">
                    <h2 className="text-lg italic text-[#00AA5B] font-sans font-bold">PLUS</h2>
                    <p className="font-medium text-sm">Nikmatin Bebas Ongkir tanpa batas!</p>
                    <p className="text-[0.7rem] font-semibold">Min Belanja Rp.0 bebas biaya aplikasi</p>
                </div>

                <div className="flex justify-between text-sm my-4">
                    <p className="flex gap-2 font-semibold">
                        <img src={image.gopay} width={22} height={22} className="rounded-full" />
                        Gopay
                    </p>
                    <p className="text-[#00AA5B] font-semibold cursor-pointer">Aktifkan</p>
                </div>

                <div className="flex justify-between text-sm my-4">
                    <p className="flex gap-2 font-semibold">
                        <img src={svg.card} width={22} height={22} />
                        Tokopedia Card
                    </p>
                    <p className="text-[#00AA5B] font-semibold cursor-pointer">Daftar Sekarang</p>
                </div>

                <div className="flex justify-between text-sm my-4">
                    <p className="flex gap-2 font-semibold">
                        <img src={image.money} width={22} height={22} />
                        Saldo
                    </p>
                    <p className="font-semibold">Rp.0</p>
                </div>

                <div className="flex gap-2 my-4">
                    <img src={svg.person} width={22} height={22} />
                    <p className="text-sm font-semibold">
                        Member Silver
                    </p>
                </div>

                <div className="border-t-2 border-slate-200 py-3">
                    <div className="flex justify-between text-sm font-semibold">
                        Kotak Masuk
                        <button onClick={toggleKotakMasuk} className={` rounded-full text-lg transition-transform duration-300 ${kotakMasuk ? 'rotate-90' : '-rotate-90'}`}>
                            <img src={svg.arrow} />
                        </button>
                    </div>
                    {kotakMasuk && (
                        <div className="text-sm pl-4 flex flex-col">
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Chat</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Diskusi Produk</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Ulasan</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Pesan Bantuan</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Pesanan Dikomplain</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Update</a>
                        </div>
                    )}
                </div>

                <div className="border-t-2 border-slate-200 py-3">
                    <div className="flex justify-between text-sm font-semibold">
                        Pembelian
                        <button onClick={togglePembelian} className={` rounded-full text-lg transition-transform duration-300 ${pembelian ? 'rotate-90' : '-rotate-90'}`}>
                            <img src={svg.arrow} />
                        </button>
                    </div>
                    {pembelian && (
                        <div className="text-sm pl-4 flex flex-col">
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Menunggu Pembayaran</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Daftar Transaksi</a>
                        </div>
                    )}
                </div>

                <div className="border-t-2 border-slate-200 py-3">
                    <div className="flex justify-between text-sm font-semibold">
                        Profile Saya
                        <button onClick={toggleProfile} className={` rounded-full text-lg transition-transform duration-300 ${profile ? 'rotate-90' : '-rotate-90'}`}>
                            <img src={svg.arrow} />
                        </button>
                    </div>
                    {profile && (
                        <div className="text-sm pl-4 flex flex-col">
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Wishlist</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Toko Favorite</a>
                            <a href="" className="hover:bg-gray-200 rounded-lg inline-flex p-2">Pengaturan</a>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
};

export default Sidebar;