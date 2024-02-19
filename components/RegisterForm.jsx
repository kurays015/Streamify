"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/models/register";
import handleRegister from "@/actions/register";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import RegisterError from "./RegisterError";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const router = useRouter();

  const onSubmit = async data => {
    try {
      //server action
      const user = await handleRegister(data);
      if (user) {
        router.push("/signin");
      }
    } catch (error) {
      console.log(error, "ERROR christ!");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-white"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            disabled={isSubmitting}
            placeholder="enter your username"
            id="username"
            {...register("username")}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-white"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            disabled={isSubmitting}
            placeholder="enter your password"
            id="password"
            {...register("password")}
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-white"
            >
              Confirm Password
            </label>
          </div>
          <input
            disabled={isSubmitting}
            placeholder="confirm your password"
            id="confirmPassword"
            {...register("confirmPassword")}
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
        </div>
        <RegisterError errors={errors} />
      </div>
      <div>
        <p className="text-gray-200 text-xs mb-2">
          Already have an account?
          <Link href="/signin" className="text-indigo-400 font-medium ml-1">
            Sign in
          </Link>
        </p>
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </span>
          ) : (
            "Register"
          )}
        </button>
      </div>
    </form>
  );
}
