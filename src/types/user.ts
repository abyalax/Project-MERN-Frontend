import { Address } from "./address"

export interface User {
    name: string
    email: string
    verifiedEmail: boolean
    isLogin: boolean
    phone: string
    profileImage: string
    role: string
    address: Address[]
    carts: Cart[]
    stores: string[]
}

export interface Cart {
    productId: string
    quantity: number
    price: number
    liked: boolean
}