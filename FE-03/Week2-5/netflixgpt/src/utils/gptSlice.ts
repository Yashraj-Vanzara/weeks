import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type GptMovie = {
    id: number;
    title: string;
    poster_path: string | null;
};

type GptState = {
    showGpt: boolean;
    movieResults: GptMovie[][] | null;
    movienames: string[] | null;
};

type AddGptMoviesPayload = {
    movienames: string[];
    movieResults: GptMovie[][];
};

const initialState: GptState = {
    showGpt: false,
    movieResults: null,
    movienames: null,
};

const gptSlice=createSlice({
    name:"gpt",
    initialState,
    reducers:{
        setGpt:(state)=>{
            state.showGpt=!state.showGpt;
        },
        addGptMovies:(state,action: PayloadAction<AddGptMoviesPayload>)=>{
            const {movienames,movieResults}=action.payload;
            state.movienames=movienames;
            state.movieResults=movieResults;
        }
    }
});

export const {setGpt,addGptMovies}=gptSlice.actions;
export default gptSlice.reducer;