import React from "react";

interface InputProps {
    type: string
    placeholder?: string
    classname?: string
    children?: React.ReactNode
    w?: string
    defaultValue?: string | number
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ classname, onChange, placeholder, defaultValue, children, w = 'w-full', type }: InputProps) => {
    return (
        <div className={`${w} relative h-fit p-0 rounded-lg`}>
            <input defaultValue={defaultValue} type={type} onChange={(e) => onChange(e)} placeholder={placeholder} className={` ${classname} p-2 focus:outline-none border border-gray-400 w-full my-1 rounded-lg focus:ring-1 focus:ring-green-500 `} />
            {children}
        </div>
    )
};

export default Input;