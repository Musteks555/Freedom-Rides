import { createSlice } from "@reduxjs/toolkit";

import { fetchCampers } from "./operations";

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
};

const handleFulfilled = (state, action) => {
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
        loading: false,
        error: null,
        currentPage: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.items = [...state.items, ...action.payload.items];
                state.currentPage = action.payload.page;
            })
            .addCase(fetchCampers.rejected, handleRejected),
});

export const { setPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
