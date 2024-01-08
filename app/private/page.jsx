"use client";
import { signOut } from "next-auth/react";

export default function Private() {
  return (
    <div className="text-center">
      <h1 className="text-white">Private Page!</h1>
      <p className="text-white">wala pa haha busy pa, relax langg</p>
      <button onClick={() => signOut()} className="text-red-400">
        Logout
      </button>
    </div>
  );
}
