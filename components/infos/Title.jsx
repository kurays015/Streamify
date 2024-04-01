"use client";

import titleHandler from "@/lib/titleHandler";

export default function Title({ info }) {
  console.log(info, "TITLE !");
  return <div>{titleHandler(info.title)}</div>;
}
