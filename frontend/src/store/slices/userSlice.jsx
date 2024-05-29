import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user_details",
    initialState: {
        isLoggedIn: false,
        userData: {},
    },
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = true;
            state.userData = action.payload.data[0];
        }
    }
})

export default userSlice.reducer;
export const { logIn } = userSlice.actions;