import { Review } from "./review"

export interface Product {
    name: string
    nameStore: string
    description: string
    price: number
    category: string
    etalase: string
    stock: number
    sold?: number
    rate?: number
    discount?: number
    condition: Condition
    minOrder: number
    image: { secure_url: string }[]
    reviews?: Review[]
}

export enum Condition {
    NEW = 'new',
    USED = 'used',
}

export type ProductCart = {
    name: string
    image: { secure_url: string }[]
    price: number
    quantity: number
}