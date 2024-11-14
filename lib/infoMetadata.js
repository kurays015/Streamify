import siteMetadata from "@/config/site-metadata";
import titleHandler from "./titleHandler";
import tmdbImgHandler from "./tmdbImg";

export default function infoMetadata(info, previousImages) {
  const image = info.image ? info.image : tmdbImgHandler(info.poster_path);
  const desc = info.description ? info.description : info.overview;
  const title = info.title ? info.title : info.name;
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: titleHandler(title),
    description: desc,
    openGraph: {
      title: titleHandler(title),
      description: desc,
      images: [image, ...previousImages],
    },
  };
}
