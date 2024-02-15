import Overlay from "../Overlay";
import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";

export default function MainInfoContent({ infoData, type }) {
  const info = infoData && infoData;
  const coverImages = info.cover || info.bannerImage;

  return (
    <div className="relative h-screen inset-0 ">
      <BackToHomeBtn />
      <Overlay />
      {coverImages && (
        <div
          style={{
            backgroundImage: `url("${info.cover || info.bannerImage}")`,
          }}
          className="absolute h-screen -top-36 w-full bg-no-repeat bg-cover bg-center "
        ></div>
      )}
      <InfoDetails info={info} type={type} />
    </div>
  );
}
