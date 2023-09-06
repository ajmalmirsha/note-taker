import { PayloadAction, createSlice } from '@reduxjs/toolkit'


const initialState:NoteState = {
    id: "",
    title: "",
    content: "",
    category: "",
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setNoteDetails: (state:NoteState, action: PayloadAction<{ id: string; title: string; content: string; category: string }>) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.category = action.payload.category;
        }
    }
})

export const { setNoteDetails } = noteSlice.actions;
export default noteSlice.reducer;