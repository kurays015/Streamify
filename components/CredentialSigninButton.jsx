import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function CredentialSigninButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      aria-disabled={pending}
      type="submit"
      className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70"
    >
      {pending ? (
        <span className="flex items-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>Signing in...</span>
        </span>
      ) : (
        "Sign in"
      )}
    </Button>
  );
}
