import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { svg } from "../../assets";
import { useAppDispatch } from "../../redux/hooks";
import { AppDispatch } from "../../redux/store";
import { Login, Register, VerifyEmail } from "../../redux/slice/userSlice";
import { attemptToVerify } from "../../services/auth";
import { Register as RegisterService } from "../../services/auth";

enum VerificationState {
    invalid = "invalid",
    success = "success"
}

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [verificationState, setVerificationState] = useState("pending");
    const dispatch: AppDispatch = useAppDispatch();
    const [formState, setFormState] = useState({
        email: "",
        name: "",
        password: ""
    })

    useEffect(() => {
        const verifyHandler = async () => {
            const code = searchParams.get("code");
            const email = searchParams.get("email");
            if (!code || !email) {
                return setVerificationState(VerificationState.invalid)
            }
            try {
                const response = await attemptToVerify(code, email)
                if (response.status) {
                    setVerificationState(VerificationState.success)
                    dispatch(VerifyEmail(true))
                } else {
                    setVerificationState(VerificationState.invalid)
                }
            } catch (error) {
                console.error(error)
                setIsLoading(false)
            }
        }
        verifyHandler()
    }, [dispatch, searchParams]);

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
            const response = await RegisterService(formState.name, formState.email, formState.password)
            if (response.status === true) {
                dispatch(Register(response.data.user))
                dispatch(Login(true))
                dispatch(VerifyEmail(response.data.user.verifiedEmail))
                navigate("/auth/login");
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }

    }

    switch (verificationState) {
        case VerificationState.success: {
            return (
                <div className="bg-white min-w-[400px] drop-shadow-full p-10 rounded-xl xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 ">
                    <div className="flex items-center my-4 gap-4">
                        <img src={svg.arrowR} className="w-7 h-7" />
                        <h2 className="text-xl font-bold ">Daftar Dengan Email</h2>
                    </div>
                    <form className="w-full my-3" id="register" onSubmit={(e) => onSubmit(e)}>
                        <input type="email" name="email" onChange={(e) => onChange(e, "email")} placeholder="example@gmail.com" className="border border-gray-400 w-full my-3 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />

                        <input type="text" name="name" onChange={(e) => onChange(e, "name")} placeholder="Nama Lengkap" className="border border-gray-400 w-full my-3 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />

                        <input type="password" name="password" onChange={(e) => onChange(e, "password")} placeholder="Kata Sandi" className="border border-gray-400 w-full my-3 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />

                        <button type="submit" className="bg-[#00AA5B] text-white w-full p-3 rounded-xl mt-4 font-semibold text-lg">{isLoading ? "Loading..." : "Lanjut"}</button>
                        <h2 className="font-semibold text-center mt-5">Dengan mendaftar saya menyetujui</h2>
                        <div className="flex gap-2 text-nowrap flex-nowrap">
                            <Link to="#" className="text-[#00AA5B] font-bold">Syarat dan ketentuan</Link>
                            <p className="font-semibold">serta</p>
                            <Link to={""} className="text-[#00AA5B] font-bold">Kebijakan privasi</Link>
                        </div>

                    </form>
                </div>
            )
        }
        case VerificationState.invalid: {
            return (
                <div>
                    This link invalid. Please <Link to="/auth/send-email">resend</Link>.
                </div>
            )
        }
        default: {
            return (
                <div>
                    Verifying...
                </div>
            );
        }
    }

};

export default RegisterForm;