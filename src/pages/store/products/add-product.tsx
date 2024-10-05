import { Link, useParams } from "react-router-dom";
import NavbarSeller from "../../../components/fragments/navbar-seller";
import Input from "../../../components/ui/input";
import { useState } from "react";
import DragAndDrop from "../../../components/fragments/drag-drop";
import DragAndDropVideo from "../../../components/fragments/drag-drop-video";

type Image = {
    name: string;
    url: string
}

const AddProduct = () => {
    const [images, setImages] = useState<Image[]>([]);
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
    const placeholderDesc =
        `Sepatu Sneakers Pria Tokostore Kanvas Hitam Seri C28B
    - Model simple
    - Nyaman Digunakan
    - Tersedia warna hitam
    Sole PVC (injection shoes) yang nyaman dan awet untuk digunakan
    sehari-hari
    Bahan:
    - Upper: Semi Leather (kulit tidak pecah-pecah)
    - Sole: Premium Rubber Sole
    Ukuran
    39 : 25,5 cm
    40 : 26 cm
    41 : 26.5 cm
    42 : 27 cm
    43 : 27.5 - 28 cm
    Edisi terbatas dari Tokostore dengan model baru dan trendy untukmu.
    Didesain untuk bisa dipakai dalam berbagai acara. Sangat nyaman saat
    dipakai sehingga dapat menunjang penampilan dan kepercayaan dirimu.
    Beli sekarang sebelum kehabisan!`
    console.log({ nameStore });

    return (
        <>
            <NavbarSeller />
            <div className="pt-10 px-56">
                <h2 className="text-gray-900 font-bold text-2xl my-2">Tambah Product</h2>
                <p className="text-sm mb-3">Pastikan produk tidak melanggar Hak Kekayaan Intelektual supaya produkmu tidak diturunkan <Link to={""} className="link">Pelajari S&K</Link></p>

                <div className="w-full rounded-lg border-2 border-slate-300 py-4 pl-6 pr-10">
                    <h2 className="text-xl font-semibold">Informasi Produk</h2>

                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Nama Produk</h2>
                            <p className="text-sm text-slate-500">
                                Nama produk min. 25 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.
                            </p>
                            <p className="text-sm text-slate-500 my-2">
                                Disarankan untuk tidak menggunakan huruf kapital berlebih, memasukkan lebih dari 1 merek, dan kata-kata promosi.
                            </p>
                            <p className="text-sm text-slate-500 my-2">
                                Nama <b>tidak bisa diubah</b> setelah produk terjual, ya.
                            </p>
                        </div>
                        <Input placeholder="Contoh: Sepatu Pria (Jenis/Kategori) + Tokostore(Merek) + Kanvas Hitam (Keterangan) " type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} classname="h-10">
                            <div className="flex justify-between">
                                <span className="text-slate-500 text-sm">Tips: Jenis Produk + Merek Produk + Keterangan Tambahan </span>
                                <span className="text-slate-500 text-sm">0/255</span>
                            </div>
                        </Input>
                    </div>

                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Kategori Produk</h2>
                            <p className="text-sm text-gray-900">
                                Pilih kategori yang sesuai karena <b>biaya layanan akan tergantung pada kategori. </b> Jika pemilihan kategori kurang sesuai, maka kategori akan diubah oleh Tokopedia. Pelajari Selengkapnya
                            </p>
                        </div>
                        <Input placeholder="Masukkan Kategori Produk" type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} classname="h-10">
                            <div className="flex justify-end">
                                <span className="text-slate-500 text-sm ">0/255</span>
                            </div>
                        </Input>
                    </div>

                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Nama Etalase</h2>
                            <p className="text-sm text-slate-500">
                                Kamu dapat menambah etalase baru atau memilih dari daftar etalase yang ada
                            </p>
                        </div>
                        <div className="w-full">
                            <Input placeholder="Ketikkan Nama Etalase yang sesuai" type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} w="w-1/2 " classname="h-10">
                                <div className="flex justify-end">
                                    <span className="text-slate-500 text-sm ">0/255</span>
                                </div>
                            </Input>
                        </div>
                    </div>
                </div>

                <div className="w-full rounded-lg border-2 border-slate-300 py-4 px-6 mt-6 mb-8">
                    <h2 className="text-xl font-semibold">Detail Produk</h2>

                    <div className="flex gap-10 mt-2 mb-4 ">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Foto Produk</h2>
                            <p className="text-sm text-slate-600">
                                Format foto harus .jpg .jpeg .png dan ukuran min. 300 x 300 px (untuk gambar optimal, gunakan ukuran min. 1.200 x 1.200 px).
                            </p>
                            <p className="text-sm text-slate-600 my-2">
                                Pilih foto produk atau tarik dan letakkan hingga 9 foto sekaligus di sini. Upload min. 5 foto yang menarik dan <b>berbeda satu sama lain</b> untuk menarik perhatian pembeli.
                            </p>
                        </div>
                        <div className="w-full h-72">
                            <DragAndDrop />
                        </div>
                    </div>

                    <div className="flex gap-10 my-10">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Video Produk</h2>
                            <p className="text-sm text-slate-600">
                                Format video .mp4 dan .mov. Disarankan durasi maks. 120 detik dan ukuran maks. 100MB.
                            </p>
                            <p className="text-sm text-slate-600 my-2">
                                Pastikan videomu sesuai dengan <Link to={""} className="link">Syarat dan Ketentuan Tokopedia.</Link>
                            </p>
                        </div>
                        <div className="w-full h-36 overflow-y-hidden">
                            <DragAndDropVideo />
                        </div>
                    </div>

                    <div className="flex gap-10 my-10">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Kondisi Produk</h2>
                        </div>
                        <div className="w-full">
                            <div className="w-1/2 flex gap-8">
                                <label className="flex gap-2 items-center">
                                    <input type="radio" className="w-6 h-6 focus:bg-green-500" id="new" name="condition" value="new" onChangeCapture={() => setProduct({ ...product, condition: "new" })} />
                                    <span>Baru</span>
                                </label>
                                <label className="flex gap-2 items-center">
                                    <input type="radio" className="w-6 h-6 focus:bg-green-500" id="second" name="condition" value="second" onChangeCapture={() => setProduct({ ...product, condition: "second" })} />
                                    <span >Second</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 my-10">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Video Produk</h2>
                            <p className="text-sm text-slate-600">
                                Pastikan deskripsi produk memuat penjelasan detail terkait produkmu agar pembeli mudah mengerti dan menemukan produkmu.
                            </p>
                            <p className="text-sm text-slate-600 my-2">
                                Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb. ke dalam deskripsi produk untuk melindungi data pribadimu.
                            </p>
                        </div>
                        <div className="w-full h-60  rounded-md">
                            <textarea placeholder={placeholderDesc} className="w-4/5 h-full p-2 border border-slate-400 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-md" />
                        </div>
                    </div>

                </div>

                <div className="w-full rounded-lg border-2 border-slate-300 py-4 px-6 mt-6 mb-8">
                    <h2 className="text-xl font-semibold">Pengelolaan Produk</h2>

                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Minimum Pesanan</h2>
                            <p className="text-sm text-slate-500">
                                Atur jumlah minimum yang harus dibeli untuk produk ini.
                            </p>
                        </div>
                        <Input placeholder="1" type="number" onChange={(e) => setProduct({ ...product, name: e.target.value })} classname="h-10">
                            <span className="text-slate-500 text-sm">Cek ketentuan baru terkait batas maks. pemesanan produk. <Link to={""} className="link">Selengkapnya</Link></span>
                        </Input>
                    </div>
                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Harga Satuan Produk</h2>
                        </div>
                        <Input placeholder="Masukkan Harga" type="number" onChange={(e) => setProduct({ ...product, name: e.target.value })} classname="h-10" />
                    </div>

                    <div className="flex gap-10 mb-2 mt-6">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Jumlah Stock Produk</h2>
                        </div>
                        <Input placeholder="Masukkan Jumlah Stock" type="number" onChange={(e) => setProduct({ ...product, name: e.target.value })} classname="h-10" />
                    </div>

                </div>

                <div className="flex gap-6 text-end justify-end mb-40">
                    <button className="text-sm font-semibold py-2.5 px-8 bg-transparent border-2 border-slate-300 rounded-lg">Batal</button>
                    <button className="text-sm font-semibold py-2.5 px-8 bg-transparent border-2 border-slate-300 rounded-lg">Simpan & Tambah Produk</button>
                    <button className="text-sm font-semibold py-2.5 px-8 bg-green-600 text-white rounded-lg">Simpan</button>
                </div>


            </div>
        </>
    )
};

export default AddProduct;