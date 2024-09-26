'use client';

import { useId } from 'react'
import { useForm, ValidationError } from "@formspree/react";
import { Button } from '@/components/Button'

export default function SignUpForm() {
  const [state, handleSubmit] = useForm("mvgpjlqk");
  let id = useId()

  if (state.succeeded) {
    return (
      <p className="text-sm/6 dark:text-gray-300">
        Thanks for your submission!
      </p>
    )
  }    

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative isolate flex items-center pr-1"
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder="Email address"
        className="peer w-full flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
      />
      <Button 
        type="submit" 
        arrow
        disabled={state.submitting}
      >
        Get Updates
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-gray-500 transition peer-focus:ring-sky-300" />
    </form>
  );
}