import { Condition } from "../../types/products"

interface Params {
    nameStore: string
    name: string
    description: string
    price: number
    category: string
    etalase: string
    stock: number
    condition: Condition
    minOrder: number
    image: { secure_url: string }[]
}

export const CreateProduct = async (form: Params) => {
    const response = await fetch('http://localhost:4000/api/store/create-product', {
        method: "post",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nameStore: form.nameStore,
            name: form.name,
            description: form.description,
            price: form.price,
            category: form.category,
            etalase: form.etalase,
            stock: form.stock,
            condition: form.condition,
            minOrder: form.minOrder,
            image: form.image
        })
    })
    const data = await response.json();
    console.log("Response after service Create Product: ",data);
    return data
}

export interface FilterParams {
    key: string
    value: string
  }

export const GetProducts = async (filter?: FilterParams) => {
    if (!filter) {
        const response = await fetch("http://localhost:4000/api/products", {
            method: "get",
            credentials: "include",
        })
        const data = await response.json();
        return data
    }
    const response = await fetch(`http://localhost:4000/api/products/filter?${filter.key}=${filter.value}`, {
        method: "get",
        credentials: "include",
    })
    const data = await response.json();
    return data
}

export const GetProductsByID = async (id: string) => {
    const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: "get",
        credentials: "include",
    })
    const data = await response.json();
    return data
}