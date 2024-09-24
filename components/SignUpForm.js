'use client';

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./Button";

export default function SignUpForm() {
  const [state, handleSubmit] = useForm("mvgpjlqk");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }    

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative isolate flex items-center pr-1"
    >
      <input
        required
        type="email" 
        autoComplete="email"
        name="email"
        id="email" 
        placeholder="Email address"
        className="peer flex-auto bg-transparent px-4 py-2.5 text-base dark:text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6" 
      />
      <Button 
        type="submit" 
        disabled={state.submitting}
        arrow
      >
        Get Updates
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-gray-500 transition peer-focus:ring-sky-300" />
    </form>
  );
}