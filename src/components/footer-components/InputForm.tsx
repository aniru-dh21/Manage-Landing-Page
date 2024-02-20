//shadcn
import { useState } from "react";
import { Button } from "../../@/components-shad/ui/button";
import { Input } from "../../@/components-shad/ui/input";
import InputFormError from "./InputFormError";
import InputSuccess from "./InputSuccess";

export default function InputForm() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const checkInputValue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputValue) {
      setError("Your input is empty");
      return false;
    }
    if (!emailRegex.test(inputValue)) {
      setError("Please insert a valid email");
      return false;
    }
    return true;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (checkInputValue()) {
      setSuccess("Success!");
      setError("");
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2">
        <Input
          type="email"
          placeholder="Updates in your inbox…"
          className="w-full rounded-2xl"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
          className="rounded-2xl bg-brightRed px-6 hover:opacity-70 hover:bg-brightRed transition duration-300 easy-in-out"
        >
          Go
        </Button>
      </div>
      {error && <InputFormError message={error} />}
      {success && <InputSuccess message={success} />}
    </div>
  );
}
