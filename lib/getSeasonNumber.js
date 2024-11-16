import { headers } from "next/headers";

export default function getSeasonNumber() {
  const headersList = headers();
  const seasonNumber = headersList.get("params");
  return seasonNumber;
}
