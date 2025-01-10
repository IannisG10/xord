import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../reducer/clientReducer";

const store = configureStore({
    reducer: {
        client: clientReducer
    }
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
