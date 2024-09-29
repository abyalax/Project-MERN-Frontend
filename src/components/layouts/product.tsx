import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataProduct, { dataProductType } from "../../assets/img/product";
import { svg } from "../../assets";
import Navbar from "../fragments/navbar";

const Product = () => {
    const { nameStore, productSlug } = useParams()
    const [product, setProduct] = useState<dataProductType>()

    const reverseFormat = (item: string) => {
        return item.replace(/-/g, ' ')
    }

    useEffect(() => {
        const fetchProduct = async () => {
            if (productSlug && nameStore) {
                console.log({ productSlug }, { nameStore });

                const prod = reverseFormat(productSlug)
                const store = reverseFormat(nameStore)

                console.log({ prod }, { store });

                const result = dataProduct.find((product) => product.storeName.toLowerCase() === store && product.name.toLowerCase() === prod)
                setProduct(result)
            }
        }
        fetchProduct()
    }, [nameStore, productSlug])

    return (
        <>
            <Navbar classname="sticky bg-white top-0" />
            <section className="px-32 pt-5">
                <div className="grid grid-cols-10 justify-center">

                    <div className="col-span-3 rounded-md px-7">
                        <img src={product?.image} className="w-full rounded-xl" />
                    </div>

                    <div className="mb-96 col-span-4 pl-4">

                        <h2 className="font-semibold text-lg">{product?.name}</h2>
                        <div className="flex mb-4 gap-3">
                            <p>Terjual <span className="text-slate-500">250+</span></p>
                            <img src={svg.star} />
                            <p>5 <span className="text-slate-500">(98 rating)</span></p>
                            <p>Diskusi <span className="text-slate-500">(16)</span></p>
                        </div>

                        <h2 className="text-3xl font-bold">Rp99.000</h2>
                        <div className="flex mt-2 justify-start gap-2">
                            <p className="text-xs bg-red-200 my-auto text-red-500 rounded-md px-2 py-1 w-fit font-bold">90%</p>
                            <s className="text-slate-500 items-center">Rp499.000</s>
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
                            <h2 className="text-slate-600">Kondisi : <span className="text-black">Baru</span></h2>
                            <h2 className="text-slate-600">Min Pemesanan : <span className="text-black">1</span></h2>
                            <h2 className="text-slate-600">Etalase : <span className="text-green-600 font-bold">Microsoft</span></h2>
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
                                <p className="font-bold text-black text-lg">Micross Store</p>
                                <p className="mb-2">Online 6 Menit lalu</p>
                                <div className="flex items-center text-sm gap-2">
                                    <img src={svg.star} className="w-4 h-4" />
                                    <p>4.9 <span className="text-slate-500">(33,5 rb)</span></p>
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

                    <div className="col-span-2 min-w-72">
                        <div className="w-full border-2 border-slate-200 rounded-lg p-3">
                            <h2 className="font-bold text-black text-lg mb-2">Atur Jumlah dan Catatan</h2>
                            <p>6 Bulan</p>

                            <hr className="my-2" />

                            <button>+ 1 -</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Product