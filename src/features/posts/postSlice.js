import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    id: nanoid(),
    title: "Test",
    content: "This is a test"
}


export const posterSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action) =>{
            state.push(action.payload);
        }
    }
})

export const { addPost } = posterSlice.actions;
export default posterSlice.reducer;