import { useLocation } from "react-router-dom";
import { Home, Chat, Diskusi, Products, Pesanan, LineCharts, Performance, Iklan, Pallete, UserChat, Layanan, Store, Care, Setting } from ".";

interface RoutesType {
  path: string;
  name: string;
  active: boolean;
  component: JSX.Element;
}

const Routes = () => {
  const pathname = useLocation().pathname;

  // Semua rute yang dipecah menjadi 3 bagian
  const part1: RoutesType[] = [
    { 
      path: "/store/home", 
      name: "Home", 
      active: pathname === "/store/home", 
      component: <Home fill={pathname === "/store/home" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/chat", 
      name: "Chat", 
      active: pathname === "/store/chat", 
      component: <Chat fill={pathname === "/store/chat" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/diskusi", 
      name: "Diskusi", 
      active: pathname === "/store/diskusi", 
      component: <Diskusi fill={pathname === "/store/diskusi" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/products", 
      name: "Products", 
      active: pathname === "/store/products", 
      component: <Products fill={pathname === "/store/products" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/pesanan", 
      name: "Pesanan", 
      active: pathname === "/store/pesanan", 
      component: <Pesanan fill={pathname === "/store/pesanan" ? "#00AA5B" : "black"} /> 
    },
  ];

  const part2: RoutesType[] = [
    { 
      path: "/store/statistik", 
      name: "Statistik", 
      active: pathname === "/store/statistik", 
      component: <LineCharts fill={pathname === "/store/statistik" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/performance", 
      name: "Performa Toko", 
      active: pathname === "/store/performance", 
      component: <Performance fill={pathname === "/store/performance" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/iklan", 
      name: "Iklan dan Promosi", 
      active: pathname === "/store/iklan", 
      component: <Iklan fill={pathname === "/store/iklan" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/dekorasi", 
      name: "Dekorasi Toko", 
      active: pathname === "/store/dekorasi", 
      component: <Pallete fill={pathname === "/store/dekorasi" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/kata-pembeli", 
      name: "Kata Pembeli", 
      active: pathname === "/store/kata-pembeli", 
      component: <UserChat fill={pathname === "/store/kata-pembeli" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/faktur", 
      name: "Faktur Toko", 
      active: pathname === "/store/faktur", 
      component: <Pesanan fill={pathname === "/store/faktur" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/layanan", 
      name: "Layanan Tambahan", 
      active: pathname === "/store/layanan", 
      component: <Layanan fill={pathname === "/store/layanan" ? "#00AA5B" : "black"} /> 
    },
  ];

  const part3: RoutesType[] = [
    { 
      path: "/store/edukasi", 
      name: "Pusat Edukasi Seller", 
      active: pathname === "/store/edukasi", 
      component: <Store fill={pathname === "/store/edukasi" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/care", 
      name: "Bantuan Tokopedia Care", 
      active: pathname === "/store/care", 
      component: <Care fill={pathname === "/store/care" ? "#00AA5B" : "black"} /> 
    },
    { 
      path: "/store/pengaturan", 
      name: "Pengaturan", 
      active: pathname === "/store/pengaturan", 
      component: <Setting fill={pathname === "/store/pengaturan" ? "#00AA5B" : "black"} /> 
    },
  ];

  return { part1, part2, part3 };
};

export default Routes;
