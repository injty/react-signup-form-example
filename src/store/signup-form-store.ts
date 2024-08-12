import { create } from "zustand";

export type SignupFormStoreType = {
  step: number;
  username: string;
  password: string;
  email: string;
  signupToastStatus: boolean;
  signupStatus: boolean;
  updateUsername: (username: string) => void;
  updateStep: (step: number) => void;
  setSignupStatus: VoidFunction;
  setSignupToastStatus: (status: boolean) => void;
};

export const useSignupFormStore = create<SignupFormStoreType>((set) => ({
  step: 0,
  username: "",
  password: "",
  email: "",
  signupToastStatus: false,
  signupStatus: false,
  updateUsername: (username: string) => {
    set({ username: username });
  },
  updateStep: (step: number) => {
    if (step > 0 || step <= 2) {
      set({ step: step });
    }
  },
  setSignupStatus: () => {
    set({ signupStatus: true });
  },
  setSignupToastStatus: (status) => {
    set({ signupToastStatus: status });
  },
}));
