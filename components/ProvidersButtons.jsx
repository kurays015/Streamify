import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

export default function LoginButtons() {
  return (
    <div className="text-white flex flex-col gap-3">
      <Button
        variant="outline"
        className="w-full flex gap-3 rounded-full hover:bg-indigo-200 transition-all duration-300 ease-in-out hover:text-slate-950"
        onClick={() => alert("Still fixing this shit")}
      >
        Sign in with <FaGoogle className="text-xl" />
      </Button>
      <Button
        variant="outline"
        className="w-full flex gap-3 rounded-full hover:bg-indigo-200 transition-all duration-300 ease-in-out hover:text-slate-950"
        onClick={() => signIn("github")}
      >
        Sign in with <FaGithub className="text-xl" />
      </Button>
    </div>
  );
}
