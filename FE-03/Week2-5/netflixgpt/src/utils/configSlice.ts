import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LanguageCode } from "../constants/constant";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en" as LanguageCode
    },
    reducers:{
        setLang:(state,action: PayloadAction<LanguageCode>)=>{
            state.lang=action.payload;
        }
    }
})

export const { setLang } = configSlice.actions;
export default configSlice.reducer;