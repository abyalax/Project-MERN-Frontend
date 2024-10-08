import { Product } from "./products"

export interface Stores {
    userId: string
    store: string
    address: AddressStore
    products: Product[]
}

export interface AddressStore {
    provincy: string
    regency: string
    municipality: string
    village: string
    kodePost: string
}