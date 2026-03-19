import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGpt:false
    },
    reducers:{
        setGpt:(state)=>{
            state.showGpt=!state.showGpt;
        }
    }
});

export const {setGpt}=gptSlice.actions;
export default gptSlice.reducer;