import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestAllCampers, requestCampers } from "../../services/api";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
        const data = await requestCampers(page, limit);
        return { items: data, page };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const fetchFavoritesCampers = createAsyncThunk("campers/fetchAllFavorites", async (_, thunkAPI) => {
    try {
        const data = await requestAllCampers();
        return { items: data };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
