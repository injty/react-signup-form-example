import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { SignupFormContent } from "./signup-form-content";

import { useSignupFormStore } from "../../../store/signup-form-store";
import { SignupFormInitialValues, SignupFormInputNames } from "../../../utils/constants";
import { SignupFormSchema, SignupFormSchemaType } from "../../../utils/schemas/signup-form-schema";
import { SignupFormButtons } from "./signup-form-buttons";

export const SignupForm = () => {
  const { step, username } = useSignupFormStore();
  const inputName = SignupFormInputNames[step];

  const form = useForm<SignupFormSchemaType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: SignupFormInitialValues,
  });

  const submit = (data: SignupFormSchemaType) => {
    console.log(data);
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
      </FormProvider>
    </div>
  );
};
