import { zodResolver } from "@hookform/resolvers/zod";
import { createPortal } from "react-dom";
import { FormProvider, useForm } from "react-hook-form";

import { SignupFormButtons } from "./signup-form-buttons";
import { SignupFormContent } from "./signup-form-content";
import { SignupFormToast } from "./signup-form-toast";

import { useSignupFormStore } from "../../../store/signup-form-store";
import { SignupFormInitialValues, SignupFormInputNames } from "../../../utils/constants";
import { SignupFormSchema, SignupFormSchemaType } from "../../../utils/schemas/signup-form-schema";

export const SignupForm = () => {
  const { step, username, setSignupToastStatus } = useSignupFormStore();
  const inputName = SignupFormInputNames[step];

  const form = useForm<SignupFormSchemaType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: SignupFormInitialValues,
  });

  const submit = (data: SignupFormSchemaType) => {
    console.log(data);
    setSignupToastStatus(true);
  };

  return (
    <div className="mt-10 flex w-full flex-col items-center">
      {username ? <p>Welcome {username}. Please, fill in your details. 🧡</p> : <p>Welcome, Guest!</p>}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <div className="mt-6 flex w-[280px] flex-col gap-4">
            <SignupFormContent inputName={inputName} />
            <SignupFormButtons inputName={inputName} form={form} />
          </div>
        </form>
        {createPortal(<SignupFormToast />, document.body)}
      </FormProvider>
    </div>
  );
};
