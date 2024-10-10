import { Address } from "./address"
import { Cart } from "./products"

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