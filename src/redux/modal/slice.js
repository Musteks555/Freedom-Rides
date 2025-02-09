import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        camper: null,
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.camper = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.camper = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
