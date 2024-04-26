import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isVerified:false,
    user:null,
    accessToken:null
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLogin(state,action){
            state.user=action.payload.user;
            state.accessToken=action.payload.accessToken;
        },
        setLogout(state){
            state.user=null;
            state.isVerified=false;
            state.accessToken=null;
        },
        setIsVerified(state,action){
            state.isVerified=true;
        }
    }
})

export const selectUser= state=> state.auth.user;
export const selectAccessToken=state=>state.auth.accessToken;
export const selectIsVerified = state => state.auth.isVerified;
export const {setLogin, setLogout, setIsVerified}=authSlice.actions;
export default authSlice.reducer;