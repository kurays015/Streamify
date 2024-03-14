import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";
import InfoPlayAndAddToWatchlist from "./InfoPlayAndAddToWatchlist";

export default function MainInfoContent({ infoData, id }) {
  const info = infoData && infoData;
  return (
    <main>
      <BackToHomeBtn />
      <CoverImage cover={info.cover} />
      <div className="relative z-10">
        <InfoPlayAndAddToWatchlist info={info} id={id} />
        <p className="text-white">Fixing somethin...</p>
      </div>

      {/* <InfoDetails info={info} id={id} /> */}
    </main>
  );
}
