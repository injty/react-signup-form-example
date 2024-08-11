import { create } from "zustand";

export type SignupFormStoreType = {
  step: number;
  username: string;
  password: string;
  email: string;
  updateUsername: (username: string) => void;
  updateStep: (step: number) => void;
};

export const useSignupFormStore = create<SignupFormStoreType>((set) => ({
  step: 0,
  username: "",
  password: "",
  email: "",
  updateUsername: (username: string) => {
    set({ username: username });
  },
  updateStep: (step: number) => {
    if (step > 0 || step <= 2) {
      set({ step: step });
    }
  },
}));
