"use client";
import { useSession } from "next-auth/react";
import Logout from "../components/Logout";

export default function Private() {
  // const { data: session } = useSession();
  // console.log(session);
  return (
    <div>
      <h1 className="text-white">Private page!!!</h1>
      <Logout />
    </div>
  );
}
