import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";
import coverImage from "@/lib/coverImg";

export default function MainInfoContent({ infoData, searchParams }) {
  const info = infoData && infoData;
  return (
    <div>
      <BackToHomeBtn />
      <CoverImage cover={coverImage(info)} />
      <InfoDetails info={info} searchParams={searchParams} />
    </div>
  );
}
