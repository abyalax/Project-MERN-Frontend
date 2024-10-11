import React, { Dispatch, useContext, useEffect, useState } from "react"
import Modal from "./modal"
import { useNavigate } from "react-router-dom"
import { FilterParams, GetProducts } from "../../services/products"
import { ToasterContext } from "../../context/toaster-context"
import { Product } from "../../types/products"
import { formatPrice } from "../../utils"
import { svg } from "../../assets"

interface ModalCartProps {
  setOpen: Dispatch<React.SetStateAction<boolean>>
  image: string
  name?: string
}

const ModalCart = ({ setOpen, image, name }: ModalCartProps) => {
  const navigate = useNavigate()
  const {setToaster} = useContext(ToasterContext)
  const [products, setProduct] = useState<Product[]>([]);
  const fetchData = async (filter?: FilterParams) => {
    try {
      const response = await GetProducts(filter);
      console.log(response);
      if (response.statusCode === 200) {
        setProduct(response.data);
      } else {
        const message = response.statusCode === 404 ?
          "No Product Found" : "Internal Server Error";
        console.log(response);
        setToaster({
          variant: response.statusCode === 404 ? "warning" : "danger",
          message,
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again later");
    }
  };

  useEffect(() => {
    fetchData();
    return () => setProduct([]);
  }, []);

  const formatURL = (item: string) => {
    return item.trim().replace(/\s+/g, '-').toLowerCase()
  }
  return (
    <Modal>
      <div className="w-[900px] h-[600px] p-4 overflow-y-scroll">
        <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Berhasil Ditambahkan</h2>
        <button onClick={() => setOpen(false)} className="hover:bg-slate-300 text-3xl text-slate-500 rounded-lg p-2">&#x2715;</button>
        </div>
        <div className="shadow-xl border-2 border-slate-200 rounded-lg flex items-center justify-between">
          <div className="flex gap-2 p-4">
            <img src={image} className="w-16 h-16 rounded-lg" />
            <p className="text-slate-600 my-auto">{name}</p>
          </div>
          <div className="h-full p-2 flex justify-end items-center">
            <button onClick={() => { setOpen(false); navigate("/user/carts"); }} className="bg-[#00AA5B] text-white font-bold rounded-lg px-3 py-2">Lihat Keranjang</button>
          </div>
        </div>
        <h2 className="text-2xl font-bold m-6">Kamu Mungkin Juga Suka</h2>

        <div className="grid grid-cols-4 gap-3">
          {products.map((item) => (
            <div onClick={() => {setOpen(false);navigate(`/${formatURL(item.nameStore)}/${item._id}`)}} key={item.name} className="h-[330px] w-full pb-3 border-2 border-slate-200 rounded-lg cursor-pointer">
              <img src={item.image[0].secure_url} className="w-full h-48 object-cover object-center rounded-t-lg" />
              <div className="px-2 pt-1 pb-4 flex flex-col gap-1">
                <p className="text-sm">{item.name.length > 48 ? item.name.substring(0, 40) + '...' : item.name}</p>
                <p className="font-bold">{formatPrice(item.price)}</p>
                <p className="text-slate-500 text-sm ">Surabaya</p>
                <div className="flex gap-1">
                  <img src={svg.star} width={12} height={12} />
                  <p className="text-slate-500 text-sm ">{item.rate}</p>
                  <p className="text-slate-500 text-sm ">| {item.sold} terjual</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default ModalCart