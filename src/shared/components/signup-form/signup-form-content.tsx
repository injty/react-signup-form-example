import { FC } from "react";
import { SignupFormInput } from "./signup-form-input";

interface SignupFormContentProps {
  inputName: string;
}

export const SignupFormContent: FC<SignupFormContentProps> = ({ inputName }) => <SignupFormInput inputName={inputName} />;
