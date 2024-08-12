import { FC } from "react";

import { useSignupFormStore } from "../../../store/signup-form-store";

interface SignupFormFinishedProps {
  className?: string;
}

export const SignupFormFinished: FC<SignupFormFinishedProps> = () => {
  const { username } = useSignupFormStore();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <div className="text-6xl">😇🎉</div>
      <div>Thank you for joining our team, {username}!</div>
      <div>We are glad to see You!</div>
      <a href="/" type="button" className="mt-3 rounded-md bg-[#98971A] px-4 py-2 text-[#202020] hover:opacity-80">
        Let's started
      </a>
    </div>
  );
};
