import { useState } from "react";
import LeftBox from "./LeftBox";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function Auth(params) {
  let [form, setForm] = useState("login");
  return (
    <div className="min-h-screen py-2 custom-container grid grid-cols-1 md:grid-cols-2 items-center gap-3 text-gray text-sm">
      <div className="relative ">
        <SignupForm onForm={setForm} form={form} />
        <LoginForm onForm={setForm} form={form} />
      </div>
      <LeftBox />
    </div>
  );
}
