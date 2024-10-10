import { useSelector } from "react-redux";
import Navbar from "../../../components/fragments/navbar";
import { RootState } from "../../../redux/store";
import { Cart } from "../../../types/products";
import { DeleteCart, GetCarts } from "../../../services/carts";
import { useContext, useEffect, useState } from "react";
import { formatPrice } from "../../../utils";
import { svg } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { ToasterContext } from "../../../context/toaster-context";

interface GroupedCarts {
    [nameStore: string]: Cart[];
}

const CartPage = () => {
    const navigate = useNavigate();
    const cartsState = useSelector((state: RootState) => state.user.data.carts)
    const [carts, setCarts] = useState<Cart[]>(cartsState);
    const { setToaster } = useContext(ToasterContext);

    const getDetail = async () => {
        const response = await GetCarts();
        if (response.statusCode === 403) {
            navigate('/auth/login');
            return;
        }
        if (response.statusCode === 200) {
            console.log(response);
            setCarts(response.data);
            if (response.data.length === 0) {
                setToaster({
                    variant: "warning",
                    message: "Cart is empty, lets go shopping"
                })
            }
        } else {
            alert('something wrong');
        }
    };

    useEffect(() => {
        getDetail();
    }, []);  // Panggil hanya sekali saat pertama kali render

    useEffect(() => {
        setCarts(cartsState);  // Sinkronisasi state lokal dengan Redux
    }, [cartsState]);

    const groupedCarts: GroupedCarts = carts.reduce((acc, item) => {
        if (!acc[item.nameStore]) {
            acc[item.nameStore] = [];
        }
        acc[item.nameStore].push(item);
        return acc;
    }, {} as GroupedCarts);

    const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleDeleteCart = async (productId: string) => {
        const response = await DeleteCart(productId);
        if (response.statusCode === 200) {
            setCarts((prevCarts) => prevCarts.filter(cart => cart.productId !== productId));
        }
        console.log(response);
    };

    return (
        <>
            <Navbar classname="fixed z-10 bg-white" />
            <section className="px-48 bg-slate-200 min-h-screen pt-40 pb-20">
                <h2 className="text-2xl my-4 font-bold">Keranjang</h2>
                <div className="flex gap-3 mb-40">
                    <div className="flex flex-col gap-2">
                        {/* Pilih Semua & Hapus */}
                        <div className="min-w-[50vw] bg-white rounded-t-2xl rounded-b-md px-6 py-4 flex justify-between">
                            <div className="h-full pl-2 pr-6 flex gap-6">
                                <input type="checkbox" className="w-5 h-5" />
                                <p className="text-lg font-bold">Pilih Semua ({carts.length})</p>
                            </div>
                            <button className="text-green-600 font-bold text-base">Hapus</button>
                        </div>

                        {/* Tampilkan item berdasarkan grup store */}
                        <div className="min-w-[50vw] bg-white rounded-t-md rounded-b-2xl px-6 py-4 flex flex-col gap-4">
                            {Object.keys(groupedCarts).map((storeName) => (
                                <div key={storeName}>
                                    <div className="flex gap-1">
                                        <div className="pl-2 pr-6 h-full" >
                                            <input type="checkbox" className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold">{storeName}</h3>
                                    </div>
                                    {groupedCarts[storeName].map((item) => (
                                        <div key={item.productId} className="flex flex-row border-b border-slate-200 my-4 py-2">
                                            <div className="h-full pl-2 pr-6">
                                                <input type="checkbox" className="w-5 h-5" />
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <div className="flex gap-2">
                                                    {item.image && (<img src={item.image.secure_url} className="h-[6rem] w-[6rem] rounded-lg mb-3" alt={item.name} />)}
                                                    <div className="flex gap-1">
                                                        <p>{item.name}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-lg text-end font-bold">{formatPrice(item.price)}</p>
                                                    <div className="flex items-center gap-4">
                                                        <img src={svg.note} className="w-5 h-5 cursor-pointer" />
                                                        <img src={svg.love} className="w-5 h-5 cursor-pointer" />
                                                        <img src={svg.trash} onClick={() => handleDeleteCart(item.productId)} className="w-5 h-5 cursor-pointer" />
                                                        <div className="flex items-center border border-slate-400 px-5 py-0.5 rounded-xl gap-6">
                                                            <button className="text-xl text-slate-500">&#8722;</button>
                                                            <p>{item.quantity}</p>
                                                            <button className="text-xl text-green-500">&#43;</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ringkasan Belanja */}
                    <div className="w-full bg-white rounded-2xl px-6 py-4 h-fit">
                        <h2 className="my-2 text-base font-bold">Ringkasan Belanja</h2>
                        <div className="flex justify-between w-full py-2 border-b border-slate-200">
                            <h2>Total</h2>
                            <p className="font-bold text-base">{formatPrice(totalPrice)}</p>
                        </div>
                        <button className="rounded-md w-full py-2 px-4 items-center mt-10 flex justify-between border border-green-700 bg-green-200">
                            Makin Hemat Pakai promo
                            <img src={svg.chevron} />
                        </button>
                        <button className="bg-green-600 text-white font-semibold w-full py-2 rounded-lg mt-4">Beli ({carts.length})</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartPage;
