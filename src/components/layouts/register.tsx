import RegisterForm from "../fragments/register";
import image from "../../assets/img/tokopedia.png"
import { Link } from "react-router-dom";

const RegisterLayouts = () => {
    return (
        <section className='flex flex-col justify-center items-center min-h-screen min-w-screen'>
            <h2 className=" absolute top-10 text-4xl text-green-500 text-center font-semibold">tokopedia</h2>
            <div className="flex justify-between gap-28">
                <div>
                    <img src={image} width={400} height={400}/>
                    <h2 className="text-center font-bold text-xl">Jual Beli Mudah Hanya di Tokopedia</h2>
                    <p className="text-center font-light">Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
                </div>
                <RegisterForm/>
            </div>
            <footer className="text-sm flex absolute bottom-16 gap-2">
                <p>&copy; 2009-2024, PT Tokopedia </p>
                <Link to={""} className="text-[#00AA5B] text-sm font-bold">Tokopedia Care</Link>
            </footer>
        </section>
    )
};

export default RegisterLayouts;