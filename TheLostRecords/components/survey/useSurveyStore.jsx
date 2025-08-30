import { create } from "zustand";

export const useSurveyStore = create((set) => ({
  formData: {},
  setField: (name, value) =>
    set((state) => ({
      formData: { ...state.formData, [name]: value }
    })),
  submitSurvey: () => {
    // You can send to backend here
  },
  resetSurvey: () =>
    set(() => ({
      formData: {}
    }))
}));
