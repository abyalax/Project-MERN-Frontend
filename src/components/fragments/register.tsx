
const RegisterForm = () => {
    return (
        <div className="bg-white min-w-[400px] drop-shadow-full p-10 rounded-xl xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 ">
            <div className="flex flex-col justify-center items-center my-8 ">
                <h2 className="text-xl sm:text-2xl font-bold ">Daftar Sekarang</h2>
                <p>Sudah Punya akun Tokopedia ? <a href="" className="text-[#00AA5B]">Masuk</a></p>
            </div>
            <div className="flex flex-col gap-6">
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
            <div className="flex justify-between items-center my-4">
                <hr className="border w-1/3 border-slate-300" />
                <p className="text-center text-sm w-auto text-nowrap text-slate-500">atau</p>
                <hr className="border w-1/3 border-slate-300" />
            </div>
            <form className="w-full my-3">
                <input type="text" placeholder="Nomor HP atau Email" className="border border-gray-400 w-full p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded" />
                <p className="text-xs mt-0">Contoh: example@gmail.com</p>
                <div className="flex flex-col items-end">
                    <a href="" className="text-[#00AA5B] w-full text-end">Butuh Bantuan?</a>
                </div>
                <button className="bg-[#00AA5B] text-white w-full p-3 rounded-xl mt-4 font-semibold text-lg">Daftar</button>
            </form>
        </div>
    )
};

export default RegisterForm;