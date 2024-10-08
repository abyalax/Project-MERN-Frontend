import { Link, useNavigate, useParams } from "react-router-dom";
import NavbarSeller from "../../../components/fragments/navbar-seller";
import Input from "../../../components/ui/input";
import { useContext, useState } from "react";
import DragAndDropVideo from "../../../components/fragments/drag-drop-video";
import DragAndDrop from "../../../components/fragments/drag-drop";
import { CreateProduct } from "../../../services/products";
import { Image } from "../../../components/fragments/drag-drop";
import { uploadImages } from "../../../services/cloudinary";
import { ToasterContext } from "../../../context/toaster-context";
import { Condition } from "../../../types/products";


const AddProduct = () => {
    const [images, setImages] = useState<Image[]>([])
    const { nameStore } = useParams();
    const [loading, setLoading] = useState(false)
    const frmtName = nameStore?.replace(/-/g, ' ') as string
    const { setToaster } = useContext(ToasterContext)
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        nameStore: frmtName,
        name: '',
        category: '',
        etalase: '',
        image: [{ secure_url: '' }],
        condition: Condition.NEW,
        description: '',
        minOrder: 1,
        price: 0,
        stock: 0,
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

    const handleAddProduct = async () => {
        try {
            setLoading(true); // Set loading state di awal
    
            // Lakukan upload gambar terlebih dahulu dan pastikan hasil upload berhasil
            const upImage = await handleUpload();
    
            if (!upImage) {
                setLoading(false);
                setToaster({
                    variant: "danger",
                    message: "Upload Image Failed",
                });
                return;
            }
    
            // Set produk yang sudah memiliki image hasil upload
            const updatedProduct = { ...product, image: upImage };
            console.log("Updated Product: ", updatedProduct);
            
            // Lakukan upload produk dengan product yang sudah ter-update
            const response = await CreateProduct(updatedProduct);
    
            if (response.status === true) {
                setToaster({
                    variant: "success",
                    message: "Upload Product Successfully",
                });
                console.log("Response Success upload: ", response);
                return response.data;
            } else {
                setToaster({
                    variant: "danger",
                    message: "Upload Product Failed",
                });
                console.log("Response Failed upload: ", response);
                return response;
            }
        } catch (error) {
            setToaster({
                variant: "danger",
                message: "An error occurred during product upload",
            });
            console.error("Error during upload:", error);
        } finally {
            setLoading(false);
        }
    };
    
    const handleUpload = async () => {
        try {
            setLoading(true);
            const filesToUpload = images.map((image) => image.file);
            const response = await uploadImages(filesToUpload);
    
            if (response.status !== true || !response.data) {
                throw new Error("Failed to upload images");
            }
    
            const uploadedImages = response.data.map((item: any) => ({ secure_url: item.secure_url }));
    
            console.log("Uploaded Images:", uploadedImages);
    
            return uploadedImages;
        } catch (error) {
            console.error("Upload error:", error);
            setToaster({
                variant: "danger",
                message: "Upload Images Failed",
            });
            return null;
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <>
            <NavbarSeller />
            <div className="pt-10 px-56">
                <h2 className="text-gray-900 font-bold text-2xl my-2">Tambah Product</h2>
                <p className="text-sm mb-3">Pastikan produk tidak melanggar Hak Kekayaan Intelektual supaya produkmu tidak diturunkan <Link to={""} className="link">Pelajari S&K</Link></p>
                <div className="w-full rounded-lg border-2 border-slate-300 py-4 pl-6 pr-10">
                    <h2 className="text-xl font-semibold">Informasi Produk</h2>
                    {/* NAMA PRODUK */}
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
                    {/* KATEGORI PRODUK */}
                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Kategori Produk</h2>
                            <p className="text-sm text-gray-900">
                                Pilih kategori yang sesuai karena <b>biaya layanan akan tergantung pada kategori. </b> Jika pemilihan kategori kurang sesuai, maka kategori akan diubah oleh Tokopedia. Pelajari Selengkapnya
                            </p>
                        </div>
                        <Input placeholder="Masukkan Kategori Produk" type="text" onChange={(e) => setProduct({ ...product, category: e.target.value })} classname="h-10">
                            <div className="flex justify-end">
                                <span className="text-slate-500 text-sm ">0/255</span>
                            </div>
                        </Input>
                    </div>
                    {/* NAMA ETALASE */}
                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Nama Etalase</h2>
                            <p className="text-sm text-slate-500">
                                Kamu dapat menambah etalase baru atau memilih dari daftar etalase yang ada
                            </p>
                        </div>
                        <div className="w-full">
                            <Input placeholder="Ketikkan Nama Etalase yang sesuai" type="text" onChange={(e) => setProduct({ ...product, etalase: e.target.value })} w="w-1/2 " classname="h-10">
                                <div className="flex justify-end">
                                    <span className="text-slate-500 text-sm ">0/255</span>
                                </div>
                            </Input>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg border-2 border-slate-300 py-4 px-6 mt-6 mb-8">
                    <h2 className="text-xl font-semibold">Detail Produk</h2>
                    {/* FOTO PRODUK */}
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
                            <DragAndDrop images={images} setImages={setImages} loading={loading}/>
                        </div>
                    </div>
                    {/* VIDEO PRODUK */}
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
                    {/* KONDISI PRODUK */}
                    <div className="flex gap-10 my-10">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Kondisi Produk</h2>
                        </div>
                        <div className="w-full">
                            <div className="w-1/2 flex gap-8">
                                <label className="flex gap-2 items-center">
                                    <input type="radio" className="w-6 h-6 focus:bg-green-500" id="new" name="condition" value="new" onChangeCapture={() => setProduct({ ...product, condition: Condition.NEW })} />
                                    <span>Baru</span>
                                </label>
                                <label className="flex gap-2 items-center">
                                    <input type="radio" className="w-6 h-6 focus:bg-green-500" id="second" name="condition" value="used" onChangeCapture={() => setProduct({ ...product, condition: Condition.USED })} />
                                    <span >Second</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* DESKRIPSI PRODUK */}
                    <div className="flex gap-10 my-10">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Deskripsi Produk</h2>
                            <p className="text-sm text-slate-600">
                                Pastikan deskripsi produk memuat penjelasan detail terkait produkmu agar pembeli mudah mengerti dan menemukan produkmu.
                            </p>
                            <p className="text-sm text-slate-600 my-2">
                                Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb. ke dalam deskripsi produk untuk melindungi data pribadimu.
                            </p>
                        </div>
                        <div className="w-full h-60  rounded-md">
                            <textarea placeholder={placeholderDesc} onChange={(e) => setProduct({ ...product, description: e.target.value })} className="w-4/5 h-full p-2 border border-slate-400 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-md" />
                        </div>
                    </div>

                </div>
                <div className="w-full rounded-lg border-2 border-slate-300 py-4 px-6 mt-6 mb-8">
                    <h2 className="text-xl font-semibold">Pengelolaan Produk</h2>
                    {/* MINIMUM ORDER */}
                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Minimum Pesanan</h2>
                            <p className="text-sm text-slate-500">
                                Atur jumlah minimum yang harus dibeli untuk produk ini.
                            </p>
                        </div>
                        <Input placeholder="1" type="number" defaultValue={1} onChange={(e) => setProduct({ ...product, minOrder: parseInt(e.target.value) })} classname="h-10">
                            <span className="text-slate-500 text-sm">Cek ketentuan baru terkait batas maks. pemesanan produk. <Link to={""} className="link">Selengkapnya</Link></span>
                        </Input>
                    </div>

                    {/* HARGA PRODUK */}
                    <div className="flex gap-10 my-2">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Harga Satuan Produk</h2>
                        </div>
                        <Input placeholder="Masukkan Harga" type="number" onChange={(e) => setProduct({ ...product, price: parseInt(e.target.value) })} classname="h-10" />
                    </div>
                    {/* STOK PRODUK */}
                    <div className="flex gap-10 mb-2 mt-6">
                        <div className="w-1/3 mr-10">
                            <h2 className="text-base font-semibold mb-2 mt-4 text-gray-800">Jumlah Stock Produk</h2>
                        </div>
                        <Input placeholder="Masukkan Jumlah Stock" type="number" onChange={(e) => setProduct({ ...product, stock: parseInt(e.target.value) })} classname="h-10" />
                    </div>

                </div>

                <div className="flex gap-6 text-end justify-end mb-40">
                    <button onClick={() => navigate(-1)} className="text-sm font-semibold py-2.5 px-8 bg-transparent border-2 border-slate-300 rounded-lg">Batal</button>
                    <button className="disabled:bg-slate-300 disabled:cursor-not-allowed text-sm font-semibold py-2.5 px-8 bg-transparent border-2 border-slate-300 rounded-lg">Simpan & Tambah Produk</button>
                    <button disabled={product.name === '' || product.category === '' || product.description === '' || product.price === 0 || product.stock === 0 || product.minOrder === 0 || loading}  
                    onClick={handleAddProduct} className="disabled:bg-slate-300 disabled:cursor-not-allowed text-sm font-semibold py-2.5 px-8 bg-green-600 text-white rounded-lg">Simpan</button>
                </div>


            </div>
        </>
    )
};

export default AddProduct;