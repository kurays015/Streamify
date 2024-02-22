import Overlay from "../Overlay";
import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";

export default function MainInfoContent({ infoData }) {
  const info = infoData && infoData;
  return (
    <div className="h-screen inset-0 relative">
      <BackToHomeBtn />
      <Overlay />
      <CoverImage cover={info.cover} />
      <InfoDetails info={info} />
    </div>
  );
}
