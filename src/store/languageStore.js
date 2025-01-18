// store/languageStore.js
import { create } from "zustand";

const useLanguageStore = create((set) => ({
  selectedLanguage: "usa",
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
}));

export default useLanguageStore;
