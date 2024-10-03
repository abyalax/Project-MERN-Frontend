import { useState } from "react";
import { svg } from "../../assets";
import Dropdown from "../fragments/dropdown";

interface InputSelectProps {
    ID: string;
    label: string
    defaultValue: string
    type: string
    onSetAddress: (value: string, type: string) => void
}

const InputSelect = ({ ID, label, defaultValue, onSetAddress, type }: InputSelectProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    // const [selectedOption, setSelectedOption] = useState(defaultValue);

    const [options] = useState([
        { value: "", label: "Silahkan cari Kota atau Kabupaten" },
        { value: "US", label: "United States" },
        { value: "CA", label: "Canada" },
        { value: "FR", label: "France" },
        { value: "DE", label: "Germany" },
        { value: "AG", label: "Kediri" },
    ]);
    // Filter options based on search term
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <p className="text-sm text-slate-500 font-semibold">{label}</p>
            <button
                className="text-start border border-gray-400 w-full my-1 p-3 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg"
                onClick={() => document.getElementById(ID)?.classList.toggle('hidden')} type="button">
                {defaultValue}
            </button>
            <Dropdown ID={ID} custom="w-full">
                <div className="p-3">
                    <div className="w-full relative">
                        <div className="flex items-center border border-gray-400 w-full my-1 py-2 px-3 rounded-lg">
                            <img src={svg.search} className="w-4 h-4 mr-2" alt="search icon" />
                            <input
                                type="text"
                                placeholder="Cari..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-grow focus:outline-none"
                            />
                        </div>
                        {searchTerm && (
                            <ul className="absolute z-10 bg-white border overflow-y-scroll max-h-56  border-gray-400 w-full rounded-lg shadow-lg">
                                {filteredOptions.map(option => (
                                    <li key={option.value} className="cursor-pointer p-2 hover:bg-gray-200"
                                        onClick={() => { onSetAddress(option.label, type); document.getElementById(ID)?.classList.add('hidden') }} >
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </Dropdown>
        </>
    );
};

export default InputSelect;
