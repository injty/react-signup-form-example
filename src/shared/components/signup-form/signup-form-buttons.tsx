import { FC } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { useSignupFormStore } from "../../../store/signup-form-store";
import { SignupFormSchemaType } from "../../../utils/schemas/signup-form-schema";

interface SignupFormButtonsProps {
  inputName: string;
  // eslint-disable-next-line
  form: UseFormReturn<SignupFormSchemaType, any>;
}

export const SignupFormButtons: FC<SignupFormButtonsProps> = ({ inputName, form }) => {
  const { step, updateUsername, updateStep } = useSignupFormStore();

  const getPreviousStep = () => {
    updateStep(step - 1);
  };

  const getNextStep = async () => {
    const res = await form.trigger(inputName as keyof SignupFormSchemaType);
    if (!res) return;

    updateStep(step + 1);
    if (step === 0) {
      updateUsername(form.watch("username"));
    }
  };

  return (
    <div className="flex flex-row gap-4">
      {step > 0 && (
        <button
          onClick={getPreviousStep}
          className="group mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-[#d79921] px-2 py-2 text-[#202020] shadow-sm"
          type="button"
        >
          <ArrowLeft size={16} color="#202020" className="transition-all group-hover:-translate-x-1" />
          Prev
        </button>
      )}

      {step < 2 && (
        <button
          onClick={getNextStep}
          className="group mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-[#d79921] px-2 py-2 text-[#202020] shadow-sm"
          type="button"
        >
          Next
          <ArrowRight size={16} color="#202020" className="transition-all group-hover:translate-x-2" />
        </button>
      )}

      {step === 2 && (
        <button className="t group mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-[#d79921] px-2 py-2 text-[#202020] shadow-sm" type="submit">
          Send
          <ArrowRight size={16} color="#202020" className="transition-all group-hover:translate-x-1" />
        </button>
      )}
    </div>
  );
};
