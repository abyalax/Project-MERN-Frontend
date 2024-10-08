import Category from "../components/fragments/category";
import { svg } from "../assets";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/fragments/footer";
import Navbar from "../components/fragments/navbar";
import { useNavigate } from "react-router-dom";
import { GetProducts } from "../services/products";
import { ToasterContext } from "../context/toaster-context";
import { Product } from "../types/products";

const Home = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [filterProduct, setFilterProduct] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { setToaster } = useContext(ToasterContext);

  const fetchData = async () => {
    try {
      const response = await GetProducts();

      if (response.statusCode === 200) {
        setProduct(response.data);
        setFilterProduct(response.data); // Update filterProduct after fetching products
      } else {
        const message =
          response.statusCode === 404
            ? "No Product Found"
            : "Internal Server Error";
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
    return () => setProduct([]); // Clean up
  }, []);

  const filterProducts = (category: string) => {
    const filtered = category === 'All' ? product : product.filter((item) => item.category === category);
    setFilterProduct(filtered);
    console.log(filtered); // Log the filtered products
  };

  const formatURL = (item: string) => {
    return item.trim().replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <>
      <Navbar />
      <Category />
      <section className="px-40 py-10 border-t-8 border-slate-200">
        <div className="flex gap-3">
          <button onClick={() => filterProducts('Sneaker')} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg">Sneakers</button>
          <button onClick={() => filterProducts('Komputer')} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-green-800 to-green-500 rounded-lg">Komputer</button>
          <button onClick={() => filterProducts('software')} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-pink-900 to-pink-500 rounded-lg">Software</button>
          <button onClick={() => filterProducts('All')} className="pt-2 pb-8 mb-4 px-6 text-white font-semibold bg-gradient-to-r from-cyan-800 to-cyan-600 rounded-lg">Mirip yang kamu cek</button>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {filterProduct.map((item) => (
            <div onClick={() => navigate(`/${formatURL(item.nameStore)}/${formatURL(item.name)}`)} key={item.name} className="h-[330px] w-full pb-3 border-2 border-slate-200 rounded-lg cursor-pointer">
              <img src={item.image[0].secure_url} className="w-full h-48 object-cover object-center rounded-t-lg" />
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