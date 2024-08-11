import { SignupForm } from "./shared/components";

export const App = () => {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-20 items-center justify-center bg-[#202020]">
        header
      </header>
      <main className="flex flex-1">
        <SignupForm />
      </main>
      <footer className="flex items-center justify-center bg-[#2a2d2e]">
        footer
      </footer>
    </div>
  );
};
