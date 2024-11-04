import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { image, svg } from "../../assets";
import Navbar from "../../components/fragments/navbar";
import Footer from "../../components/fragments/footer";
import { RefreshData, TrackAddress, CreateStore as CreateStoreAction } from "../../redux/slice/userSlice";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { CreateStore as CreateStoreService } from "../../services/stores";
import { getAddressFromCoordinates } from "../../services/address";
import { AddressResponse } from "../../types/response";
import InputSelect from "../../components/ui/input-select";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css"
import { useAppDispatch } from "../../redux/hooks";
import { ToasterContext } from "../../context/toaster-context";
import { token } from "../../utils/constant";

const CreateStore = () => {

  const dataUser = useSelector((state: RootState) => state.data)

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const isEffectRun = useRef(false);
  const navigate = useNavigate()
  const { setToaster } = useContext(ToasterContext)

  const [formState, setFormState] = useState({
    phone: "",
    store: "",
    domain: "",
    address: {
      provincy: dataUser?.address[0]?.state || "",
      regency: "",
      municipality: "",
      village: "",
      kodePost: "",
    },
  });

  useEffect(() => {
    setFormState({
      phone: dataUser?.phone || "",
      store: "",
      domain: "",
      address: {
        provincy: dataUser?.address[0]?.state || "",
        regency: dataUser?.address[0]?.regency || "",
        municipality: dataUser?.address[0]?.municipality || "",
        village: dataUser?.address[0]?.village || "",
        kodePost: dataUser?.address[0]?.kodePost || "",
      },
    });
  }, [dataUser]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [type]: e.target.value,
    });
  }

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    e.preventDefault();
    setFormState({
      ...formState,
      address: {
        ...formState.address,
        [type]: e.target.value
      }
    });
  }

  const onSetAddress = (value: string, type: string) => {
    setFormState({
      ...formState,
      address: {
        ...formState.address,
        [type]: value
      }
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await CreateStoreService(formState);
      if (response.status === true) {
        dispatch(CreateStoreAction(response.data._id));
        navigate("/store/success-create");
        setIsLoading(false);
      } else {
        alert("Failed to create store");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/auth/user", {
          method: "GET",
          credentials: "include",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await response.json();
        console.log(result);
        if (result.statusCode === 200) {
          dispatch(RefreshData(result.data));
          return;
        }
        if (result.statusCode === 401) {
          navigate("/auth/login")
          return
        }
        if (result.statusCode === 400) {
          setToaster({
            variant: "warning",
            message: "Something wrong with authentication"
          })
          return
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    let filledFields = 0;
    const { phone, address, domain, store } = formState
    if (phone !== "") filledFields += 1;
    if (store !== "") filledFields += 1;
    if (domain !== "") filledFields += 2;
    if (domain !== "" && store !== "" && phone !== "") {
      if (address.regency !== "" &&
        address.municipality !== "" &&
        address.village !== "" &&
        address.kodePost !== "") filledFields += 1;
    }
    setProgress(filledFields);
  }, [formState, progress]);

  useEffect(() => {
    if (isEffectRun.current) return;
    isEffectRun.current = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddressFromCoordinates(latitude, longitude).then((address: AddressResponse) => {
            if (address) {
              dispatch(TrackAddress(address))
            } else {
              console.error("Data alamat tidak ditemukan.");
            }
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [dispatch]);

  return (
    <>
      <Navbar classname="fixed bg-white z-10" />
      <div className="grid grid-cols-2 min-h-[80vh] px-16 pt-40">
        <div className="col-span-1 flex gap-4 flex-col justify-end items-center pl-12 pb-12">
          <h2 className="text-center max-w-[60%] mx-auto font-bold text-2xl">
            {openAddress ? "Lokasi semakin akurat, barang \n sampai semakin cepat" :
              "Nama toko yang unik, selalu \n terlihat menarik"}
          </h2>
          <p className="text-center max-w-[60%] mx-auto text-slate-500 text-sm font-semibold">
            {openAddress ? "Pastikan lokasimu sudah akurat, sehingga kurir \n mudah menjemput barangmu." :
              "Gunakan nama yang singkat dan sederhana agar \n tokomu mudah dingat pembeli."}
          </p>
          <img src={openAddress ? image.geoTokopedia : image.creStore} className="mx-auto w-[60%] " />
        </div>
        <div className="col-span-1 flex flex-col items-start justify-start p-8">
          <div className="border-2 border-slate-100 p-5 rounded-xl min-w-[90%]">
            <h2 className="mb-4">
              Halo, <b>{dataUser.name.split(" ")[0] || "User"}</b> ayo isi detail tokomu!
            </h2>

            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-start justify-center p-2 w-full">
              <div className="flex w-full">
                <div className="flex-col justify-center items-center pr-4">
                  {progress >= 1 ? (
                    <>
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <img src={svg.check} className="w-6 h-6" />
                      </div>
                      <hr className="h-full w-0 border-l-4 border-green-600 mx-auto" />
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                        <p className="text-white">1</p>
                      </div>
                      <hr className="h-full w-0 border-l-4 border-slate-300 mx-auto" />
                    </>
                  )}
                </div>
                {openAddress ? (
                  <div className="flex flex-col w-full mb-2">
                    <h2 className="text-slate-600 font-bold">Nomor HP</h2>
                    <p className="font-semibold mb-2">{formState.phone ? formState.phone : dataUser.phone}</p>
                  </div>
                ) : (
                  <div className="flex flex-col w-full">
                    <h2 className="text-lg font-bold">Masukkan No. HP-mu</h2>
                    <input type="number" defaultValue={formState.phone ? formState.phone : dataUser.phone} name="phone" maxLength={13} onChange={(e) => onChange(e, "phone")} className="border border-gray-400 w-full my-1 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                  </div>
                )}
              </div>

              <div className="flex w-full">
                <div className="flex-col justify-center items-center pr-4">
                  {progress >= 4 ? (
                    <>
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <img src={svg.check} className="w-6 h-6" />
                      </div>
                      <hr className="h-full w-0 border-l-4 border-green-600 mx-auto" />
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                        <p className="text-white">2</p>
                      </div>
                      <hr className="h-full w-0 border-l-4 border-slate-300 mx-auto" />

                    </>
                  )}
                </div>
                <div className="flex flex-col w-full relative">
                  {openAddress ? (
                    <>
                      <p className=" text-slate-600 font-bold">Nama Toko</p>
                      <p className=" font-semibold mb-2">{formState.store}</p>
                      <p className=" text-slate-600 font-bold">Nama Domain</p>
                      <p className=" font-semibold mb-2">{formState.domain}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-slate-500 font-semibold">Nama Toko</p>
                      <input type="text" name="domain" maxLength={60} onChange={(e) => onChange(e, "store")} defaultValue={formState.store} className="border border-gray-400 w-full my-1 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                      <p className="text-xs text-slate-500 font-semibold">Pastikan nama toko yang diisi sudah benar</p>
                      <p className="text-xs text-slate-500 font-semibold absolute top-20 right-2">12/60</p>
                      <p className="text-sm text-slate-500 font-semibold mt-4">Nama Domain</p>
                      <div className="flex gap-2 items-center relative">
                        <p className="text-slate-500 font-semibold">Tokopedia.com/</p>
                        <input type="text" name="domain" maxLength={24} defaultValue={formState.domain} onChange={(e) => onChange(e, "domain")} className="border border-gray-400 w-full my-3 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                        <p className="text-xs text-slate-500 font-semibold absolute top-[68px] right-2">12/24</p>
                      </div>
                    </>
                  )}
                  <button type="button" disabled={progress < 4} onClick={() => setOpenAddress(!openAddress)} className="bg-[#00AA5B] text-white px-auto py-2 w-1/4 rounded-lg font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-white text-sm">{openAddress ? "Kembali" : "Selanjutnya"}</button>
                </div>
              </div>

              <div className="flex w-full">
                <div className="flex-col justify-center items-center pr-4">
                  {openAddress && (
                    progress >= 5 ? (
                      <>
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <img src={svg.check} className="w-6 h-6" />
                        </div>
                        <hr className="h-[82%] w-0 border-l-4 border-green-600 mx-auto" />
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <img src={svg.check} className="w-6 h-6" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                          <p className="text-white">3</p>
                        </div>
                        <hr className="h-[82%] w-0 border-l-4 border-slate-300 mx-auto" />
                        <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                          <p className="text-white">4</p>
                        </div>
                      </>
                    )
                  )
                  }
                </div>
                <div className="w-full relative flex flex-col">
                  {openAddress === true && (
                    <>
                      <h2 className="text-lg font-bold">Masukkan Alamat Tokomu</h2>
                      <div className="w-full relative">
                        <InputSelect ID="input-regency" type="regency" defaultValue={formState.address.regency} label="Kota/Kabupaten" onSetAddress={onSetAddress} />
                        <InputSelect ID="input-municipality" type="municipality" defaultValue={formState.address.municipality} label="Kecamatan" onSetAddress={onSetAddress} />
                        <InputSelect ID="input-village" type="village" defaultValue={formState.address.village} label="Desa" onSetAddress={onSetAddress} />

                        <p className="text-sm text-slate-500 font-semibold">Kode Post</p>
                        <input type="number" name="kodePost" defaultValue={dataUser.address[0].kodePost} maxLength={60} onChange={(e) => onChangeAddress(e, "kodePost")} className="border border-gray-400 w-full my-1 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg" />
                        <div className="flex gap-4 my-2">
                          <input type="checkbox" name="media" className="appearance-none custom-checkbox text-white" checked={accepted} onChange={() => setAccepted(!accepted)} />
                          <p className="text-sm text-slate-600 font-semibold">Saya menyetujui <Link to={""} className="text-green-600 text-end font-semibold text-sm">Syarat & Ketentuan</Link> serta <Link className="text-green-600 text-end font-semibold text-sm" to={""}>Kebijakan Privasi Tokopedia</Link></p>
                        </div>
                        <button type="submit" disabled={isLoading || !accepted} className="bg-[#00AA5B] text-white px-14 py-2 rounded-lg mt-4 font-semibold text-sm disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-white">{isLoading ? "Loading..." : "Lanjut"}</button>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateStore;