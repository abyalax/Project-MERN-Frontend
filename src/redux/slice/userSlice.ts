import { Cart } from './../../types/index';
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types";

interface UserState {
    data: User
}

const initialState: UserState = {
    data: {
        name: '',
        email: '',
        verifiedEmail: false,
        isLogin: false,
        phone: '',
        profileImage: '',
        role: 'user',
        address: [],
        carts: [],
        stores: []
    }
};

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        VerifyEmail: (state, action: PayloadAction<boolean>) => {
            state.data.verifiedEmail = action.payload
        },
        Register: (state, action: PayloadAction<{name: string, email: string}>) => {
            state.data.name = action.payload.name
            state.data.email = action.payload.email
        },
        Login: (state, action: PayloadAction<User>) => {
            state.data.isLogin = true
            state.data = action.payload
        },
        AddToCart: (state, action: PayloadAction<Cart>) => {
            const itemCart = state.data.carts.find(item => item.productId === action.payload.productId)
            if (itemCart) {
                itemCart.quantity += action.payload.quantity
            } else {
                state.data.carts.push(action.payload)
            }
        }
    }
});

export const { VerifyEmail, Login, Register, AddToCart } = UserSlice.actions;
export default UserSlice.reducer;


