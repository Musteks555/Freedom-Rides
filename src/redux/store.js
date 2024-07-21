import { configureStore } from "@reduxjs/toolkit";

import { campersReducer } from "./campers/slice";
import { modalReducer } from "./modal/slice";

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        modal: modalReducer,
    },
});
