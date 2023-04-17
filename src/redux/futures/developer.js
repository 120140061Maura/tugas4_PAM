import { createSlice } from '@reduxjs/toolkit'

const developerInit = {
    name: "Maura Diviarani",
}

export const developer = createSlice({
    name: "developer",
    initialState: {...developerInit},
    reducers: {
        //
    }
})

export default developer.reducer;