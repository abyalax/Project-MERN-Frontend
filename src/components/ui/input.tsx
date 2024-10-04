import React from "react";

interface InputProps {
    type: string
    placeholder?: string
    classname?: string
    children?: React.ReactNode
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ classname, onChange, placeholder, children, type = "text" }: InputProps) => {
    return (
        <div className="relative border border-gray-400 w-full p-0">
            <input type={type} onChange={(e) => onChange(e)} placeholder={placeholder} className={` ${classname}  p-2 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-lg`} />
            {children}
        </div>
    )
};

export default Input;