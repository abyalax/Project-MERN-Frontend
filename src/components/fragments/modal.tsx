
const Modal = ({children} : {children: React.ReactNode}) => {
  return (
    <section className="bg-black/50 absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center min-h-screen min-w-screen z-30">
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-fit h-fit bg-red-600 rounded-lg shadow-lg p-4">
            {children}
            </div>
        </div>
    </section>
  )
};

export default Modal;