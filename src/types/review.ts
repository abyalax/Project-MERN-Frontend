export interface Review {
    name: string
    comment: string
    like: number
    createdAt: Date
    sellerReply: {
        text: string
        createdAt: Date
    }
}