import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../reducer/clientReducer";
import openReducer from "../reducer/openReducer";


const store = configureStore({
    reducer: {
        client: clientReducer,
        open: openReducer
    }
})

export default store

// Typage des hooks useSelector et useDispath
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
