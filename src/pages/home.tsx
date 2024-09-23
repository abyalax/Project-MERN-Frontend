import Category from "../components/fragments/category";
import Navbar from "../components/fragments/navbar";
import dataProduct, { dataProductType } from "../assets/img/product";
import { svg } from "../assets";
import { useEffect, useState } from "react";
import Footer from "../components/fragments/footer";

const Home = () => {
  const [product, setProduct] = useState<dataProductType[]>([])

  useEffect(() => {
    setProduct(dataProduct)
  }, [])

  const FirstFilterHandler = () => {
    setProduct(dataProduct.filter((item) => item.category === 'Work Services'))
  }
  const SecondFilterHandler = () => {
    setProduct(dataProduct.filter((item) => item.category === 'Paket Perawatan'))
  }
  const ThirdFilterHandler = () => {
    setProduct(dataProduct.filter((item) => item.category === 'Multimedia'))
  }
  const FourthFilterHandler = () => {
    setProduct(dataProduct)
  }

  return (
    <>
      <Navbar />
      <Category />
      <section className="px-40 py-10 border-t-8 border-slate-200">
        <div className="flex gap-3">
          <button onClick={FirstFilterHandler} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg">Work Services</button>
          <button onClick={SecondFilterHandler} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-green-800 to-green-500 rounded-lg">Paket Perawatan Wajah</button>
          <button onClick={ThirdFilterHandler} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-pink-900 to-pink-500 rounded-lg">Multimedia</button>
          <button onClick={FourthFilterHandler} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-cyan-800 to-cyan-600 rounded-lg">Mirip yang kamu cek</button>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {product.map((item) => (
            <div key={item.id} className="h-[330px] w-full pb-3 border-2 border-slate-200 rounded-lg">
              <img src={item.image} className="w-full h-48 object-cover object-center rounded-t-lg" />
              <div className="px-2 pt-1 pb-4 flex flex-col gap-1">
                <p className="text-sm">{item.name.length > 48 ? item.name.substring(0, 40) + '...' : item.name}</p>
                <p className="font-bold">Rp. 200.000</p>
                <p className="text-slate-500 text-sm ">Surabaya</p>
                <div className="flex gap-1">
                  <img src={svg.star} width={12} height={12} />
                  <p className="text-slate-500 text-sm ">4.8 </p>
                  <p className="text-slate-500 text-sm ">| 100+ terjual</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home