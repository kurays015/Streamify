"use client";

import titleHandler from "@/lib/titleHandler";

export default function Title({ info }) {
  console.log(info, "TITLE !");
  return <div className="text-white">{titleHandler(info?.title)}</div>;
}
