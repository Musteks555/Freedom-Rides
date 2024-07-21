import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchFavoritesCampers } from "./operations";

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
};

const handleFulfilled = (state) => {
    state.loading = false;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        favorites: [],
        loading: false,
        error: null,
        currentPage: 1,
        hasLoaded: false,
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter((item) => item._id !== action.payload);
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.items = [...state.items, ...action.payload.items];
                state.currentPage = action.payload.page;
                state.hasLoaded = true;
            })
            .addCase(fetchCampers.rejected, handleRejected)

            .addCase(fetchFavoritesCampers.pending, handlePending)
            .addCase(fetchFavoritesCampers.fulfilled, (state, action) => {
                handleFulfilled(state);
                const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
                state.favorites = action.payload.items.filter((item) => favorites.includes(item._id));
            })
            .addCase(fetchFavoritesCampers.rejected, handleRejected),
});

export const { setPage, removeFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
