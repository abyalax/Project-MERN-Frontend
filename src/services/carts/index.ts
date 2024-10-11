import { Cart } from "../../types/products";

export const AddToCart = async (form: Cart) => {
    const response = await fetch('http://localhost:4000/api/user/carts', {
        method: "post",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId: form.productId,
            name: form.name,
            nameStore: form.nameStore,
            quantity: form.quantity,
            image: form.image,
            price: form.price,
            liked: form.liked
        })
    })
    const data = await response.json();
    console.log("Response after service add cart: ",data);
    return data
}

export const GetCarts = async () => {
    const response = await fetch('http://localhost:4000/api/user/carts', {
        method: "get",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await response.json();
    console.log("Response after service get cart: ",data);
    return data
}

export const DeleteCart = async (productId: string) => {
    const response = await fetch('http://localhost:4000/api/user/carts', {
        method: "delete",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId
        })
    })
    const data = await response.json();
    console.log("Response after service delete cart: ",data);
    return data
}

export const UpdateCartByID = async (cart: Cart) => {
    const response = await fetch('http://localhost:4000/api/user/carts', {
        method: "put",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart
        })
    })
    const reponse = await response.json();
    console.log("Response after service update cart: ",reponse);
    return reponse
}