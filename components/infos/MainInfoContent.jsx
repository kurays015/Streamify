import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";

export default function MainInfoContent({ infoData, id }) {
  const info = infoData && infoData;
  return (
    <div>
      <BackToHomeBtn />
      <CoverImage cover={info.cover ? info.cover : info.image} />
      <InfoDetails info={info} id={id} />
    </div>
  );
}
