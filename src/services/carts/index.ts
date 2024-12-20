import { Cart } from "../../types/products";
import { origin, token } from "../../utils/constant";

export const AddToCart = async (form: Cart) => {
    const response = await fetch(`${origin}/api/user/carts`, {
        method: "post",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
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
    console.log("Response after service add cart: ", data);
    return data
}

export const GetCarts = async () => {
    const response = await fetch(`${origin}/api/user/carts`, {
        method: "get",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
    })
    const data = await response.json();
    console.log("Response after service get cart: ", data);
    return data
}

export const DeleteCart = async (productId: string) => {
    const response = await fetch(`${origin}/api/user/carts`, {
        method: "delete",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            productId
        })
    })
    const data = await response.json();
    console.log("Response after service delete cart: ", data);
    return data
}

export const UpdateCartByID = async (cart: Cart) => {
    const response = await fetch(`${origin}/api/user/carts`, {
        method: "put",
        credentials: "include",
        mode: "cors", 
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            cart
        })
    })
    const reponse = await response.json();
    console.log("Response after service update cart: ", reponse);
    return reponse
}