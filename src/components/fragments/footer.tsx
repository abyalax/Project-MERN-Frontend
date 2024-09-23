import { image } from "../../assets";

const Footer = () => {
  return (
    <footer>
    <div className="grid grid-cols-3 px-40 py-20">
      <div className="flex bg-red-400 h-[30vh] w-full">
        <div className=" bg-blue-400 h-full w-1/2  p-3 flex flex-col">
          <h2 className="font-semibold text-lg mb-2">Tokopedia</h2>
          <a href="" className="ml-2 text-sm">Tentang Tokopedia</a>
          <a href="" className="ml-2 text-sm">Hak Kekayaan Intelektual</a>
          <a href="" className="ml-2 text-sm">Karir</a>
          <a href="" className="ml-2 text-sm">Blog</a>
        </div>
        <div className=" bg-blue-400 h-full w-1/2 flex flex-col p-3">
          <h2 className="font-semibold text-lg mb-2">Beli</h2>
          <a href="" className="ml-2 text-sm">Tagihan & Top Up</a>
          <a href="" className="ml-2 text-sm">Tokopedia COD</a>
          <a href="" className="ml-2 text-sm">Bebas Ongkir</a>
        </div>
      </div>

      <div className="bg-red-400 h-[30vh] flex flex-col p-3">
        <h2 className="font-semibold text-lg mb-2">Keamanan Privasi</h2>
        <div className="flex gap-4">
          <img src={image.pci} className="h-14 rounded-md" />
          <img src={image.pci} className="h-14 rounded-md" />
        </div>
        <h2 className="font-semibold text-lg mt-4 mb-2">Ikuti Kami</h2>
      </div>
      <div className="bg-red-400 h-[30vh]">tiga</div>
    </div>
  </footer>
  )
};

export default Footer;