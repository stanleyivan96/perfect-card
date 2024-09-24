import { ThemeToggle } from "@/components/ThemeToggle";
import SignUpForm from "../components/SignUpForm";
import Image from "next/image";
import logo from "../images/logo.svg"

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src={logo}
            alt="Next.js logo"
            width={250}
            height={50}
            priority
          />
          <h1 className="font-display text-4xl/tight font-light dark:text-white">
            Find your Perfect Credit Card{' '}
            <span className="text-sky-300">using Artificial Intelligence</span>
          </h1>
          <p className="text-sm/6 dark:text-gray-300">
            A user-centric website that helps you simplifies the process of finding the perfect credit card. Sign up to get latest updates.
          </p>
          <SignUpForm />
        </main>
      </div>
    </>
  );
}
