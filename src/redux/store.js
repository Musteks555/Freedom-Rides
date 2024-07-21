import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { campersReducer } from "./campers/slice";
import { modalReducer } from "./modal/slice";

const favConfig = {
    key: "favorite",
    storage,
    whitelist: ["favorites"],
};

export const store = configureStore({
    reducer: {
        // campers: campersReducer,
        modal: modalReducer,
        campers: persistReducer(favConfig, campersReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
