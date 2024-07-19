import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestCampers } from "../../services/api";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
        const data = await requestCampers(page, limit);
        return { items: data, page };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
