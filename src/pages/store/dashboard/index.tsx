import { useEffect, useState } from "react";
import Navbar from "../../../components/fragments/navbar";
import Modal from "../../../components/fragments/modal";
import { image } from "../../../assets";
import { GetStoresByID } from "../../../services/stores";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Stores } from "../../../types";

const DashboardStore = () => {
    const [showModal, setShowModal] = useState(false);
    const storeId = useSelector((state: RootState) => state.user.data.stores[1]);
    console.log("storeId from state store", storeId);

    const [store, setStore] = useState<Stores>();

    const getDetail = async (storeId: string) => {
        try {
            console.log("Try Fetch with storeId :",storeId);
            
            if (storeId !== undefined) {
                const response = await GetStoresByID(storeId)
                if (response.status === true) {
                    setStore(response.data)
                    console.log(response.data)
                }
                console.log(response)
            } else {
                console.log("storeId not found");
            }
        } catch (error) {
            console.log(error);
            console.error("Failed fetch Store data", error);
        }
    }
    useEffect(() => {
        getDetail(storeId)
        const timer = setTimeout(() => {
            console.log("Modal triggered");
            setShowModal(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [storeId]);

    return (
        <>
            <Navbar classname="fixed bg-white z-10" />
            <div className="pt-48 flex justify-center items-center">
                <h2 className="text-3xl">DashboardStore</h2>
            </div>
            {showModal && store && (
                <Modal>
                    <img src={image.haloStore} className="w-80" />
                    <h1 className="text-3xl">{`Halo ${store.store}, selamat datang di \n Tokopedia Seller`}</h1>
                    <p>{"Kelola toko jadi lebih mudah dengan tampilan baru.\n Pelajari dulu, yuk."}</p>
                </Modal>
            )}
        </>
    );
};

export default DashboardStore;
