import { Condition } from "../../types";

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