import { createPortal } from "react-dom";
import { SignupForm, SignupFormFinished } from "./shared/components";
import { SignupFormToast } from "./shared/components/signup-form/signup-form-toast";
import { useSignupFormStore } from "./store/signup-form-store";

export const App = () => {
  const { signupStatus } = useSignupFormStore();

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-20 items-center justify-center bg-[#202020]">header</header>
      <main className="flex flex-1 flex-col items-center gap-4">
        {signupStatus ? <SignupFormFinished /> : <SignupForm />}
        {createPortal(<SignupFormToast />, document.body)}
      </main>
      <footer className="flex items-center justify-center bg-[#2a2d2e]">footer</footer>
    </div>
  );
};
