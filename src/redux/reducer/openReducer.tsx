import { createSlice } from "@reduxjs/toolkit"

interface OpenState {
    open: boolean
}

const initialState: OpenState = {
    open: false
}

const openReducer = createSlice({
    name: 'open/openReducer',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.open = !state.open
        }
    }
})

export const {openMenu} = openReducer.actions
export default openReducer.reducer

