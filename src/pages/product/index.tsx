import Navbar from "../../components/fragments/navbar";
import Ulasan from "../../components/layouts/ulasan";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Cart, Product } from "../../types/products";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { GetProductsByID } from "../../services/products";
import { image, svg } from "../../assets";
import { useAppDispatch } from "../../redux/hooks";
import { AddToCart, RefreshData } from "../../redux/slice/userSlice";
import { formatPrice } from "../../utils";
import { AddToCart as AddToCartServices } from "../../services/carts";
import { ToasterContext } from "../../context/toaster-context";
import ModalCart from "../../components/modal/cart";
import { User } from "../../types/user";

const ProductPage = () => {
    const { nameStore, _id } = useParams()
    const [product, setProduct] = useState<Product>()
    const dataUser = useSelector((state: RootState) => state.data)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { setToaster } = useContext(ToasterContext)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            if (nameStore && _id !== undefined) {
                const response = await GetProductsByID(_id)
                console.log(response)
                setProduct(response.data)
            }
        }
        fetchProduct()
    }, [nameStore, _id])

    const handleScroll = () => {
        const img = document.getElementById('imgProduct')
        if (img === null) return
        img.classList.add('fixed', 'top-44', 'w-80', 'h-80')
        img.classList.remove('w-[90%]', 'static',)
        if (window.scrollY >= 640) {
            img.classList.remove('fixed', 'top-44', 'w-80', 'h-80')
            img.classList.add('w-[90%]', 'static')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleAddToCart = async () => {
        if (dataUser.name === '' || dataUser.email === '' || dataUser.isLogin === false) {
            navigate('/auth/login')
            return
        }
        if (product?._id !== undefined) {
            const dataCard: Cart = {
                productId: product._id,
                quantity: 1,
                price: product.price,
                liked: false,
                image: product.image[0],
                name: product.name,
                nameStore: product.nameStore
            }
            dispatch(AddToCart(dataCard))
            const data:User = {
                name: dataUser.name,
                email: dataUser.email,
                phone: dataUser.phone,
                profileImage: dataUser.profileImage,
                role: dataUser.role,
                address: dataUser.address,
                carts: [...dataUser.carts, dataCard],
                stores: dataUser.stores,
                verifiedEmail: true,
                isLogin: true
            }
            dispatch(RefreshData(data))
            const response = await AddToCartServices(dataCard)
            if (response.statusCode === 200) {
                console.log("Success: ", response);
                setToaster({
                    variant: "success",
                    message: "Product added to cart successfully"
                })
                console.log(openModal);
                setOpenModal(true)
                console.log(openModal);
            } else {
                console.log(response);
            }
            console.log(product);
        }
    }

    return (
        <>
            {openModal && <ModalCart name={product?.name} image={product?.image[0].secure_url ? product?.image[0].secure_url : image.skeleton} setOpen={setOpenModal} />}
            <Navbar classname="sticky bg-white top-0 z-10" />
            <section className="pl-20 pr-28 pt-5 relative">
                <div className="grid grid-cols-10 justify-center relative">

                    <div className="col-span-3 rounded-md px-7 flex items-end pb-3 relative">
                        <img src={product?.image[0].secure_url} id="imgProduct" className="rounded-xl object-cover object-center" />
                    </div>

                    <div className="col-span-5 pl-4" >
                        <h2 className="font-semibold text-lg">{product?.name}</h2>
                        <div className="flex mb-4 gap-3">
                            <p>Terjual <span className="text-slate-500">250+</span></p>
                            <img src={svg.star} />
                            <p>5 <span className="text-slate-500">(98 rating)</span></p>
                            <p>Diskusi <span className="text-slate-24">(5)</span></p>
                        </div>

                        <h2 className="text-3xl font-bold">{formatPrice(product?.price)}</h2>
                        <div className="flex mt-2 justify-start gap-2">
                            <p className="text-xs bg-red-200 my-auto text-red-500 rounded-md px-2 py-1 w-fit font-bold">0%</p>
                            <s className="text-slate-500 items-center">{formatPrice(product?.price)}</s>
                        </div>

                        <hr className="my-4" />

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold">Pilih Varian : <span className="text-slate-500 font-normal text-lg">6 Bulan</span></h2>
                            <div className="flex gap-2 text-slate-500">
                                <button className="px-3 py-2 font-semibold rounded-lg bg-transparent border border-slate-500">1 Tahun</button>
                                <button className="px-3 py-2 font-semibold rounded-lg bg-transparent border border-slate-500">2 Tahun</button>
                                <button className="px-3 py-2 font-semibold rounded-lg bg-green-100 border border-green-500 text-green-500">6 Bulan</button>
                            </div>
                        </div>
                        <hr className="mt-6" />

                        <div className="mt-4 overflow-x-auto items-center whitespace-nowrap border-b-2 border-slate-200" style={{ scrollbarWidth: "none" }}>
                            <div className="grid grid-flow-col auto-cols-[minmax(110px,1fr)] gap-8 items-center font-bold text-slate-500 h-10">

                                <Link to="" className="text-center inline-grid text-nowrap h-full text-[#00AA5B] border-b-[3px] border-[#00AA5B] font-bold">Detail</Link>
                                <Link to="" className="text-center inline-grid text-nowrap h-full">Spesifikasi</Link>
                                <Link to="" className="text-center inline-grid text-nowrap h-full">Info Penting</Link>

                            </div>
                        </div>

                        <div className="px-2 py-2">
                            <h2 className="text-slate-600">Kondisi : <span className="text-black">{product?.condition}</span></h2>
                            <h2 className="text-slate-600">Min Pemesanan : <span className="text-black">{product?.minOrder}</span></h2>
                            <h2 className="text-slate-600">Etalase : <span className="text-green-600 font-bold">{product?.etalase}</span></h2>
                            <p className="text-base mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id unde repellendus nesciunt minus eum nisi eos tempora harum iusto magnam, accusantium illum possimus dolorem quia vitae molestiae. Porro, expedita.
                            </p>
                            <b className="text-green-600 text-sm font-bold">lihat selengkapnya</b>
                        </div>

                        <hr className="my-4" />

                        <div className="flex gap-2">
                            <div className="w-[15%]">
                                image
                            </div>
                            <div className="w-[60%] flex flex-col">
                                <p className="font-bold text-black text-lg">{product?.nameStore}</p>
                                <p className="mb-2">Online 6 Menit lalu</p>
                                <div className="flex items-center text-sm gap-2">
                                    <img src={svg.star} className="w-4 h-4" />
                                    <p>{product?.rate} <span className="text-slate-500">(33,5 rb)</span></p>
                                </div>
                                <div className="flex items-center text-sm gap-2">
                                    <img src={svg.clock} className="w-4 h-4" />
                                    <p>5 jam <span className="text-slate-500">pesanan diproses</span></p>
                                </div>
                            </div>
                            <div className="w-[25%]">
                                <button className="px-8 py-1 text-sm font-semibold rounded-lg bg-transparent border border-green-500 text-green-600">Follow</button>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="flex flex-col">
                            <p className="font-bold text-black text-lg mb-2">Pengiriman</p>
                            <div className="flex items-center gap-2">
                                <img src={svg.geo} className="w-4 h-4" />
                                <p>Dikirim dari <span className="font-semibold">Jakarta Utara</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={svg.truck} className="w-4 h-4" />
                                <p>Ongkir Reguler 8 rb - 10 rb</p>
                            </div>
                        </div>
                        <div className=" flex justify-around">
                            <p className="text-slate-500">Estimasi tiba besok - 29 Sep</p>
                            <Link to="" className="px-8 py-1 text-sm font-semibold text-green-600">Lihat Pilihan Kurir</Link>
                        </div>

                        <hr className="my-4" />

                        <div className="flex flex-col">
                            <p className="font-bold text-black text-lg mb-2">Pengiriman</p>
                            <div className="flex items-center gap-2">
                                <img src={svg.geo} className="w-4 h-4" />
                                <p>Dikirim dari <span className="font-semibold">Jakarta Utara</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={svg.truck} className="w-4 h-4" />
                                <p>Ongkir Reguler 8 rb - 10 rb</p>
                            </div>
                        </div>
                        <div className=" flex justify-around">
                            <p className="text-slate-500">Estimasi tiba besok - 29 Sep</p>
                            <Link to="" className="px-8 py-1 text-sm font-semibold text-green-600">Lihat Pilihan Kurir</Link>
                        </div>

                    </div>

                    {/* CART */}
                    <div className="col-span-2 fixed top-52 right-20 min-w-64 bg-white border-lg">
                        <div className="w-full border-2 border-slate-200 rounded-lg p-3">
                            <h2 className="font-bold text-black text-lg mb-6">Atur Jumlah dan Catatan</h2>

                            <div className="flex gap-2 items-center">
                                <div className="flex gap-2 bg-transparent rounded-lg border border-slate-300 text-lg items-center justify-center">
                                    <button className="px-4 py-0 text-3xl text-slate-500">-</button>
                                    <p>1</p>
                                    <button className="px-4 py-0 text-2xl text-green-500">+</button>
                                </div>
                                <h2 className="">Stok Total : <b>{product?.stock}</b></h2>
                            </div>

                            <p className="text-slate-500 text-sm font-semibold">Max. Pembelian 10 Pcs</p>
                            <div className="w-full flex justify-end mt-6">
                                <del className="text-slate-400 text-sm font-semibold">{formatPrice(product?.price)}</del>
                            </div>
                            <div className="flex justify-between mt-2">
                                <h2 className="text-slate-500 font-semibold">Subtotal</h2>
                                <b className="text-xl">{formatPrice(product?.price)}</b>
                            </div>
                            <button onClick={() => handleAddToCart()} className="w-full rounded-md font-semibold py-2 mb-2 mt-6 text-white bg-green-600 hover:bg-green-700">+ Keranjang</button>
                            <button className="w-full rounded-md font-semibold py-2  text-green-600 border-2 border-green-500">Beli Langsung</button>
                            <div className="grid grid-cols-3 mt-4 pt-2 pb-1 gap-2">
                                <button className="flex justify-center gap-2 items-center bg-transparent text-sm font-semibold border-r border-slate-400">
                                    <img src={svg.chat} className="w-3 p-0 h-3" />
                                    Chat
                                </button>
                                <button className="flex justify-center gap-2 items-center bg-transparent text-sm font-semibold  pr-2 border-r border-slate-400">
                                    <img src={svg.love} className="w-3 p-0 h-3" />
                                    WistList
                                </button>
                                <button className="flex justify-center gap-2 items-center bg-transparent text-sm font-semibold ">
                                    <img src={svg.share} className="w-3 p-0 h-3" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="mb-20" />
                <Ulasan />
            </section>
        </>
    )
};
export default ProductPage