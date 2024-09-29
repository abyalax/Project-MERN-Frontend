import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

console.log("Initial State: ", store.getState())

store.subscribe(() => {
    console.log("Update State: ", store.getState());
});

export default store;
