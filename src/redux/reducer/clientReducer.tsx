import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ClientType } from "@/components/Client/Client";
import axios from "axios";

interface ClientState {
    client: ClientType[];
    status: boolean;
}

const initialState: ClientState = {
    client: [],
    status: false
}

export const fetchClient = createAsyncThunk(
    "fetchClient/client",
    async ()=> {
        try {
            const response = await axios.get("https://xord.onrender.com/client")
            return response.data
        } catch (err) {
            console.error("Impossible to fetch data",err)
        }
        
    }
)

const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder.addCase(fetchClient.pending,(state) => {
            state.status = false
        }).addCase(fetchClient.fulfilled,(state,action) => {
            state.status = true
            state.client = action.payload
        })
    }
})

export default clientSlice.reducer