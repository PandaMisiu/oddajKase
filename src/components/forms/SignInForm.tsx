import { useState } from "react";
import MainBtn from "../buttons/MainBtn";
import InputField from "../inputs/InputField";

type Props = {
  onForgot: () => void;
};

export default function SignInForm({ onForgot }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="button"
        onClick={onForgot}
        className="text-sm font-bold text-[#4e635a] hover:text-[#4e635a]/70 transition-colors self-end -mt-1"
      >
        Forgot password?
      </button>

      <MainBtn
        name="Sign in"
        className="w-full mt-1 py-4 text-base rounded-2xl"
      />
    </form>
  );
}
