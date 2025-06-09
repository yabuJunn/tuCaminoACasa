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
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    setUser,
    setUserLogOut,
    setError
} = mainSlice.actions;

export const store = configureStore({
    reducer: {
        main: mainSlice.reducer
    }
});
