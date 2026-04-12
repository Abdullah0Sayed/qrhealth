import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../i18n";
import Cookies from "js-cookie";

const languageSlice = createSlice({
  name: "languageSlice",
  initialState: i18n.language || "ar",
  reducers: {
    setWebLang: (state, action) => {
      const lang = action.payload;

      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
      Cookies.set("lang", lang);
      return lang;
    },

    getWebLang: (state) => {
      return state;
    },
  },
});

/* ----- Import Actions ----- */
export const { setWebLang, getWebLang } = languageSlice.actions;
/* ----- Import Reducers ----- */
export default languageSlice.reducer;
