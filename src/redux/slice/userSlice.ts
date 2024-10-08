import { AddressResponse } from './../../types/response';
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// import type { User } from "../../types";
import type { User } from "../../types/user";
import type { Cart } from '../../types/user';

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
        Register: (state, action: PayloadAction<{ name: string, email: string }>) => {
            state.data.name = action.payload.name
            state.data.email = action.payload.email
        },
        Login: (state, action: PayloadAction<boolean>) => {
            state.data.isLogin = action.payload
        },
        TrackAddress: (state, action: PayloadAction<AddressResponse>) => {
            const data = {
                recipient: state.data.name,
                phone: state.data.phone,
                isMain: false,
                state: action.payload.state,
                regency: action.payload.county,
                municipality: action.payload.municipality,
                village: action.payload.village,
                kodePost: action.payload.postcode
            }
            state.data.address.push(data)
        },
        RefreshData: (state, action: PayloadAction<User>) => {
            state.data = action.payload
            state.data.isLogin = true
        },
        CreateStore: (state, action: PayloadAction<string>) => {
            state.data.stores.push(action.payload)
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

export const { VerifyEmail, Login, Register, AddToCart, RefreshData, TrackAddress, CreateStore } = UserSlice.actions;
export default UserSlice.reducer;


