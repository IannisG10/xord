import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/react";

import axios from "axios";

interface orderType {
    orderId: number,
    clientName: string,
}

interface orderState{
    order: orderType[]
}

const initialState: orderState = {
    order: []
}

const saveOrder = createAsyncThunk(
    'saveOrder/order',
    async () => {
        axios.post("/order")
    }
)

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {

    }

})

export default orderSlice.reducer;
