import Overlay from "../Overlay";
import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";

export default function MainInfoContent({ infoData, type }) {
  const coverImages = infoData.cover || infoData.bannerImage;

  return (
    <div className="relative h-screen inset-0 ">
      <BackToHomeBtn />
      <Overlay />
      {coverImages && (
        <div
          style={{
            backgroundImage: `url("${infoData.cover || infoData.bannerImage}")`,
          }}
          className="absolute h-screen -top-36 w-full bg-no-repeat bg-cover bg-center "
        ></div>
      )}
      <InfoDetails infoData={infoData} type={type} />
    </div>
  );
}
