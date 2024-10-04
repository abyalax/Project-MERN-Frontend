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
    productId: number
    quantity: number
    price: number
    liked: boolean
}

export interface Address {
    recipient: string
    phone: string
    isMain: boolean
    state: string
    regency: string
    municipality: string
    village: string
    kodePost: string
}

export interface AddressStore {
    provincy: string
    regency: string
    municipality: string
    village: string
    kodePost: string
}

export interface Stores {
    userId: string
    store: string
    address: AddressStore
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