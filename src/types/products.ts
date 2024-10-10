import { Review } from "./review"

export interface Product {
    _id: string
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

export interface Cart {
    productId: string
    name: string
    nameStore: string
    image: { secure_url: string }
    quantity: number
    price: number
    liked: boolean
}