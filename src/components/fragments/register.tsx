import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { svg } from "../../assets";
import { AppDispatch } from "../../redux/store";
import { Login, Register, VerifyEmail } from "../../redux/slice/userSlice";
import { attemptToVerify } from "../../services/auth";
import { Register as RegisterService } from "../../services/auth";
import { ToasterContext } from "../../context/toaster-context";
import { useAppDispatch } from "../../redux/hooks";

enum VerificationState {
    invalid = "invalid",
    already = "already",
    success = "success",
    expired = "expired"
}

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [verificationState, setVerificationState] = useState("pending");
    const dispatch: AppDispatch = useAppDispatch();
    const { setToaster } = useContext(ToasterContext)
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
                return setVerificationState(VerificationState.already)
            }
            try {
                const response = await attemptToVerify(code, email)
                if (response.statusCode === 200) {
                    setToaster({
                        variant: "success",
                        message: "Email Successfully Verified"
                    })
                    setVerificationState(VerificationState.success)
                    dispatch(VerifyEmail(true))
                    return
                }
                if (response.message === "Email and code are empty") {
                    setVerificationState(VerificationState.already)
                    return
                }
                if (response.statusCode === 410) {
                    setToaster({
                        variant: "danger",
                        message: "You are late to verifying your email"
                    })
                    setVerificationState(VerificationState.expired)
                    return
                }
                if (response.statusCode === 400) {
                    setToaster({
                        variant: "danger",
                        message: "Something wrong, check your connection"
                    })
                    setVerificationState(VerificationState.invalid)
                    return
                } else {
                    console.log(response);
                    alert("something wrong")
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
        if( formState.email === "" || formState.password === "" || formState.name === "") {
            setToaster({
                variant: "warning",
                message: "All fields can't be empty"
            }); 
            setIsLoading(false)
            return
        }
        try {
            const response = await RegisterService(formState.name, formState.email, formState.password)
            if (response.statusCode === 401) {
                setToaster({
                    variant: "warning",
                    message: "Email not found, Verify your email fisrt"
                }); 
                setIsLoading(false)
                return
            }
            if (response.statusCode === 400) {
                setToaster({
                    variant: "warning",
                    message: "Failed to register, Check your connection"
                }); 
                setIsLoading(false)
                return
            }
            if (response.statusCode === 409) {
                setToaster({
                    variant: "warning",
                    message: "Email is already registered"
                });
                setIsLoading(false)
                return
            }
            if (response.statusCode === 200) {
                dispatch(Register(response.data.user))
                dispatch(Login(true))
                dispatch(VerifyEmail(response.data.user.verifiedEmail))
                navigate("/auth/login");
                setIsLoading(false)
            } 
            else {
                setIsLoading(false)
                setToaster({
                    variant: "danger",
                    message: "Something wrong, call service support"
                });
                return
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }

    }

    switch (verificationState) {
        case VerificationState.already: {
            return (
                <div className="bg-white min-w-[400px] drop-shadow-full p-10 rounded-xl xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 ">
                    <div className="flex items-center my-4 gap-4">
                        <img src={svg.arrowR} className="w-7 h-7 cursor-pointer" onClick={() => navigate('/auth/send-email')} />
                        <h2 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/auth/send-email')} >Daftar Dengan Email</h2>
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