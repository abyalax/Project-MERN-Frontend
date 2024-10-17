import { origin } from "../../utils/constant"

interface Params {
    phone: string
    store: string
    domain: string
    address: {
        provincy: string
        regency: string
        municipality: string
        village: string
        kodePost: string
    },
}

export const CreateStore = async (form: Params) => {
    const response = await fetch(`${origin}/api/store/create-store`, {
        method: "post",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: form.phone,
            store: form.store,
            domain: form.domain,
            address: {
                provincy: form.address.provincy,
                regency: form.address.regency,
                municipality: form.address.municipality,
                village: form.address.village,
                kodePost: form.address.kodePost,
            },
        })
    })
    const data = await response.json();
    return data
}

export const GetStores = async () => {
    const response = await fetch(`${origin}/api/user/stores`, {
        method: "get",
        credentials: "include",
        mode: "cors", 
    })
    const data = await response.json();
    return data
}

export const GetStoresByID = async (storeId: string) => {
    const response = await fetch(`${origin}/api/user/stores/${storeId}`, {
        method: "get",
        credentials: "include",
        mode: "cors", 
    })
    const data = await response.json();
    return data
}