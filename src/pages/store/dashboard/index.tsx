import { useEffect, useState } from "react";
import Modal from "../../../components/fragments/modal";
import { image, svg } from "../../../assets";
import { GetStoresByID } from "../../../services/stores";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import NavbarSeller from "../../../components/fragments/navbar-seller";
import SidebarSeller from "../../../components/fragments/sidebar-seller";
import { Link, useNavigate } from "react-router-dom";
import { Stores } from "../../../types/stores";

const DashboardStore = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const userId = useSelector((state: RootState) => state.user.data.stores[0]);
    console.log("userId from state store", userId);
    if (userId === undefined) {
        navigate('/store/create-store')
    }

    const [store, setStore] = useState<Stores>();
    console.log("store from state store", store?.store);

    const getDetail = async (userId: string) => {
        try {
            console.log("Try Fetch with userId :", userId);
            if (userId !== undefined) {
                const response = await GetStoresByID(userId)
                if (response.status === true) {
                    setStore(response.data)
                }
            } else {
                console.error("userId not found");
            }
        } catch (error) {
            console.log(error);
            console.error("Failed fetch Store data", error);
        }
    }
    useEffect(() => {
        getDetail(userId)
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [userId]);

    return (
        <>
            <NavbarSeller classname="fixed bg-white z-10 w-full" />
            <div className="pt-28 relative bg-white flex justify-end items-end">

                <SidebarSeller store={store} />

                <div className="w-5/6 from-[#088580] to-white min-h-screen bg-gradient-to-b h-[50vh] justify-end items-center relative">

                    <div className="flex gap-4 px-4 pt-10 absolute top-0 left-0 right-0">

                        <div className="w-2/3 flex flex-col">
                            <h2 className="text-xl text-black my-0.5 font-semibold">Selamat Datang di Tokopedia</h2>
                            <p className="text-slate-700 font-semibold mt-1 mb-3 text-sm">Ikuti rekomendasi dan misi untuk raih penjualan pertama.</p>
                            <div className="flex gap-4">
                                <div className="w-1/2 h-full">
                                    <div className="bg-white p-4 rounded-lg">
                                        <p>Produk Dilihat</p>
                                        {store?.store ? (
                                            <Link to={`/store/${store.store.replace(' ', '-')}/add-product`} className="link">Tambah Product</Link>
                                        ) : (
                                            <h2>0</h2>
                                        )}
                                        <p>0% dari 30 hari terakhir</p>
                                    </div>
                                </div>
                                <div className="w-1/2 h-full bg-white rounded-lg p-4">
                                    <p>Dalam Keranjang</p>
                                    <h2>0</h2>
                                    <p>0% dari 30 hari terakhir</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3 px-4">
                            <h2 className="text-xl text-black my-0.5 font-semibold">Keperluan untuk jualanmu</h2>
                            <p className="text-slate-700 font-semibold mt-1 mb-3 text-sm">Ikuti rekomendasi dan misi untuk raih penjualan pertama.</p>
                            <div className="bg-white px-4 pt-4 pb-6 rounded-lg flex justify-center items-center gap-2">
                                <img src={image.book} className="w-14 h-12 shadow-lg rounded-full" />
                                <div className="flex flex-col">
                                    <h2 className="text-gray-900 font-semibold">Sudah Siap Berjualan ?</h2>
                                    <p className="font-semibold text-sm text-slate-600">{"Baca panduan memulai usaha di\n Tokopedia yuk"}</p>
                                </div>
                                <img src={svg.chevron} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {showModal && store && (
                <>
                    <Modal>
                        <div className="max-w-96 p-2">
                            <img src={image.haloStore} className="w-80 mx-auto" />
                            <h1 className="text-xl font-bold text-center mt-6">{`Halo ${store.store.split(' ')[0]}, selamat datang di \n Tokopedia Seller`}</h1>
                            <p className="text-center text-slate-600 font-semibold my-2">{"Kelola toko jadi lebih mudah dengan tampilan baru.\n Pelajari dulu, yuk."}</p>
                            <button onClick={() => setShowModal(false)} className="bg-green-600 py-2 w-full rounded-lg my-2 text-white text-base font-semibold">Pelajari Tampilan Baru</button>
                        </div>
                    </Modal>
                    <footer className="absolute bottom-0 left-0 right-0 w-screen bg-white z-30 px-8 py-4 flex justify-between">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-lg flex gap-2">Izinkan Penyimpanan Cookie
                                <img src={svg.cookie} />
                            </h2>
                            <p className="text-slate-500 font-semibold">Terus dapatkan pengalaman terbaik dengan izinkan penyimpanan cookie diperangkat ini</p>
                        </div>
                        <div className="flex gap-8 justify-center items-center">
                            <button className="bg-transparent font-bold text-slate-600">Atur Cookie</button>
                            <button className="bg-green-600 py-2 px-4 h-fit rounded-lg text-white text-base font-semibold">Izinkan Semua</button>
                        </div>
                    </footer>
                </>
            )}

        </>
    );
};

export default DashboardStore;
