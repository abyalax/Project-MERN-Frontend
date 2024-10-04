import { Link, useParams } from "react-router-dom";
import NavbarSeller from "../../../components/fragments/navbar-seller";
import Input from "../../../components/ui/input";
import { useState } from "react";

const AddProduct = () => {

    const { nameStore } = useParams();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
        category: '',
        quantity: 0,
        condition: '',
        minOrder: 0,
        image: '',
    })
    console.log({ nameStore });

    return (
        <>
            <NavbarSeller />
            <div className="pt-52 px-36">
                <h2 className="text-gray-900 font-bold text-2xl">Tambah Product</h2>
                <p className="text-sm">Pastikan produk tidak melanggar Hak Kekayaan Intelektual supaya produkmu tidak diturunkan <Link to={""} className="link">Pelajari S&K</Link></p>
                <div className="w-full rounded-lg border-2 border-slate-300 p-4">
                    <h2 className="text-xl font-semibold">Informasi Produk</h2>
                    <div className="flex">
                        <div className="w-1/3">
                            <h2>Nama Produk</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, alias vel ducimus iure dolorum perferendis deserunt aperiam, reiciendis sequi quibusdam quae odit provident dignissimos? Voluptatibus iure possimus dignissimos nam iusto?</p>
                        </div>
                        <Input placeholder="Contoh: Sepatu Pria (Jenis/Kategori) + Tokostore(Merek) + Kanvas Hitam (Keterangan) " type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} classname="h-10">
                            span
                        </Input>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AddProduct;