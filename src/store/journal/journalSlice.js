import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes: [],
        destinatarios: "",
        articulos: '',
        direcciones: '',
        //active: null,
        //active:{
        //    id:1234,
        //    title:'',
        //    body:'',
        //    date:'',
        //}
    },
    reducers: {
        savingNewNote:(state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            //AGREGADOO
            state. savedMessage= ''
        },
        setNotes: (state, action) => {
            state.notes =action.payload
        },
        setSaving: (state) => {
            //AGREGADOO
            state.isSaving = true;
        },
        //AGREGADOO
        updateNotes: (state, action) => {
            //AGREGADOO
            state.isSaving = false ;
            state.notes = state.notes.map(note =>{
                if( note.id === action.payload.id){
                    return action.payload;
                }
                return note;
            })
            //AGREGADOO
            state.savedMessage= `${action.payload.title}, actualizado correctamente`
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.savedMessage ="";
            state.notes =[];
            state.active = null;
        },
        deleteNoteById: (state, action) =>{

        }

    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNotes,
    deleteNoteById,
    savingNewNote,
    clearNotesLogout
} = journalSlice.actions;