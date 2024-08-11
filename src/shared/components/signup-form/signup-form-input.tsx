import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "../../../utils";

interface SignupFormInputProps {
  inputName: string;
  className?: string;
}

export const SignupFormInput: FC<SignupFormInputProps> = ({ className, inputName }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const value = watch(inputName);
  const error = errors[inputName]?.message as string;

  return (
    <div className="flex flex-col gap-2">
      <input
        className={cn("rounded-md bg-[#292929] px-2 py-2 text-[#EBDBB2] shadow-sm", className ? className : "")}
        {...register(inputName)}
        placeholder={inputName}
        value={value}
      />
      {error && <p className="text-sm text-[#CC241D]">{error}</p>}
    </div>
  );
};
