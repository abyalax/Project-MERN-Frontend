import { Condition } from "../../types/products"
import { origin, token } from "../../utils/constant"

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
    const response = await fetch(`${origin}/api/store/create-product`, {
        method: "post",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
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
    console.log(origin, "From get product services");
    
    if (!filter) {
        const response = await fetch(`${origin}/api/products`, {
            method: "get",
            credentials: "include",
        })
        const data = await response.json();
        return data
    }
    const response = await fetch(`${origin}/api/products/filter?${filter.key}=${filter.value}`, {
        method: "get",
        credentials: "include",
        mode: "cors", 
    })
    const data = await response.json();
    return data
}

export const GetProductsByID = async (id: string) => {
    const response = await fetch(`${origin}/api/products/${id}`, {
        method: "get",
        credentials: "include",
        mode: "cors", 
    })
    const data = await response.json();
    return data
}