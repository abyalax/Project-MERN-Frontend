import { Link, useLocation } from "react-router-dom";
import Sidebar from "../fragments/sidebar"
import { svg } from "../../assets"
import Navbar from "../fragments/navbar";

type Props = {
  children: React.ReactNode
}
const Userlayouts = (props: Props) => {
  const { children } = props

  const location = useLocation()
  const pathname = location.pathname

  const routes = [
    {
      href: '/user/settings',
      label: "Biodata Diri",
      active: pathname === '/user/settings'
    },
    {
      href: '/user/settings/address',
      label: "Daftar Alamat",
      active: pathname === '/user/settings/address',
    },
    {
      href: '/user/settings/payment',
      label: "Pembayaran",
      active: pathname === '/user/settings/payment',
    },
    {
      href: '/user/settings/bank',
      label: "Rekening Bank",
      active: pathname === '/user/settings/bank',
    },
    {
      href: '/user/settings/notification',
      label: "Notifikasi",
      active: pathname === '/user/settings/notification',
    },
    {
      href: '/user/settings/mode',
      label: "Mode Tampilan",
      active: pathname === '/user/settings/mode',
    },
    {
      href: '/user/settings/security',
      label: "Keamanan",
      active: pathname === '/user/settings/security',
    },
    {
      href: '/user/settings/google',
      label: "Google Authenticator",
      active: pathname === '/user/settings/google',
    },
  ]

  return (
    <>
      <Navbar />
      <section className="min-h-screen min-w-screen px-20 py-5">
        <div className="flex justify-between px-[1%]  gap-4">
          <Sidebar />
          <div className="w-[75%]">
            <div className="flex gap-2 my-4">
              <img src={svg.person} />
              <h2 className="font-bold text-lg text-slate-700">Selamat Datang, Abya</h2>
            </div>

            <div className="container mx-auto p-4 border-2 border-slate-200 rounded-lg">
              <div className="overflow-x-auto whitespace-nowrap border-b-2 border-slate-200" style={{ scrollbarWidth: "none" }}>
                <div className="grid grid-flow-col auto-cols-[minmax(110px,1fr)] gap-8 items-center font-bold text-slate-500 h-10">
                  {routes.map((route) => (
                    <Link to={route.href} className={`text-center inline-grid text-nowrap h-full ${route.active ? "text-[#00AA5B] border-b-[3px] border-[#00AA5B] font-bold" : ""}`}>{route.label}</Link>
                  ))}
                </div>
              </div>

              <div className="flex px-2 py-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Userlayouts;