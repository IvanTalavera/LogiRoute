import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        ordentotal: new Map()
    },
    reducers: {
        login: (state, {payload}) => {
            state.status= 'authenticated',
            state.uid= payload.uid;
            state.email= payload.email;
            state.displayName= payload.displayName;
            state.photoURL= payload.photoURL;
            state.errorMessage= null;  
            state.ordentotal = []
        },
        logout: (state, {payload}) =>{
            state.status= 'no-authenticated',
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload?.errorMessage;
            state.ordentotal = []
        },
        checkingCredentials: (state) =>{
            state.status = 'checking'
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;