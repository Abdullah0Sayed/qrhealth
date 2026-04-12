import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../toolkit/features/lang/languageSlice";

export const store = configureStore({
  reducer: {
    webLanguage: languageReducer,
  },
});
