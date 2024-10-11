import Category from "../components/fragments/category";
import { svg } from "../assets";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/fragments/footer";
import Navbar from "../components/fragments/navbar";
import { useNavigate } from "react-router-dom";
import { FilterParams, GetProducts } from "../services/products";
import { ToasterContext } from "../context/toaster-context";
import { Product } from "../types/products";
import { formatPrice } from "../utils";
import { getAddressFromCoordinates } from "../services/address";
import { AddressResponse } from "../types/response";
import { useAppDispatch } from "../redux/hooks";
import { TrackAddress } from "../redux/slice/userSlice";

const Home = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { setToaster } = useContext(ToasterContext);

  const fetchData = async (filter? : FilterParams) => {
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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddressFromCoordinates(latitude, longitude).then((address: AddressResponse) => {
            if (address) {
              dispatch(TrackAddress(address))
            } else {
              console.log("Data alamat tidak ditemukan.");
            }
          });
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const formatURL = (item: string) => {
    return item.trim().replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <>
      <Navbar />
      <Category />
      <section className="px-40 py-10 border-t-8 border-slate-200">
        <div className="flex gap-3">
          <button onClick={() => fetchData({key: "category",value: "Accessories"})} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg">Accessories</button>
          <button onClick={() => fetchData({key: "category",value: "Komputer"})} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-green-800 to-green-500 rounded-lg">Komputer</button>
          <button onClick={() => fetchData({key: "category",value: "software"})} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-pink-900 to-pink-500 rounded-lg">Software</button>
          <button onClick={() => fetchData()}className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-cyan-800 to-cyan-600 rounded-lg">Mirip yang kamu cek</button>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {product.map((item) => (
            <div onClick={() => navigate(`/${formatURL(item.nameStore)}/${item._id}`)} key={item.name} className="h-[330px] w-full pb-3 border-2 border-slate-200 rounded-lg cursor-pointer">
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
      </section>
      <Footer />
    </>
  )
}

export default Home