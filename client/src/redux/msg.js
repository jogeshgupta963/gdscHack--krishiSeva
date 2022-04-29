import {createSlice} from '@reduxjs/toolkit' 


export const msgSlice = createSlice({

    name:'msg',
    initialState:{
        message:""
    },
    reducers:{
        outputMessage: (state,action)=>{
            state.message = action.payload;
        }
    }
})

export const {outputMessage} = msgSlice.actions;
export default msgSlice.reducer;