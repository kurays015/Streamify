import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";
import coverImage from "@/lib/coverImg";
import Title from "./Title";

export default function MainInfoContent({ infoData, id }) {
  const info = infoData && infoData;
  return (
    <div>
      <BackToHomeBtn />
      <Title info={info} />
      {/* <CoverImage cover={coverImage(info)} /> */}
      {/* <InfoDetails info={info} id={id} /> */}
    </div>
  );
}
