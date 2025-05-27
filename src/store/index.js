import { configureStore, createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
    name: "main",
    initialState: {
        isLogged: false,
        user: null,
        token: null,
        loading: false,
        error: null
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLogged = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.isLogged = false;
            state.user = null;
            state.token = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        main: mainSlice.reducer
    }
});