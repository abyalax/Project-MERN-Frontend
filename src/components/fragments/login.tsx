import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { AppDispatch } from "../../redux/store";
import { Login, Register, VerifyEmail } from "../../redux/slice/userSlice";
import { Login as LoginService } from "../../services/auth";

const LoginForm = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })
    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        setFormState({
            ...formState,
            [type]: e.target.value
        })
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await LoginService(formState.email, formState.password);
            if (!response.status) {
                return alert("Something went wrong");
            }
            localStorage.setItem("userSession", JSON.stringify({ ...response.data.user, isLogin: true }));
            dispatch(VerifyEmail(response.data.user.verifiedEmail));
            dispatch(Register({ name: response.data.user.name, email: response.data.user.email }));
            dispatch(Login(true));
            setIsLoading(false)
            navigate("/home")
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-white drop-shadow-full p-10 max-w-[400px]  rounded-xl xl:w-2/3 lg:w-1/3 md:w-1/2  sm:w-2/3">
            <div className="flex justify-between items-center my-8">
                <h2 className="text-2xl font-semibold">Masuk ke Tokopedia</h2>
                <Link to="/auth/register" className="text-[#00AA5B] text-sm font-bold text-end">Daftar</Link>
            </div>
            <form className="w-full" onSubmit={(e) => onSubmit(e)}>
                <input type="email" name="email" placeholder="Masukkan Email" onChange={(e) => onChange(e, "email")} className="border border-gray-400 w-full p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                <p className="text-xs text-slate-500 font-medium mt-0">Contoh: example@gmail.com</p>

                <input type="password" name="password" placeholder="Masukkan Kata Sandi" onChange={(e) => onChange(e, "password")} className="border border-gray-400 my-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />

                <div className="flex flex-col items-end">
                    <Link to="" className="text-[#00AA5B] w-full text-sm font-bold text-end">Butuh Bantuan?</Link>
                </div>
                <button type="submit" className="bg-[#00AA5B] text-white w-full p-2 rounded-xl my-3 font-semibold text-lg">{isLoading ? "Loading..." : "Selanjutnya"}</button>
            </form>
            <div className="flex justify-between items-center gap-2 my-3">
                <hr className="border w-1/3 border-slate-300" />
                <p className="text-center text-sm w-auto text-nowrap text-slate-500">atau masuk dengan</p>
                <hr className="border w-1/3 border-slate-300" />
            </div>
            <div className="flex flex-col gap-6">
                <button className="border flex justify-center items-center gap-3 border-slate-400 w-full p-2 rounded-xl font-semibold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-qr-code-scan" viewBox="0 0 16 16">
                        <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
                        <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
                        <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
                        <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
                        <path d="M12 9h2V8h-2z" />
                    </svg>
                    Scan Kode QR
                </button>
                <button className="border flex justify-center items-center gap-3 border-slate-400 w-full p-2 rounded-xl font-semibold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                        <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                        <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                        <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                    </svg>
                    Google
                </button>
            </div>
        </div>
    )
};

export default LoginForm;