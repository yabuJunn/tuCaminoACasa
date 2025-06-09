import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        id: null,
        name: "",
        email: "",
        cedula: null,
        cellphone: null,
        created_at: ""
    },
    projects: [],
    documents: [],
    payments: [],
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = { ...action.payload.user };
        },
        setUserLogOut: (state) => {
            state.user = initialState.user;
        }, setUserProjects: (state, action) => {
            state.projects = action.payload;
        },
        setUserDocuments: (state, action) => {
            state.documents = action.payload;
        },
        setUserPayments: (state, action) => {
            state.payments = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    setUser,
    setUserLogOut,
    setUserProjects,
    setUserDocuments,
    setUserPayments,
    setError
} = mainSlice.actions;

export const store = configureStore({
    reducer: {
        main: mainSlice.reducer
    }
});
