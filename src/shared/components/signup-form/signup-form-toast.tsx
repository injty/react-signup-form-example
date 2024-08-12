import { FC, useEffect } from "react";

import { useSignupFormStore } from "../../../store/signup-form-store";
import { cn } from "../../../utils";

export const SignupFormToast: FC = () => {
  const { signupToastStatus, setSignupToastStatus } = useSignupFormStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (signupToastStatus) setSignupToastStatus(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [signupToastStatus, setSignupToastStatus]);

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 rounded-lg bg-[#D79921] px-8 py-2 text-[#202020] transition-all duration-500",
        signupToastStatus ? "top-16" : "-top-1/2",
      )}
    >
      <div>Successful registration! 🎉</div>
    </div>
  );
};
