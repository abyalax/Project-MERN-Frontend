
const Modal = ({children} : {children: React.ReactNode}) => {
  return (
    <section className="bg-black/50 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center min-h-screen min-w-screen z-50">
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white max-w-5xl max-h-xl rounded-lg shadow-lg p-4 flex justify-center items-center flex-col">
            {children}
            </div>
        </div>
    </section>
  )
};

export default Modal;