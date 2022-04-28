import {createSlice} from '@reduxjs/toolkit' 


export const authSlice = createSlice({

    name:'auth',
    initialState:{
        isLoggedIn:false
    },
    reducers:{
        signup: (state)=>{
            state.isLoggedIn  =true
        },
        login: (state)=>{
            state.isLoggedIn  =true

        }
    }
})

export const {signup,login} = authSlice.actions;
export default authSlice.reducer;