import { useSelector } from "react-redux";
import { image } from "../../assets";
import Navbar from "../../components/fragments/navbar";
import { RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SuccessCreateStore = () => {
    const name = useSelector((state: RootState) => state.data.name);
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/store/home')
        }, 3000)
        return () => {};
    }, [navigate])
    return (
        <>
            <Navbar classname="fixed z-10 bg-white" />
            <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-[#DCFFF6] to-white rounded-lg">
                <img src={image.successTokopedia} className="w-1/5 h-1/5 mb-6" />
                <h2 className="text-[1.7rem] text-gray-800 font-bold">{`Selamat ${name.split(' ')[0]}, tokomu sudah jadi!`}</h2>
                <p className="text-sm text-slate-500 font-semibold">Tambah Produk dan Mulai usahamu</p>
                <p className="text-sm text-slate-500 font-semibold">Pelajari caranya lebih lanjut dengan download <Link to="#" className="link">Panduan Berjalan</Link></p>
            </div>
        </>
    )
};

export default SuccessCreateStore;