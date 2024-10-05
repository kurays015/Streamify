import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";
import coverImage from "@/lib/coverImg";

export default function MainInfoContent({ infoData, id }) {
  const info = infoData && infoData;
  return (
    <div>
      <BackToHomeBtn />
      {/* <CoverImage cover={coverImage(info)} /> */}
      {/* <InfoDetails info={info} id={id} /> */}
    </div>
  );
}
