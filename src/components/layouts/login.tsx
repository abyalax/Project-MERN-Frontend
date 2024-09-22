import LoginForm from "../fragments/login";

const LoginLayouts = () => {
    return (
        <section className='flex flex-col justify-center items-center bg-[url("./assets/img/image.png")] bg-cover bg-center min-h-screen min-w-screen'>
            <h2 className=" absolute top-10 text-4xl text-green-500 text-center font-semibold">tokopedia</h2>
            <LoginForm />
            <footer className="text-sm flex absolute bottom-8 gap-2">
                <p>&copy; 2009-2024, PT Tokopedia </p>
                <a href=""> | <span className="text-green-500">Bantuan</span></a>
            </footer>
        </section>
    )
};

export default LoginLayouts;