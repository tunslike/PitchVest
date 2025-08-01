import { createSlice } from "@reduxjs/toolkit";

// const initial state 
const initialState = {
    appData: []
}

export const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        updateAppData: (state, action) => {
            state.appData = action.payload
        }
    }
});

export const {
    updateAppData
} = appSlice.actions;

export default appSlice.reducer;