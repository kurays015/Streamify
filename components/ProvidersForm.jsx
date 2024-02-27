import { gitHub, google } from "@/actions/providers";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

export function Github() {
  return (
    <form action={gitHub}>
      <Button
        variant="outline"
        className="w-full flex gap-3 rounded-full hover:bg-indigo-200 transition-all duration-300 ease-in-out hover:text-slate-950"
        type="submit"
      >
        Sign in with <FaGithub className="text-xl" />
      </Button>
    </form>
  );
}

export function Google() {
  return (
    <form action={google}>
      <Button
        variant="outline"
        className="w-full flex gap-3 rounded-full hover:bg-indigo-200 transition-all duration-300 ease-in-out hover:text-slate-950"
        type="submit"
      >
        Sign in with <FaGoogle className="text-xl" />
      </Button>
    </form>
  );
}
