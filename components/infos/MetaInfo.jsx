import MainInfoContent from "./MainInfoContent";
import WatchAndInfoError from "../WatchAndInfoError";
import { getInfoData } from "@/lib/getInfoData";

export default async function MetaInfo({ id, searchParams }) {
  const info = await getInfoData(id, searchParams);

  if (!info) return <WatchAndInfoError />;

  return <MainInfoContent info={info} searchParams={searchParams} />;
}
