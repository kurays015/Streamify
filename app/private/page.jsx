import { signOut } from "next-auth/react";

export default function Private() {
  return (
    <div>
      <h1 className="text-white">Private Page!</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
