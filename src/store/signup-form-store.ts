import { create } from "zustand";

export type SignupFormStoreType = {
  step: number;
  username: string;
  password: string;
  email: string;
  signupToastStatus: boolean;
  updateUsername: (username: string) => void;
  updateStep: (step: number) => void;
  setSignupToastStatus: (status: boolean) => void;
  resetSignupToastStatus: VoidFunction;
};

export const useSignupFormStore = create<SignupFormStoreType>((set) => ({
  step: 0,
  username: "",
  password: "",
  email: "",
  signupToastStatus: false,
  updateUsername: (username: string) => {
    set({ username: username });
  },
  updateStep: (step: number) => {
    if (step > 0 || step <= 2) {
      set({ step: step });
    }
  },
  setSignupToastStatus: async () => {
    set({ signupToastStatus: true });
  },
  resetSignupToastStatus: () => {
    set({ signupToastStatus: false });
  },
}));
