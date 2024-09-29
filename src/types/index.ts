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
    stores: Stores[]
}

export interface Cart {
    productId: number
    quantity: number
    price: number
    liked: boolean
}

export interface Address {
    recipient: string
    addressLine: string
    phone: string
    isMain: boolean
}

export interface Stores {
    storeId: string
    name: string
    address: string
    products: Product[]
}

export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string
    quantity: number
    sold: number
    rate: number
    discount: number
    condition: string
    minOrder: number
    image: string
    createdAt: Date
    updatedAt: Date
    reviews: Review[] 
}

export interface Review {
    name: string
    comment: string
    like: number
    createdAt : Date
    sellerReply: {
        text: string
        createdAt: Date
    }
}