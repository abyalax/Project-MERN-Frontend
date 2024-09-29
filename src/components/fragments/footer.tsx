import { useState } from "react";
import { image, svg } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const [language, setLanguage] = useState("id");


  return (
    <footer>
      <div className="grid grid-cols-6 h-[60vh] px-36 py-20 border-t-2 border-slate-300 mb-10">
        <div className="col-span-2 flex w-full">
          <div className=" h-full w-1/2  flex flex-col gap-2 text-gray-600">
            <h2 className="font-bold text-lg mb-2 text-black">Tokopedia</h2>
            <Link to=""className="text-sm">Tentang Tokopedia</Link>
            <Link to=""className="text-sm">Hak Kekayaan Intelektual</Link>
            <Link to=""className="text-sm">Karir</Link>
            <Link to=""className="text-sm">Blog</Link>
            <Link to=""className="text-sm">Tokopedia Affiliate Program</Link>
            <Link to=""className="text-sm">Tokopedia B2B Digital</Link>
            <Link to=""className="text-sm">Tokopedia Marketing Solution</Link>
            <Link to=""className="text-sm">Kalkulator Indeks Masa Tubuh</Link>
            <Link to=""className="text-sm">Tokopedia Farma</Link>
            <Link to=""className="text-sm">Promo Hari ini</Link>
            <Link to=""className="text-sm">Beli Lokal</Link>
            <Link to=""className="text-sm">Promo Guncang</Link>
          </div>
          <div className=" h-full w-1/2 flex flex-col gap-2 text-gray-600">
            <h2 className="font-bold text-lg mb-2 text-black">Beli</h2>
            <Link to=""className="text-sm">Tagihan & Top Up</Link>
            <Link to=""className="text-sm">Tokopedia COD</Link>
            <Link to=""className="text-sm">Bebas Ongkir</Link>
            <h2 className="font-bold text-lg my-2 text-black">Sell</h2>
            <Link to=""className="text-sm">Seller Education Center</Link>
            <Link to=""className="text-sm">Register Official Store</Link>
            <h2 className="font-bold text-lg my-2 text-black">Guild & Help</h2>
            <Link to=""className="text-sm">Tokopedia Care</Link>
            <Link to=""className="text-sm">Terms and Conditions</Link>
            <Link to=""className="text-sm">Privacy</Link>
          </div>
        </div>

        <div className="col-span-2  flex flex-col">
          <h2 className="font-bold text-lg mb-2">Keamanan Privasi</h2>
          <div className="flex gap-4">
            <img src={image.pci} className="h-14 rounded-md" />
            <img src={image.ISO} className="h-14 rounded-md border-2 border-slate-200 px-2 py-1" />
            <img src={image.ISO} className="h-14 rounded-md border-2 border-slate-200 px-2 py-1" />
          </div>
          <h2 className="font-bold text-lg mt-4 mb-2">Ikuti Kami</h2>
          <div className="flex gap-4">
            <div className="bg-[#3B5998] h-7 w-7 p-1.5 flex justify-center items-center rounded-full">
              <img src={svg.facebook} />
            </div>
            <div className="bg-[#00ACED] h-7 w-7 p-1.5 flex justify-center items-center rounded-full">
              <img src={svg.twitter} />
            </div>
            <div className="bg-[#CB2027] h-7 w-7 p-1.5 flex justify-center items-center rounded-full" >
              <img src={svg.pinterest} />
            </div>
            <div className="bg-[#D93174] h-7 w-7 p-1.5 flex justify-center items-center rounded-full">
              <img src={svg.instagram} />
            </div>
          </div>
        </div>

        <div className="col-span-2 ">
          <img src={image.footerTokopedia} />
          <div className="flex mt-8">
            <button className="flex flex-nowrap min-w-fit items-center justify-center gap-1 bg-black border-2 border-gray-500 rounded-md px-2 mx-1 py-0.5 text-white">
              <img src={svg.googlePlay} className="h-7 w-7 p-0" />
              <div>
                <p className="text-[0.55rem] text-start text-nowrap">GET IT ON</p>
                <h2>Google Play</h2>
              </div>
            </button>
            <button className="flex flex-nowrap min-w-fit items-center justify-center gap-1 bg-black border-2 border-gray-500 rounded-md px-2 mx-1 py-0.5 text-white">
              <img src={svg.apple} className="h-7 w-7 p-0" />
              <div>
                <p className="text-[0.55rem] text-start text-nowrap">GET IT ON</p>
                <h2>App Store</h2>
              </div>
            </button>
            <button className="flex flex-nowrap relative min-w-fit items-center justify-center gap-1 bg-black border-2 border-gray-500 rounded-md px-2 mx-1 py-0.5 text-white">
              <img src={svg.square} className="h-7 w-7 p-0" />
              <span className="transform -rotate-90 absolute left-4 bottom-4">{'('}</span>
              <p className="absolute left-3 bottom-4 text-[0.34rem] text-center">HUAWEI</p>
              <div>
                <p className="text-[0.55rem] text-start text-nowrap">GET IT ON</p>
                <h2>App Gallery</h2>
              </div>
            </button>
          </div>
          <p className="text-sm font-semibold text-slate-500 text-center my-8">&copy; 2009-2024, PT. Tokopedia.</p>
          <div className="mx-auto bg-slate-100 max-w-fit font-bold text-sm text-white flex gap-2 justify-center items-center rounded-md py-1 px-2">
            <button onClick={() => setLanguage('id')} className={language === 'id' ? `bg-green-600 px-3 py-0.5 rounded-md` : `text-slate-500`}>Indonesia</button>
            <button onClick={() => setLanguage('en')} className={language === 'en' ? `bg-green-600 px-3 py-0.5 rounded-md` : `text-slate-500`}>English</button>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;