import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";
import coverImage from "@/lib/coverImg";
import titleHandler from "@/lib/titleHandler";

export default function MainInfoContent({ infoData, id }) {
  const info = infoData && infoData;
  return (
    <div>
      <BackToHomeBtn />
      <h1 className="text-white">{titleHandler(info.title)}</h1>
      {/* <CoverImage cover={coverImage(info)} /> */}
      {/* <InfoDetails info={info} id={id} /> */}
    </div>
  );
}
