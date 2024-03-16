import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";

export default function MainInfoContent({ infoData, id }) {
  const info = infoData && infoData;
  return (
    <main>
      <BackToHomeBtn />
      <CoverImage cover={info.cover} />
      <InfoDetails info={info} id={id} />
    </main>
  );
}
