import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null

    },
    reducers:{
        SignIn:(state,actions)=>{
            console.log(actions.payload, 'payload');
           state.user=actions.payload

        },
        Logout:(state)=>{
            state.user=null
        }
        
    }

})

export const {SignIn,Logout}=userSlice.actions
export default userSlice.reducer