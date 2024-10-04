import { image, svg } from "../../assets";
import { Stores } from "../../types";
import Routes from "../../assets/sidebar/routes";
import { Link } from "react-router-dom";

const SidebarSeller = ({ store }: { store?: Stores }) => {

    const data1 = Routes().part1
    const data2 = Routes().part2
    const data3 = Routes().part3

    return (
        <aside className="custom-scrollbar w-1/6 overflow-y-scroll fixed top-[110px] left-0 bottom-0 z-10 bg-white">
            <div className="">

            </div>
            <button className="w-full py-3 text-sm flex justify-center gap-2 items-center font-bold text-slate-600 border-b-2 border-slate-300">
                <img src={svg.chevronC} className="transform rotate-180" />
                Sembunyikan Menu
            </button>
            <div className="flex gap-3 py-4 px-2">
                <img src={image.profile} className="rounded-full w-12 h-12" />
                <div className="flex flex-col">
                    <h2 className="text-gray-900 font-bold">{store?.store}</h2>
                    <h2 className="text-slate-600 font-bold text-xs">Power Merchant</h2>
                </div>
            </div>
            {data1.map((route) => (
                <div key={route.name} className={`${route.active ? "border-l-4 border-[#00AA5B]" : ""} flex gap-2 hover:bg-slate-300 py-2 pl-4 w-full border-l-4 cursor-pointer`}>
                    {route.component}
                    <Link to={route.path} className={`font-semibold ${route.active ? "text-[#00AA5B]" : "text-gray-800"} text-sm`}>{route.name}</Link>
                </div>
            ))}
            <hr className="my-4 border-t-2 border-slate-300"/>
            {data2.map((route) => (
                <div key={route.name} className={`${route.active ? "border-l-4 border-[#00AA5B]" : ""} flex gap-2 hover:bg-slate-300 py-2 pl-4 w-full border-l-4 cursor-pointer`}>
                    {route.component}
                    <Link to={route.path} className={`font-semibold ${route.active ? "text-[#00AA5B]" : "text-gray-800"} text-sm`}>{route.name}</Link>
                </div>
            ))}
            <hr className="my-4 border-t-2 border-slate-300"/>
            {data3.map((route) => (
                <div key={route.name} className={`${route.active ? "border-l-4 border-[#00AA5B]" : ""} flex gap-2 hover:bg-slate-300 py-2 pl-4 w-full border-l-4 cursor-pointer`}>
                    {route.component}
                    <Link to={route.path} className={`font-semibold ${route.active ? "text-[#00AA5B]" : "text-gray-800"} text-sm`}>{route.name}</Link>
                </div>
            ))}
        </aside>
    )
};

export default SidebarSeller;