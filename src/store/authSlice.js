import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    status: false,
    userData: null,
    Token: null
};

const authSlice = createSlice({
    name: "auth",
    initialState : initialState,
    reducers: {
        login: (state, action) => {
            let temp = action?.payload;
            state.status = true;
            if(temp){
                state.userData = temp.user;
                state.Token = temp.Token;
                localStorage.setItem("token", temp?.Token); // Corrected line
            }
        },
        updateaccount : (state , action) =>{
            state.userData.gender = action.payload.gender;
            state.userData.role = action.payload.role;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.Token = null;
            localStorage.removeItem("token");
        }
    }
});

export const { login, updateaccount, logout } = authSlice.actions;
export default authSlice.reducer;