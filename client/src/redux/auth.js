import {createSlice} from '@reduxjs/toolkit' 


export const authSlice = createSlice({

    name:'auth',
    initialState:{
        isLoggedIn:false
    },
    reducers:{
        signup: async(state)=>{
            state.isLoggedIn  = true
        },
        login: (state,action)=>{
            console.log(action.payload)
        }
    }
})

export const {signup,login} = authSlice.actions;
export default authSlice.reducer;