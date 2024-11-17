import InfoDetails from "./InfoDetails";
import BackToHomeBtn from "../BackToHomeBtn";
import CoverImage from "../CoverImage";
import coverImage from "@/lib/coverImg";

export default function MainInfoContent({ info }) {
  return (
    <div>
      <BackToHomeBtn />
      <CoverImage cover={coverImage(info)} />
      <InfoDetails info={info} />
    </div>
  );
}
